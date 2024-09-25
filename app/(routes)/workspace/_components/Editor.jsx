'use client'

import { useEffect, useRef, useState } from 'react'
import { useUser } from '@clerk/nextjs'
import Checklist from '@editorjs/checklist'
import CodeTool from '@editorjs/code'
import Delimiter from '@editorjs/delimiter'
import EditorJS from '@editorjs/editorjs'
import Header from '@editorjs/header'
import List from '@editorjs/list'
import Paragraph from '@editorjs/paragraph'
import Table from '@editorjs/table'
import Alert from 'editorjs-alert'
import { doc, onSnapshot } from 'firebase/firestore'
import SimpleImage from 'simple-image-editorjs'

import { db } from '@/config/firebaseConfig'

const Editor = ({ params }) => {
  const editorRef = useRef(null)
  const { user } = useUser()
  const [isFetched, setIsFetched] = useState(false)

  useEffect(() => {
    if (user) {
      initializeEditor()
    }
  }, [user])

  const saveDocument = async () => {
    const editor = editorRef.current
    if (!editor) return

    const outputData = await editor.save()
    const documentRef = doc(db, 'documentOutput', params?.documentid)

    await updateDoc(documentRef, {
      output: JSON.stringify(outputData),
      editedBy: user?.primaryEmailAddress?.emailAddress,
    })
  }

  const fetchDocumentOutput = () => {
    const documentRef = doc(db, 'documentOutput', params?.documentid)

    const unsubscribe = onSnapshot(documentRef, doc => {
      const documentData = doc.data()

      if (
        documentData?.editedBy !== user?.primaryEmailAddress?.emailAddress ||
        !isFetched
      ) {
        editorRef.current?.render(JSON.parse(documentData?.output))
        setIsFetched(true)
      }
    })

    return () => unsubscribe()
  }

  const initializeEditor = () => {
    if (!editorRef.current) {
      const editor = new EditorJS({
        holder: 'editorjs',
        onChange: saveDocument,
        onReady: fetchDocumentOutput,
        tools: {
          header: Header,
          delimiter: Delimiter,
          paragraph: Paragraph,
          alert: {
            class: Alert,
            inlineToolbar: true,
            shortcut: 'CMD+SHIFT+A',
            config: {
              alertTypes: [
                'primary',
                'secondary',
                'info',
                'success',
                'warning',
                'danger',
                'light',
                'dark',
              ],
              defaultType: 'primary',
              messagePlaceholder: 'Enter a message',
            },
          },
          table: Table,
          list: {
            class: List,
            inlineToolbar: true,
            shortcut: 'CMD+SHIFT+L',
            config: {
              defaultStyle: 'unordered',
            },
          },
          checklist: {
            class: Checklist,
            inlineToolbar: true,
            shortcut: 'CMD+SHIFT+C',
          },
          image: SimpleImage,
          code: {
            class: CodeTool,
            shortcut: 'CMD+SHIFT+P',
          },
        },
      })

      editorRef.current = editor
    }
  }

  return (
    <div className="ml-20">
      <div id="editorjs" className="w-[70%]" />
      <div className="fixed bottom-10 left-0 z-10 md:ml-80">
        {/* <GenerateAITemplate
          setGenerateAIOutput={output => editorRef.current?.render(output)}
        /> */}
      </div>
    </div>
  )
}

export default Editor

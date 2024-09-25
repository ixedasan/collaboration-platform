import DocumentArticle from './DocumentArticle'
import DocumentHeader from './DocumentHeader'
import Editor from './Editor'

const Main = ({ params }) => {
  return (
    <div className="relative">
      <DocumentHeader />
      <DocumentArticle params={params} />
      <Editor params={params} />
    </div>
  )
}

export default Main

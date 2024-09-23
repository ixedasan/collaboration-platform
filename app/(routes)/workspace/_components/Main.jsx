import DocumentArticle from './DocumentArticle'
import DocumentHeader from './DocumentHeader'

const Main = ({ params }) => {
  return (
    <div className="relative">
      <DocumentHeader />
      <DocumentArticle params={params} />
    </div>
  )
}

export default Main

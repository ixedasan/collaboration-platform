import Main from '../../_components/Main'
import SideNavbar from '../../_components/SideNavbar'

const Document = ({ params }) => {
  return (
    <div>
      <div>
        <SideNavbar params={params} />
      </div>
      <div className="md:ml-72">
        <Main params={params} />
      </div>
    </div>
  )
}

export default Document

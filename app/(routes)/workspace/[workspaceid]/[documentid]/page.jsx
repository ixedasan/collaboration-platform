import SideNavbar from '../../_components/SideNavbar'

const Document = ({ params }) => {
  return (
    <>
      <div>
        <SideNavbar params={params} />
      </div>
      <div className="md:ml-72">Document</div>
    </>
  )
}

export default Document

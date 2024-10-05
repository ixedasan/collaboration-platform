import { Room } from '@/app/Room'

import Main from '../../_components/Main'
import SideNavbar from '../../_components/SideNavbar'

const Document = ({ params }) => {
  return (
    <Room params={params}>
      <div>
        <SideNavbar params={params} />
      </div>
      <div className="md:ml-72">
        <Main params={params} />
      </div>
    </Room>
  )
}

export default Document

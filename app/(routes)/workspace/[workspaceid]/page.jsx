import { Room } from "@/app/Room"
import SideNavbar from '../_components/SideNavbar'

const Workspace = ({ params }) => {
  return (
    <Room params={params}>
      <SideNavbar params={params} />
    </Room>
  )
}

export default Workspace

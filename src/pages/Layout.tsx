import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'

const Layout = () => {
  return (
    <div>
        <Navbar/>
        <Outlet/>
        <div style={{position: "absolute", bottom: 0, textAlign: "center", width: "100%"}}>
          footer
        </div>
    </div>
  )
}

export default Layout
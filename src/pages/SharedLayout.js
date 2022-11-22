// import Navbar from "../components/Navbar"
import StyledNavbar from "../components/StyledNav"
import { Outlet } from "react-router-dom"

const SharedLayout = () => {
  return (
    <>
        <StyledNavbar
        />
        <Outlet />
        <footer>
          <h5>Footer</h5>
        </footer>
    </>
  )
}

export default SharedLayout
import { Outlet } from "react-router-dom"
import Navbar from "../Navbar/Navbar"
import Menu from "../Menu/Menu"
import Footer from "../Footer/Footer"
import { Toaster } from "react-hot-toast"


const Root = () => {
  return (
    <div className="">
      <Toaster position="top-center" />
      <Menu></Menu>
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>

    </div>
  )
}
export default Root
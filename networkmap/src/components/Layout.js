import { Outlet } from "react-router-dom";
import Nav from '../components/_nav';
import Footer from '../components/_footer';
const Layout = () => {
  return (
    <>
    <Nav></Nav>
    <section>
      <Outlet />
    </section>
    <Footer></Footer>
    </>
  )
}

export default Layout
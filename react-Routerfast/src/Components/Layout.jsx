import { Outlet } from "react-router-dom";
import Header from "./Head/Header";
import Footer  from './Footer/Footer'

function Layout() {
  return (
    <>
      <Header />

      <main>
        <Outlet />
      </main>

      <Footer />
    </>
  );
}

export default Layout;

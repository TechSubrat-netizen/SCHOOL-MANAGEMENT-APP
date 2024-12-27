import { Outlet } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Menu from "./Components/Menu";
import Footer from "./Components/Footer";

function App() {
 
  return (
    <>
      <div>
        <div><Menu></Menu></div>
        <div>
          <Navbar></Navbar>
          <Outlet/>
          <Footer></Footer>
        </div>
      </div>
    </>
  )
}

export default App

import { Outlet } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Menu from "./Components/Menu";
import Footer from "./Components/Footer";

function App() {
 
  return (
    <>
      <div className="flex min-h-screen w-screen">
        {/* LEFT */}
        <div  className="w-[20%] sm:w-[16%] md:w-[12%] lg:w-[10%] bg-red-300"><Menu></Menu></div>
        {/* RIGHT */}
        <div className="w-[80%] sm:w-[84%] md:w-[88%] lg:w-[90%] bg-green-300">
          <Navbar></Navbar>
          <Outlet/>
          <Footer></Footer>
        </div>
      </div>
    </>
  )
}

export default App

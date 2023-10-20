import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

export default function Root() {
  return (
    <>
     
      <div>
      <Navbar></Navbar>
      <Outlet />
        <Footer></Footer>
    
      </div>
    </>
  );
}
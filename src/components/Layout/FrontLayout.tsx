import { Outlet } from "react-router";
import Header from "./Header";
import Footer from "./Footer";

export function Headerpage(){
            return(
                <>
               <div className="flex flex-col min-h-screen">
                 <Header/>
                <div className="flex-1">
                    <Outlet/>
                </div>
                <Footer/>
               </div>
                </>
            )
}
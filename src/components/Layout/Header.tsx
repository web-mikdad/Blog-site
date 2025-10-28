

import { Link } from "react-router";
import { Button } from "../ui/button";
import { Logo } from "../ui/logo";
import { ModeToggle } from "../ui/mode-toggle";
import { NavMenu } from "../ui/nav-menu";
import { SearchBar } from "../ui/searchBar";

const Header = () => {
  return (
    <div className="bg-black">
      <nav className="top-6 inset-x-4 h-16 bg-black  border dark:border-slate-700/70 max-w-(--breakpoint-xl) mx-auto rounded-full">
        <div className="h-full flex items-center justify-between mx-auto px-4">
          
         <Logo/>
           {/* Desktop Menu */}
          <NavMenu/>

          <div className="flex items-center gap-3">
            <Button
              variant="outline"
              className="hidden sm:inline-flex rounded-full"
            >
              <Link to="/Signup"><li>Sign In</li></Link> 
            </Button>
             <SearchBar/>
             <ModeToggle />
            

            {/* <Button className="rounded-full">Get Started</Button> */}

            {/* Mobile Menu */}
            <div className="md:hidden">
              
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header ;

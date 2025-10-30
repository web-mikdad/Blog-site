import { Link } from "react-router";

export function NavMenu(){
        return(
            <div>
                <ul className="flex gap-6 text-white">
                    <li>
                        <Link className="font-bold" to= "/">Home</Link>
                    </li> 
                    <li>
                        <Link className="font-bold"to= "/aboutpage">About</Link>
                    </li>
                    <li>
                        <Link className="font-bold"to= "/blog">Blog</Link>
                    </li>
                     <li>
                        <Link className="font-bold" to= "/services">Services</Link>
                    </li>
                     <li>
                        <Link className="font-bold"to= "/contact">Contact</Link>
                    </li>
                    
                </ul>
            </div>
        )
}
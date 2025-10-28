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
                        <Link className="font-bold" to= "/">Services</Link>
                    </li>
                     <li>
                        <Link className="font-bold"to= "/">Contact</Link>
                    </li>
                </ul>
            </div>
        )
}
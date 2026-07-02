import logo1 from "../assets/plants/logo1.png";
import { Search,ShoppingBag, Menu, ChevronDown } from "lucide-react";

export default function Navbar() {
    return(
       <nav className="flex justify-between items-center px-10 py-6">
        <div className="flex items-center ">
            <img
            src={logo1}
            alt="floravision logo"
            className="w-8 h-8 mb-8"
            />
        <h1 className="text-xl font-bold text-white mb-8">FloraVision</h1>
        </div>

        <ul className="hidden md:flex items-center mb-8 gap-10 text-gray-300">
            <li className="cursor-pointer text-gray-300">Home</li>
            <li className="cursor-pointer flex items-center gap-1 text-gray-300">Plant's Type
                <ChevronDown size={16}/>
            </li>
            <li className="cursor-pointer text-gray-300">More</li>
            <li className="cursor-pointer text-gray-300">Contact</li>
        </ul>
        <div className="flex items-center text-white gap-10">
            <Search size={20} className="cursor-pointer"/>
            <ShoppingBag size={20} className="cursor-pointer"/>
            <Menu size={20} className="cursor-pointer"/>
        </div>
       </nav> 
    );
}

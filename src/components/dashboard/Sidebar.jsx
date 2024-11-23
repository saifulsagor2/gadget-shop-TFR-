import { NavLink } from "react-router-dom"
import { GrOverview } from "react-icons/gr";
import { IoIosHome } from "react-icons/io";
import { CiLogout } from "react-icons/ci";

function Sidebar() {
    return (
        <div className="bg-gray-200 border-r border-black min-h-screen px-8 py-16">
            <h1 className="text-3xl font-bold mb-8 text-center">Gadget Shop</h1>
            <ul className="flex flex-col gap-2">
                <li className="btn bg-slate-700 text-white font-bold px-4 py-2 rounded-md 
                        border border-black">
                    <NavLink to="/dashboard/overview" className="flex items-center gap-2">
                        <GrOverview />
                        Overview
                    </NavLink>
                </li>
                <li className="btn bg-slate-700 text-white font-bold px-4 py-2 rounded-md 
                        border border-black">
                    <NavLink to="/" className="flex items-center gap-2">
                        <IoIosHome />
                        Home
                    </NavLink>
                </li>
                <li className="btn bg-slate-700 text-white font-bold px-4 py-2 rounded-md 
                        border border-black">
                    <button className="flex items-center gap-2">
                        <CiLogout />
                        Logout
                    </button>
                </li>
            </ul>
        </div>
    )
}

export default Sidebar

import { NavLink } from "react-router-dom";
import useAuth from "../hooks/useAuth"

function UserDropdown() {

    const { user, Logout } = useAuth();

    const handleLogout = () => {
        Logout();
    }

    return (
        <div className="dropdown dropdown-bottom dropdown-end">
            <div tabIndex={0} role="button">
                <div className="avatar">
                    <div className="w-10 rounded-full">
                        <img src={`${user?.photoURL || "/public/user.png"}`} />
                    </div>
                </div>
            </div>
            <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow flex flex-col gap-2">
                <li className="font-bold">
                    <NavLink to={"/"}>Dashboard</NavLink>
                </li>
                <li>
                    <button onClick={handleLogout} className="btn bg-slate-700 text-white font-bold rounded-md 
                        border border-black btn-sm">Logout</button>
                </li>
            </ul>
        </div>
    )
}

export default UserDropdown

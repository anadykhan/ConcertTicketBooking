import { useContext } from "react"
import { NavLink } from "react-router-dom"
import { AuthContext } from "../../providers/AuthProvider"

const Navbar = () => {

    const { user } = useContext(AuthContext)
    console.log(user )

    return (
        <div className="flex-col lg:flex-row navbar bg-base-100 h-96 lg:h-28 oswald tracking-[0.2rem] font-[500] w-full p-12">
            <div className="flex-1">
                <a className="btn btn-ghost normal-case text-4xl">OFFBEAT<span className="text-[#f45f0b]">.</span> </a>
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal px-1 font-bold flex flex-col lg:flex-row justtify-center items-center gap-4 lg:gap-7">
                    <li><NavLink to={"/"}>HOME</NavLink></li>
                    <li><NavLink to={"/blogs"}>BLOGS</NavLink></li>
                    <li><NavLink to={"/club"}>CLUB</NavLink></li>
                    {
                        user && <div className="w-10 rounded-full">
                            <img src={user.photoURL ? user.photoURL : "/assets/react.svg"} className="rounded-full p-1 border-2 border-black"/>
                        </div>
                    }
                    <li className="hidden">
                        <details>
                            <summary>
                                Parent
                            </summary>
                            <ul className="p-2 bg-base-100">
                                <li><a>Link 1</a></li>
                                <li><a>Link 2</a></li>
                            </ul>
                        </details>
                    </li>
                </ul>
            </div>
        </div>
    )
}
export default Navbar
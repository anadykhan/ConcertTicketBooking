import { useContext } from "react"
import { NavLink } from "react-router-dom"
import { AuthContext } from "../../providers/AuthProvider"

const Menu = () => {

  const {user, logout} = useContext(AuthContext)

  const handleSignOut = () => {
    logout()
    .then(() => {console.log("Logged out")})
    .catch((error) => {
      console.log(error)
    })
  }

  return (
    <div className="flex justify-between p-2 lg:p-4 bg-black text-white text-xs font-light">
        <div className="flex gap-2 lg:gap-5">
        <div>Call Us +534243252</div>
        <div>|</div>
        <div>nightfire@gmail.com</div>
        <div>|</div>
        </div>

        <div className="flex">
        <div>
          <div className="mr-5">
            {
              user ? <button onClick={handleSignOut}>Sign Out</button> : <NavLink to={"/signin"}>Sign In</NavLink>
            }
          </div>
        </div>
        <div className="mr-5">|</div>
        <div>
          <div className="">{ 
            user ? user.displayName ? user.displayName : user.email : <NavLink to={'/registration'}>Registration</NavLink>
          }</div>
        </div>
        </div>
    </div>
  )
}
export default Menu
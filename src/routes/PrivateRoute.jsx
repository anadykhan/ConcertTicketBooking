import { useContext } from "react"
import { AuthContext } from "../providers/AuthProvider"
import { Navigate, useLocation } from "react-router-dom"

const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext)
    const location = useLocation()
    if(loading){
        return <span className="loading loading-bars loading-lg absolute w-full h-full text-[#f45f0b]"></span>
    }
    if(user){
        return children
    }

    return <Navigate state={location.pathname} to="/signin"></Navigate>
}
export default PrivateRoute
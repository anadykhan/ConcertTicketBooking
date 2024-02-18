import { createContext, useEffect, useState } from "react"
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from '../firebase/firebase.config'
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
export const AuthContext = createContext(null)
import toast from "react-hot-toast";


const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();


const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, cuurentUser => {
            console.log('Auth state changed')
            console.log(cuurentUser)
            setUser(cuurentUser)
            setLoading(false)
        })
        return () => unsubscribe()
    },[])

    const signIn = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    } 

    const logout = () => {
        setLoading(true)
        toast('LOGGED OUT!', {
            style: {
                background: '#f45f0b',
                fontFamily: 'Oswald',
                color: 'white',
                fontSize: '1.2rem',
                fontWeight: 200,
                borderRadius: '0rem'
            }
        })
        return signOut(auth)
    }

    const signInGoogle = () => {
        setLoading(true)
        signInWithPopup(auth, googleProvider)
    }

    const authInfo = {
        user,
        loading,
        createUser,
        signIn,
        signInGoogle,
        logout
    }

  return (
    <AuthContext.Provider value={authInfo}>
        {children}
    </AuthContext.Provider>
  )
}
export default AuthProvider
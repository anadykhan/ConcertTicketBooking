import { useContext } from "react"
import { AuthContext } from "../../providers/AuthProvider"
import { useLocation, useNavigate } from "react-router-dom"
import { FcGoogle } from 'react-icons/fc';
import toast from "react-hot-toast";

const Signin = () => {

  const { signIn, signInGoogle } = useContext(AuthContext)
  const navigate = useNavigate()
  const location = useLocation()
  console.log(location)

  const handleGoogleSignIn = () => {
    signInGoogle()
      .then((result) => {
        
        const googleUser = result.user;
        navigate(location?.state ? location.state : "/")
        console.log(googleUser)
        toast('LOGGED IN!', {
          style: {
            background: '#f45f0b',
            fontFamily: 'Oswald',
            color: 'white',
            fontSize: '1.2rem',
            fontWeight: 200,
            borderRadius: '0rem'
          }
        })

      })
      .catch((error) => {
        toast('INVALID CREDENTIALS!', {
          style: {
            background: '#fd2c00',
            fontFamily: 'Oswald',
            color: 'white',
            fontSize: '1.2rem',
            fontWeight: 200,
            borderRadius: '0rem'
          }
        })
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage)
      });
  }


  const handleSignin = (e) => {
    e.preventDefault()
    const form = new FormData(e.currentTarget)
    const email = form.get('email')
    const password = form.get('password')
    signIn(email, password)
      .then((result) => {
        toast('LOGGED IN!', {
          style: {
            background: '#f45f0b',
            fontFamily: 'Oswald',
            color: 'white',
            fontSize: '1.2rem',
            fontWeight: 200,
            borderRadius: '0rem'
          }
        })
        console.log(result)
        navigate(location?.state ? location.state : "/")

      })
      .catch((error) => {
        toast('INVALID CREDENTIALS!', {
          style: {
            background: '#fd2c00',
            fontFamily: 'Oswald',
            color: 'white',
            fontSize: '1.2rem',
            fontWeight: 200,
            borderRadius: '0rem'
          }
        })
        console.log(error)
      })
  }

  return (
    <div className="bg-black p-20">
      <div className="oswald text-3xl text-white mb-16">
        SIGN IN TO FEEL THE CROWD <span className="text-[#f45f0b]">.</span>
      </div>
      <div className="flex flex-col gap-10">
        <div className="oswald font-bold text-6xl text-white">
          LOGIN
        </div>
        <form onSubmit={handleSignin} className="flex flex-col w-full gap-10">
          <input type="text" placeholder="Email" className="bg-black border-white border-2 p-3 focus:outline-none text-white" name="email" />
          <input type="password" placeholder="Password" className="bg-black border-white border-2 p-3 focus:outline-none text-white" name="password" />
          <button type="submit" className="custom btn btn-active btn-primary rounded-none p-7 tracking-[0.2rem] oswald font-light w-32">SIGNIN</button>

        </form>
        <div className="text-white">
          OR
        </div>
        <button className="custom2 btn btn-active btn-primary rounded-none p-7 tracking-[0.2rem] oswald font-light w-48" onClick={handleGoogleSignIn}>
          <div className="flex justify-center items-center">
            <div className="w-32">SIGN IN WITH</div>
            <div><FcGoogle></FcGoogle></div>
          </div>
        </button>
      </div>
    </div>
  )
}
export default Signin
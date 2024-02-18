import { useContext } from "react"
import { AuthContext } from "../../providers/AuthProvider"
import toast from "react-hot-toast";


import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from "react-router-dom";

const Registration = () => {

    const { createUser, user } = useContext(AuthContext)
    const navigate = useNavigate()

    const handleGoToRegistration = () => {
        navigate('/signin')
    }

    const handleRegistration = (e) => {
        e.preventDefault()
        console.log(e.currentTarget)
        const form = new FormData(e.currentTarget)
        const name = form.get('name')
        const email = form.get('email')
        const password = form.get('password')
        const textarea = form.get('textarea')

        if (password.length <= 6 || /^[^A-Z!@#$%^&*()_+{}\[\]:;<>,.?~\\|/]*$/.test(password)){
            toast('CONDITIONS DO NOT MATCH!', {
                style: {
                    background: '#fd2c00',
                    fontFamily: 'Oswald',
                    color: 'white',
                    fontSize: '1.2rem',
                    fontWeight: 200,
                    borderRadius: '0rem'
                }
            })
            
            console.log("Cannot register")
            return
        }

        createUser(email, password)
            .then((userCredential) => {
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
                const user = userCredential.user;
                console.log(user)
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

    return (
        <div >
            <div className="bg-black">
                <div>
                    <img src="/assets/yvette-de-wit-NYrVisodQ2M-unsplash.jpg" alt="" className="h-[25rem] w-full object-cover brightness-75 w-full"/>
                </div>
                <div className="p-10 lg:px-32 flex flex-col gap-10 py-28">
                    <div className="text-white flex flex-col">
                        <div className="quentin text-4xl text-[#f45f0b]">You very own</div>
                        <div className="oswald text-5xl">REGISTRATION FORM<span className="text-[#f45f0b]">.</span></div>
                        <div className="text-sm font-extralight mt-10">
                            To complete the registration form, begin by providing your accurate personal details, contact information, and any required supporting documents. Ensure legible handwriting and double-check for accuracy. Sign and date the form as needed. Submit the completed form and any fees through the specified method, and retain a copy for your records.
                        </div>
                    </div>
                    <form onSubmit={handleRegistration} className="flex flex-col lg:w-[30rem] gap-5">
                        <input type="text" placeholder="Name" className="bg-black border-white border-2 p-3 focus:outline-none text-white" name="name" />
                        <input type="text" placeholder="Email" className="bg-black border-white border-2 p-3 focus:outline-none text-white" name="email" />
                        <input type="password" placeholder="Password" className="bg-black border-white border-2 p-3 focus:outline-none text-white" name="password" />
                        <textarea name="textarea" id="" cols="30" rows="10" placeholder="A Note from You" className="bg-black border-white border-2 p-3 focus:outline-none text-white"></textarea>
                        <button type="submit" className="custom btn btn-active btn-primary rounded-none p-7 tracking-[0.2rem] oswald font-light w-32">SUBMIT</button>
                    </form>
                    <div className="text-white">
                        OR HAVE AN ACCOUNT?
                    </div>
                    <button className="custom2 btn btn-active btn-primary rounded-none p-7 tracking-[0.2rem] oswald font-light w-48" onClick={handleGoToRegistration}>
                        <div className="flex justify-center items-center">
                            <div className="w-32">SIGN IN</div>
                        </div>
                    </button>
                </div>
            </div>
        </div>
    )
}
export default Registration
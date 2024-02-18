import { useNavigate } from "react-router-dom"

const NotFound = () => {
    

    const navigate = useNavigate()

    const handleButton = () => {
        navigate("/")
    }

  return (
      <div className="bg-black text-white flex flex-col justify-center items-center h-[32rem]">
          <div className="flex flex-col justify-center items-center gap-5">
              <div className="oswald text-9xl font-bold">404<span className="text-[#f45f0b]">.</span></div>
              <div className="quentin text-[#f45f0b] text-5xl text-center">Whoops!!!</div>
              <div className="oswald text-2xl text-center">SOMETHING WENT WRONG!!</div>
              <div className="text-center">The page you are looking doesnot exists. Please check your internet connection and select the accurate route.</div>
              <button onClick={handleButton} className="custom btn btn-active btn-primary rounded-none p-7 tracking-[0.2rem] oswald font-light w-48">GO TO HOME</button>
          </div>
      </div>
  )
}
export default NotFound
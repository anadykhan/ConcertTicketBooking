import { NavLink } from "react-router-dom"
import { AiFillGoogleCircle } from 'react-icons/ai';
import { AiFillTwitterCircle } from 'react-icons/ai';
import { FaFacebook } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className="bg-black text-white flex flex-col justify-center items-center h-[22rem] gap-7">
          <div className="flex flex-col justify-center items-center gap-3">
              <div className="oswald text-6xl font-bold">OFFBEAT<span className="text-[#f45f0b]">.</span></div>
              <div className="quentin text-[#f45f0b] text-2xl text-center">Welcome to the Domain Where Music Lives</div>
          </div>
        <ul className="flex oswald gap-6 font-light">
              <li><NavLink to={"/"} className="tracking-[0.2rem]">HOME</NavLink></li>
              <li><NavLink to={"/blogs"} className="tracking-[0.2rem]">BLOGS</NavLink></li>
              <li><NavLink to={"/club"} className="tracking-[0.2rem]">CLUB</NavLink></li>
        </ul>
        <div className="flex gap-5">
              <AiFillGoogleCircle></AiFillGoogleCircle>
              <AiFillTwitterCircle></AiFillTwitterCircle>
              <FaFacebook></FaFacebook>
        </div>
    </div>
  )
}
export default Footer
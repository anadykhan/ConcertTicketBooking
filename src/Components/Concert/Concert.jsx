import { Navigate, useNavigate } from 'react-router-dom'
import './Concert.css'
import { useEffect } from 'react'

const Concert = ({ data }) => {
  const { id, concert_name, concert_image } = data
  const navigate = useNavigate()

  const handleService = () => {
    navigate(`/service/${id}`)
  }

  useEffect(() => {
    AOS.init();
  },[])

  return (
    <div className="container h-64 w-[27rem] my-7 oswald" data-aos="zoom-in" onClick={handleService}>
      <div className="title absolute text-white text-6xl w-[27rem] h-68 p-5 text-center mt-12 z-10">{concert_name}</div>
      <img className="img h-64 w-[27rem] object-cover" src={concert_image} alt="" />
    </div>
  )
}
export default Concert
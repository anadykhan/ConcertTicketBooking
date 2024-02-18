import { useEffect, useState } from "react"
import Concert from "../Concert/Concert"



const Concerts = () => {

    const [concerts, setConcerts]= useState([])

    useEffect(() => {
        fetch('data.json')
        .then(res => res.json())
        .then(data => setConcerts(data))
    },[])

  return (

    <div className="my-20 flex flex-col justify-center items-center oswald">
        <div className="flex flex-col justify-center items-center lg:mt-12 lg:mb-6">
              <div className="quentin text-4xl text-[#f45f0b] quentin">Pick Your</div>
              <div className="text-7xl">POISON <span className="text-[#f45f0b]">.</span></div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 place-items-center">
            {
                concerts.map(data => <Concert key={data.id} data={data}></Concert>)
            }
        </div>
    </div>
  )
}
export default Concerts
import { useState, useEffect } from "react"
import Facility from "../Facility/Facility"
import toast from "react-hot-toast"


const Club = () => {


    const [facility, setFacility] = useState([])

    useEffect(() => {
        fetch('club.json')
            .then(res => res.json())
            .then(data => setFacility(data))
    }, [])

    return (
        <div className="bg-black">
            <div>
                <div className="absolute text-white z-10 flex flex-col justify-center items-center w-full h-[30rem] gap-12 lg:gap-0">
                    <div className="quentin text-[#f45f0b] lg:text-4xl">
                        Make the Night More Bright With the Clubs and Drinks
                    </div>
                    <div className="oswald flex flex-col gap-2">
                        <div className="text-[4rem] lg:text-[9.5rem] font-semibold text-center lg:text-start">
                            WITH ARTISTS <span className="text-[#f45f0b]">.</span>
                        </div>
                        <div className="text-5xl text-center lg:text-end">
                            BOOK YOUR SEATS NOW
                        </div>
                    </div>
                    <div className="flex justify-center lg:justify-end w-full lg:mr-[30rem] lg:mt-10">
                        <button className="custom btn btn-active btn-primary rounded-none p-7 tracking-[0.2rem] oswald font-light w-32" onClick={() => {
                            toast('SUBSCRIBED!', {
                                style: {
                                    background: '#f45f0b',
                                    fontFamily: 'Oswald',
                                    color: 'white',
                                    fontSize: '1.2rem',
                                    fontWeight: 200,
                                    borderRadius: '0rem'
                                }
                            })
                        }}>SUBSCRIBE</button>
                    </div>

                </div>
                <img src="/assets/Club1.jpg" alt="" className="h-[30rem] w-full object-cover brightness-50" />
            </div>

            <div className="py-40 flex flex-col justify-center items-center gap-20 lg:px-28 bg-black">
                {
                    facility.map(data => <Facility key={data.id} data={data}></Facility>)
                }
            </div>

        </div>
    )
}
export default Club
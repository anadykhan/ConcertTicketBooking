import { useLoaderData, useParams } from "react-router-dom"
import toast from "react-hot-toast"

const ServiceDetail = () => {
    const services = useLoaderData()
    const id = useParams()
    const service = services.find(data => Number(data.id) == id.id)
    const { description, date, participants, type, artist, price, concert_image, artist_image } = service
    return (
        <div className="bg-black p-20 flex flex-col gap-28">
            <div>
                <div className="text-[#f45f0b] font-light">OFFBEAT</div>
                <div className="oswald text-5xl text-white">{artist.toUpperCase()}<span className="text-[#f45f0b]">.</span></div>
            </div>
            <div className="grid lg:grid-cols-2 gap-10 lg:gap-0">
                <div className="flex flex-col gap-8">
                    <img src={artist_image} alt="" className="w-[18rem] h-[20rem] object-cover grayscale"/>
                    <div className="text-white oswald text-2xl">DETAILS</div>
                    <div className="flex oswald gap-5 text-xl text-white leading-8">
                        <div>
                            <div>DATE:</div>
                            <div>TYPE:</div>
                            <div>PEOPLE:</div>
                            <div>PRICE:</div>
                        </div>
                        <div className="font-thin">
                            <div>{date}</div>
                            <div>{type}</div>
                            <div>{participants}</div>
                            <div>{price}</div>
                        </div>
                        
                    </div>
                    <div>
                        <button className="custom btn btn-active btn-primary rounded-none p-7 tracking-[0.2rem] oswald font-light w-32" onClick={() => {
                            toast('PURCHASED!', {
                                style: {
                                    background: '#f45f0b',
                                    fontFamily: 'Oswald',
                                    color: 'white',
                                    fontSize: '1.2rem',
                                    fontWeight: 200,
                                    borderRadius: '0rem'
                                }
                            })
                        }}>PURCHASE</button>
                    </div>
                </div>
                <div>
                    <div>
                        {/*Location here*/}
                    </div>
                    <div className="text-white flex flex-col gap-5">
                        <div className="oswald text-3xl">ABOUT TOUR</div>
                        <div className="font-thin">{description}</div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ServiceDetail
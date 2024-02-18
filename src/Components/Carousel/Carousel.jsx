const Carousel = () => {
    return (
        <div>
            <div className="absolute flex flex-col justify-center items-center w-full gap-5 lg:gap-14 z-10 leading-[14rem] h-[31rem]">
                <div className="text-white text-8xl lg:text-[13rem] font-medium oswald">ROCKON !!!</div>
                <div className="p-10 lg:p-0 subtitle parisienne text-2xl lg:text-5xl text-[#f45f0b] text-center quentin text-[2.5rem]">Get in to the thrill of rock and make yourself groove</div>
                <button className="custom btn btn-active btn-primary rounded-none p-7 tracking-[0.2rem] oswald font-light" >Grab it NOW!</button>
            </div>
            <img className="h-[33rem] w-full object-cover grayscale" src="/assets/Concert5.jpg" alt="" />
        </div>
    )
}
export default Carousel
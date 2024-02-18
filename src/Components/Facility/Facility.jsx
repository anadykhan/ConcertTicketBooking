

const Facility = ({data}) => {

    const { id, title, cover, description } = data

    return (
        <div className="flex flex-col lg:flex-row text-white gap-10">
            <div>
                <img src={cover} alt="" className="lg:w-[25rem] lg:h-[15rem] object-cover"/>
            </div>
            <div className="lg:w-[35rem] flex flex-col gap-5 p-10 lg:p-0">
                <div className="quentin text-[#f45f0b] text-3xl">
                    Facility {id}
                </div>
                <div className="oswald text-6xl">
                    {title.toUpperCase()}
                </div>
                <div className="text-sm">
                    {description}
                </div>
            </div>
        </div>
    )
}
export default Facility
import { useNavigate } from "react-router-dom"

const Blog = ({data}) => {

    const { id, title, writer, date, cover , content} = data

    const navigate = useNavigate()

    const handleReadMore = () => {
        navigate(`/blogs/${id}`)
    }

    return (
        <div className="flex flex-col gap-10">
            <div className="text-white flex flex-col gap-10">
                <img src={cover} alt="" className="h-[25rem] w-[55rem] object-cover" />
                <div className="flex flex-col gap-2">
                    <div className="text-[#f45f0b] text-sm">by {writer} in {date}</div>
                    <div className="oswald text-4xl">{title.toUpperCase()}</div>
                </div>
                <div className="font-light text-justify">{content.slice(0, 100)} ...</div>
            </div>
            <button className="custom btn btn-active btn-primary rounded-none p-7 tracking-[0.2rem] oswald font-light w-48" onClick={handleReadMore}>READ MORE</button>
        </div>
    )
}
export default Blog
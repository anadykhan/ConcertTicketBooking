import { useLoaderData, useParams } from "react-router-dom"

const BlogDetail = () => {

    const blogs = useLoaderData()
    const blogID = useParams()
    const blog = blogs.find(data => Number(data.id) == blogID.id)
    const { id, title, writer, date, cover, content } = blog
    console.log(blog)

  return (
      <div className="flex flex-col gap-10 bg-black p-20 justify-center items-center">
          <div className="text-white flex flex-col gap-10 justify-center items-center">
              <img src={cover} alt="" className="h-[25rem] w-[55rem] object-cover" />
              <div className="flex flex-col gap-2 justify-center items-center">
                  <div className="text-[#f45f0b] text-sm">by {writer} in {date}</div>
                  <div className="oswald text-4xl">{title.toUpperCase()}</div>
              </div>
              <div className="font-light text-justify">{content}</div>
          </div>
      </div>
  )
}
export default BlogDetail
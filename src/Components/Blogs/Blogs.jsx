import Blog from "../Blog/Blog"
import { useState,useEffect } from "react"

const Blogs = () => {

    const [blogs, setBlogs] = useState([])

    useEffect(() => {
        fetch('blog.json')
            .then(res => res.json())
            .then(data => setBlogs(data))
    }, [])


  return (
    <div>
        <div>
            
        </div>
          <div className="bg-black p-20 flex flex-col gap-28 justify-center items-center">
              {
                  blogs.map(data => <Blog key={data.id} data={data}></Blog>)
              }
          </div>
    </div>
  )
}
export default Blogs
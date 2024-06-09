import { FaHeart } from "react-icons/fa";
import { FaComments } from "react-icons/fa";
import { Link } from "react-router-dom";



function BlogCard({blogImage, blogTitle, blogDesc, likes, comments}) {
  return (
    <Link to={`/blogs/${1121}`}>
        <div className="grid grid-cols-4">
        <div className="blog-image col-span-1 w-full h-48 rounded-sm relative cursor-pointer">
            <img src={blogImage} alt="Blog-image" className="absolute inset-0 rounded-sm" />
        </div>
        <div className="blog-title-likes-comments col-span-3 px-5 py-3">
            <div className="blog-title text-xl font-bold text-white py-2 justify-center">{blogTitle}</div>
            <div className="blog-desc text-textcolor-secondary">
                <p className="justify-center text-sm">
                   {blogDesc}
                </p>
            </div>
            <div className="blog-likes-comments my-5 flex gap-5">
                <div className="flex justify-center items-center gap-1 text-textcolor-secondary">
                    <FaHeart className="w-6 h-6"/>
                    <p className="">{likes}</p>
                </div>
                <div className="flex justify-center items-center gap-1 text-textcolor-secondary">
                    <FaComments className="w-6 h-6"/>
                    <p className=" ">{comments}</p>
                </div>
            </div>
        </div>
        </div>
    </Link>
  )
}

export default BlogCard
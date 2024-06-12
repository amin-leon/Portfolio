import BlogCard from "../helpers/BlogCard"
import SubHeroSection from "../helpers/SubHeroSection"
import Wrapper from "../helpers/Wrapper"

const blogs = [
    {
      blogImage: "https://th.bing.com/th/id/OIP.vgqihX-UnkNHEe2pnzNAaQAAAA?rs=1&pid=ImgDetMain",
      blogTitle: "Ty Dolla $ign - Happy birthday twin 💕 | Facebook",
      blogDesc: "Rapper Ty Dolla $ign, birth name Tyrone William Griffin Jr., isn't only a world about her on his social media accounts.",
      likes: 7,
      comments: 10
    },
    {
      blogImage: "https://th.bing.com/th/id/OIP.A_kRjU6YaLOcLuYaEWBCZQHaEo?rs=1&pid=ImgDetMain",
      blogTitle: "Artificial intelligence (AI) | Definition, Examples, Types ...",
      blogDesc: "Used by some of the world's largest companies, Next.js enables you to create high-quality web applications with the power of React components.",
      likes: 15,
      comments: 5
    },
    {
      blogImage: "https://miro.medium.com/v2/resize:fit:1400/1*BQZAbczBfLYtPp-6HmN0ZQ.jpeg",
      blogTitle: "Next.js 13: A Beginner's Guide. Next.js is a React framework used to… | by Guilherme Pompilio |",
      blogDesc: "Used by some of the world's largest companies, Next.js enables you to create high-quality web applications with the power of React components.",
      likes: 15,
      comments: 5
    }
  ];

function Blogs() {
  return (
        <div className="all bg-secondary-alertenative">
            <SubHeroSection title='Blogs Page' navigateTo='Home'/>
            <div className="container bg-secondary-alertenative">
                <Wrapper>
                    <div className="blogs-container grid grid-cols-4 gap-3 py-5">
                        <div className="blogs-list col-span-3">
                            <div className="lists">
                                {blogs.map((blog, index) => (
                                    <BlogCard
                                    key={index}
                                    blogImage={blog.blogImage}
                                    blogTitle={blog.blogTitle}
                                    blogDesc={blog.blogDesc}
                                    likes={blog.likes}
                                    comments={blog.comments}
                                    />
                                ))}
                            </div>
                        </div>
                        <div className="blogs-filter col-span-1 bg-primary-main">
                            <input type="text" placeholder="Search ......" className="px-5 py-2 focus:outline-none rounded-sm"/>
                            <div className="categories text-textcolor-secondary p-3">
                                <div className="py-5 text-xl font-bold">Categories:</div>
                                <div className="py-3 bg-secondary-alertenative rounded-sm px-2 mt-1 cursor-pointer">Technology</div>
                                <div className="py-3 bg-secondary-alertenative rounded-sm px-2 mt-3 cursor-pointer">News</div>
                                <div className="py-3 bg-secondary-alertenative rounded-sm px-2 mt-3 cursor-pointer">Artificial intelligence</div>
                                <div className="py-3 bg-secondary-alertenative rounded-sm px-2 mt-3 cursor-pointer">Mobile development</div>
                            </div>
                        </div>
                    </div>
                </Wrapper>
            </div>
        </div>
  )
}

export default Blogs
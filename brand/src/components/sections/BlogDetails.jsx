import BlogDetailsCard from "../../helpers/BlogDetailsCard";
import Comments from "../../helpers/Comments";
import SubHeroSection from "../../helpers/SubHeroSection"
import Wrapper from "../../helpers/Wrapper"

const blogs = [
    {
      blogImage: "https://th.bing.com/th/id/OIP.vgqihX-UnkNHEe2pnzNAaQAAAA?rs=1&pid=ImgDetMain",
      blogTitle: "Ty Dolla $ign - Happy birthday twin 💕 | Facebook",
      blogDesc: "Rapper Ty Dolla $ign, birth name Tyrone William Griffin Jr., isn't only a world-renowned recording artist, but he's a proud dad. Ty Dolla $ign is a devoted dad to his daughter Jailynn. It's unclear exactly who Jailynn's mom is, but her star dad is very devoted to his daughter. He often brings her to red-carpet events and shares sweet messages about her on his social media accounts.",
      likes: 7,
      comments: 10,
      category: 'News',
      date: '12, Jun 2024'
    }
  ];

  const comments = [
    {
      userimage: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      name: 'NP Leon',
      text: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled",
      date: '12, May 2025'
    },
    {
        name: 'Josse Moreen',
        text: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled",
        date: '16, April 2025',
        userimage: 'https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?q=80&w=1587&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
      },
  ];

  const posts = [
    {
      postTitle: 'Flutter - Flutter framework',
      desc: "Flutter - Flutter framework is the game changer",
      date: '12, May 2025',
      blogImg: 'https://i.ytimg.com/vi/P4Ua8cK_TeA/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLDvYIm_6Gx1nVz3mscVZUWqCIu-UQ',
    },
    {
      postTitle: 'What is Artificial Intelligence (AI)? | IBM',
      desc: "(AI) is, how it’s used today, and what it may do.",
      date: '13, June 2024',
      blogImg: 'https://plus.unsplash.com/premium_photo-1680503587331-d8d4f8047393?q=80&w=1664&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
  ];

function BlogDetails() {
  return (
        <div className="all bg-secondary-alertenative">
            <SubHeroSection title='Blog Details' navigateTo='Home'/>
            <div className="container bg-secondary-alertenative">
                <Wrapper>
                    <div className="blogs-container grid grid-cols-5 gap-3 py-5">
                        <div className="blogs-list col-span-3">
                            <div className="lists">
                                {blogs.map((blog, index) => (
                                    <BlogDetailsCard
                                    key={index}
                                    blogImage={blog.blogImage}
                                    blogTitle={blog.blogTitle}
                                    blogDesc={blog.blogDesc}
                                    likes={blog.likes}
                                    category={blog.category}
                                    date={blog.date}
                                    comments={blog.comments}
                                    />
                                ))}
                            </div>
                            <div className="comments">
                                <p className="text-textcolor-secondary">Comments</p>
                                <div className="user-comments">
                                    <div>
                                    {comments.map((comment, index) => (
                                        <Comments
                                        key={index}
                                        username={comment.name}
                                        comment={comment.text}
                                        date={comment.date}
                                        userimage={comment.userimage}
                                        />
                                    ))}
                                    </div>
                                </div>
                                <div className="text-comment-input flex flex-col pt-10">
                                    <textarea name="" id="" rows="5" placeholder="Type your comment ...." className="w-full bg-transparent border-b border-x-textcolor-secondary text-textcolor-secondary focus:outline-none p-4 rounded-sm" />
                                    <button className="px-5 py-2 bg-transparent border text-white mt-3 border-x-textcolor-secondary bg-blue-500 w-56">Comment</button>
                                </div>
                            </div>
                        </div>
                        <div className="blogs-filter col-span-2 bg-primary-main">
                            <div className="categories text-textcolor-secondary p-3">
                                <div className="py-5 text-xl font-bold">Latest Posts:</div>
                                <div>
                                    {posts.map((post, index) => (
                                        <Comments
                                        key={index}
                                        username={post.postTitle}
                                        comment={post.desc}
                                        date={post.date}
                                        userimage={post.blogImg}
                                        />
                                    ))}
                                    </div>
                            </div>
                        </div>
                    </div>
                </Wrapper>
            </div>
        </div>
  )
}

export default BlogDetails
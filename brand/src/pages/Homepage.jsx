import Wrapper from '../helpers/Wrapper'
import { FaPlay } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { CiYoutube } from "react-icons/ci";
import { CiInstagram } from "react-icons/ci";
import { RiFacebookBoxLine } from "react-icons/ri";
import { CiLinkedin } from "react-icons/ci";
import PlayButton from '../assets/styles/PlayButton.css';
import { Typing } from '../helpers/Typing';




function Homepage() {
  return (
      <div className="home-all bg-primary-main">
        <Wrapper>
        <div className="container grid grid-cols-2 gap-3 pt-24 pb-24 border-gray-50">
          <div className="secial-pic flex flex-wrap items-center justify-center flex-col gap-2">
            <div className="pic">
                <div className="image">
                  <img src="https://images.unsplash.com/photo-1619947663603-9eac34f2230f?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="My pic" className='w-96 h-96 rounded-md'/>
                </div>
            </div>
            <div className="social">
              <div className="social-play flex flex-col justify-center items-center gap-3">
                <div className="video-play-icon">
                  <FaPlay /> 
                </div>
                <div className="s-medias text-textcolor-secondary text-xl flex flex-row gap-2">
                  <FaXTwitter />
                  <RiFacebookBoxLine />
                  <CiYoutube />
                  <CiInstagram />
                  <CiLinkedin />
                </div>
              </div>
            </div>
          </div>
          <div className="full-text-skills flex justify-center items-center gap-3 flex-col">
            <div className="fullstack-text flex justify-start items-center flex-col gap-4">
              <h5 className='text-textcolor-primary'>Hey, I’m Leon</h5>
              <h1 className='text-3xl text-textcolor-primary font-extrabold pt-4'>
                <Typing />
              </h1>
            </div>
            <div className="we-do flex justify-start items-center flex-col pt-4 text-textcolor-secondary">
              <span>UI/UX Design</span>
              <span>Wed Dev </span>
              <span>Mobile Dev</span>
            </div>
          </div>
        </div>
        </Wrapper>
      </div>
  )
}

export default Homepage
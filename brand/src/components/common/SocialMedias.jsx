import { FaXTwitter } from "react-icons/fa6";
import { CiYoutube } from "react-icons/ci";
import { CiInstagram } from "react-icons/ci";
import { RiFacebookBoxLine } from "react-icons/ri";
import { CiLinkedin } from "react-icons/ci";

function SocialMedias() {
  return (
    <div className="s-medias text-textcolor-secondary text-xl flex flex-row gap-2">
        <FaXTwitter />
        <RiFacebookBoxLine />
        <CiYoutube />
        <CiInstagram />
        <CiLinkedin />
    </div>
  )
}

export default SocialMedias
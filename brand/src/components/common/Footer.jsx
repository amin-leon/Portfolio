import Wrapper from '../../helpers/Wrapper'
import { BsTelephoneInbound } from "react-icons/bs";
import { MdOutlineEmail } from "react-icons/md";
import SocialMedias from './SocialMedias';


function Footer() {
  return (
    <div className='px-16 bg-primary-main'>
      <Wrapper>
        <div className="footer flex justify-between p-10">
          <div className="email flex justify-between gap-6">
            <div className="telephone flex gap-3 items-center text-textcolor-secondary">
              <BsTelephoneInbound />
              <p>0780922562</p>
            </div>
            <div className="email-address flex gap-3 items-center text-textcolor-secondary">
              <MdOutlineEmail />
              <p>leonndayishimiye10@gmail.com</p>
            </div>
          </div>
          <div className="social-medias">
            <div className="icons">
              <SocialMedias />
            </div>
          </div>
        </div>
      </Wrapper>
    </div>
  )
}

export default Footer
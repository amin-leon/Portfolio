import Wrapper from '../../helpers/Wrapper'
import Section from '../../assets/styles/Section.css';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { RiDoubleQuotesL } from "react-icons/ri";
import { RiDoubleQuotesR } from "react-icons/ri";



function Testimonials() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
  };

  return (
    <div className="testimonials-section">
      <div className="overlay" id="services">
        <Wrapper>
          <div className="service-header">
            <div className="big-small-header flex justify-center items-center flex-col gap-1">
              <h5 className='text-textcolor-secondary'>|| Testimonials</h5>
              <div className="big-header text-textcolor-primary">
                <h1 className='text-3xl font-bold text-textcolor-primary'>What Clients Say</h1>
              </div>
            </div>
            <Slider {...settings} className='pt-5'>
                    <div className="slide">
                        <div className="service-cards grid grid-cols-3 gap-4">
                            <div className="cards h-96 p-10 flex items-center flex-col gap-3 bg-primary-main rounded-md">
                                <div className="message">
                                        <span className='text-3xl text-blue-300'><RiDoubleQuotesL /></span>
                                        <p className='text-textcolor-primary'>
                                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                                            Lorem Ipsum has been the industry's standard dummy text
                                        </p>
                                        <span className='text-3xl text-blue-300'><RiDoubleQuotesR /></span>
                                </div>
                                <div className='flex justify-center items-center gap-2 flex-col'>
                                    <h1 className='font-bold text-textcolor-primary'>Innox Muragijimana</h1>
                                    <p className='font-bold text-textcolor-secondary text-sm'>Cofounder- Evotech</p>
                                    <img src="https://plus.unsplash.com/premium_photo-1710911198710-3097c518f0e1?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" className='w-16 h-16 rounded-full text-center'/>
                                </div>
                            </div>
                            <div className="cards h-96 p-10 flex items-center flex-col gap-3 bg-primary-main rounded-md">
                                <div className="message">
                                        <span className='text-3xl text-blue-300'><RiDoubleQuotesL /></span>
                                        <p className='text-textcolor-primary'>
                                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                                            Lorem Ipsum has been the industry's standard dummy text
                                        </p>
                                        <span className='text-3xl text-blue-300'><RiDoubleQuotesR /></span>
                                </div>
                                <div className='flex justify-center items-center gap-2 flex-col'>
                                    <h1 className='font-bold text-textcolor-primary'>Innox Muragijimana</h1>
                                    <p className='font-bold text-textcolor-secondary text-sm'>Cofounder- Evotech</p>
                                    <img src="https://plus.unsplash.com/premium_photo-1710911198710-3097c518f0e1?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" className='w-16 h-16 rounded-full text-center'/>
                                </div>
                            </div>
                            <div className="cards h-96 p-10 flex items-center flex-col gap-3 bg-primary-main rounded-md">
                                <div className="message">
                                        <span className='text-3xl text-blue-300'><RiDoubleQuotesL /></span>
                                        <p className='text-textcolor-primary'>
                                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                                            Lorem Ipsum has been the industry's standard dummy text
                                        </p>
                                        <span className='text-3xl text-blue-300'><RiDoubleQuotesR /></span>
                                </div>
                                <div className='flex justify-center items-center gap-2 flex-col'>
                                    <h1 className='font-bold text-textcolor-primary'>Innox Muragijimana</h1>
                                    <p className='font-bold text-textcolor-secondary text-sm'>Cofounder- Evotech</p>
                                    <img src="https://plus.unsplash.com/premium_photo-1710911198710-3097c518f0e1?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" className='w-16 h-16 rounded-full text-center'/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="slide">
                        <div className="service-cards grid grid-cols-3 gap-4">
                        <div className="cards h-96 p-10 flex items-center flex-col gap-3 bg-primary-main rounded-md">
                                <div className="message">
                                        <span className='text-3xl text-blue-300'><RiDoubleQuotesL /></span>
                                        <p className='text-textcolor-primary'>
                                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                                            Lorem Ipsum has been the industry's standard dummy text
                                        </p>
                                        <span className='text-3xl text-blue-300'><RiDoubleQuotesR /></span>
                                </div>
                                <div className='flex justify-center items-center gap-2 flex-col'>
                                    <h1 className='font-bold text-textcolor-primary'>Innox Muragijimana</h1>
                                    <p className='font-bold text-textcolor-secondary text-sm'>Cofounder- Evotech</p>
                                    <img src="https://plus.unsplash.com/premium_photo-1710911198710-3097c518f0e1?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" className='w-16 h-16 rounded-full text-center'/>
                                </div>
                            </div>
                            <div className="cards h-96 p-10 flex items-center flex-col gap-3 bg-primary-main rounded-md">
                                <div className="message">
                                        <span className='text-3xl text-blue-300'><RiDoubleQuotesL /></span>
                                        <p className='text-textcolor-primary'>
                                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                                            Lorem Ipsum has been the industry's standard dummy text 
                                        </p>
                                        <span className='text-3xl text-blue-300'><RiDoubleQuotesR /></span>
                                </div>
                                <div className='flex justify-center items-center gap-2 flex-col'>
                                    <h1 className='font-bold text-textcolor-primary'>Innox Muragijimana</h1>
                                    <p className='font-bold text-textcolor-secondary text-sm'>Cofounder- Evotech</p>
                                    <img src="https://plus.unsplash.com/premium_photo-1710911198710-3097c518f0e1?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" className='w-16 h-16 rounded-full text-center'/>
                                </div>
                            </div>
                            <div className="cards h-96 p-10 flex items-center flex-col gap-3 bg-primary-main rounded-md">
                                <div className="message">
                                        <span className='text-3xl text-blue-300'><RiDoubleQuotesL /></span>
                                        <p className='text-textcolor-primary'>
                                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                                            Lorem Ipsum has been the industry's standard dummy text ever
                                        </p>
                                        <span className='text-3xl text-blue-300'><RiDoubleQuotesR /></span>
                                </div>
                                <div className='flex justify-center items-center gap-2 flex-col'>
                                    <h1 className='font-bold text-textcolor-primary'>Innox Muragijimana</h1>
                                    <p className='font-bold text-textcolor-secondary text-sm'>Cofounder- Evotech</p>
                                    <img src="https://plus.unsplash.com/premium_photo-1710911198710-3097c518f0e1?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" className='w-16 h-16 rounded-full text-center'/>
                                </div>
                            </div>
                        </div>
                    </div>
            </Slider>
          </div>
        </Wrapper>
      </div>
    </div>
  )
}

export default Testimonials;

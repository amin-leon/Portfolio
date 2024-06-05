import Wrapper from '../../helpers/Wrapper'
import Section from '../../assets/styles/Section.css';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


function Services() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
  };

  return (
    <div className="services-section">
      <div className="overlay" id="services">
        <Wrapper>
          <div className="service-header">
            <div className="big-small-header flex justify-center items-center flex-col gap-1">
              <h5 className='text-textcolor-secondary'>|| Services</h5>
              <div className="big-header text-textcolor-primary">
                <h1 className='text-3xl font-bold text-textcolor-primary'>Service Provided To My Clients</h1>
              </div>
            </div>
            <Slider {...settings} className='pt-5'>
                    <div className="slide">
                        <div className="service-cards grid grid-cols-3 gap-4">
                            <div className="cards h-96 flex justify-center items-center flex-col gap-3 bg-primary-main rounded-md">
                                <div className="icon-image1">
                                </div>
                                <h1 className='font-bold text-textcolor-secondary'>Web Development</h1>
                            </div>
                            <div className="cards h-96 flex justify-center items-center flex-col gap-3 bg-primary-main rounded-md">
                                <div className="icon-image2">
                                </div>
                                <h1 className='font-bold text-textcolor-secondary'>Mobile App Development</h1>
                            </div>
                            <div className="cards h-96 flex justify-center items-center flex-col gap-3 bg-primary-main rounded-md">
                                <div className="icon-image3">
                                </div>
                                <h1 className='font-bold text-textcolor-secondary'>Graphic Design</h1>
                            </div>
                        </div>
                    </div>
                    <div className="slide">
                        <div className="service-cards grid grid-cols-3 gap-4">
                            <div className="cards h-96 flex justify-center items-center flex-col gap-3 bg-primary-main rounded-md">
                                <div className="icon-image4">
                                </div>
                                <h1 className='font-bold text-textcolor-secondary'>Web Services</h1>
                            </div>
                            <div className="cards h-96 flex justify-center items-center flex-col gap-3 bg-primary-main rounded-md">
                                <div className="icon-image5">
                                </div>
                                <h1 className='font-bold text-textcolor-secondary'>Cloud Computing</h1>
                            </div>
                            <div className="cards h-96 flex justify-center items-center flex-col gap-3 bg-primary-main rounded-md">
                                <div className="icon-image6">
                                </div>
                                <h1 className='font-bold text-textcolor-secondary'>Photographing</h1>
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

export default Services;

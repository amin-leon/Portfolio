import SubHeroSection from "../helpers/SubHeroSection";
import Wrapper from "../helpers/Wrapper";
import { VscCloudDownload } from "react-icons/vsc";
import { FaPlay } from "react-icons/fa";
import { Typing2 } from "../helpers/Typing2";
import { useState } from "react";
import Education from "../components/sections/Education";
import Work from "../components/sections/Work";
import PlayButton from '../assets/styles/PlayButton.css';


const AboutPage = () => {
  const [selected, setSelected] = useState('select-1');

  const handleSelect = (option) => {
    setSelected(option);
  };

  const renderComponent = () => {
    switch (selected) {
      case 'select-1':
        return <Education />;
      case 'select-2':
        return <Work />;
      default:
        return <div>Please select an option above.</div>;
    }
  };

  const getButtonClass = (option) => {
    return selected === option ? 'bg-blue-500' : '';
  };

  return (
      <div className="about-all bg-secondary-alertenative">
        <SubHeroSection title='About Me' navigateTo='Home'/>
        <Wrapper>
          <div className="container">
            <div className="video-intro grid grid-cols-4 gap-2 py-10">
              <div className="video col-span-1 flex flex-col justify-center items-center gap-4 py-5">
                <div className="video-play-icon">
                    <FaPlay /> 
                </div>
                <div className="resume">
                  <button className="px-10 text-white rounded-sm flex justify-center gap-3 border border-textcolor-secondary items-center flex-row py-3">Get resume <VscCloudDownload /></button>
                </div>
              </div>
              <div className="intro col-span-3 flex flex-col gap-3">
                <Typing2 />
                <h2 className="text-textcolor-secondary 3xl font-bold pt-3">Web app, Mob app, and UI/UX designer specializing in shopify & webflow.</h2>
                <p className="text-sm text-textcolor-secondary">
                  Lorem Ipsum is simply dummy text of the printing and pesetting industry has been the industry's standard dummy text ever since the 1500s.
                  Lorem Ipsum is simply dummy text of the printing and pesetting industry 
                  has been the industry's standard dummy text ever since the 1500s.
                </p>
              </div>
            </div>
            {/* ..................... background ................*/}
            <div className="background">
                <div className="selectors py-10 text-gray-500 flex justify-center items-center gap-5"> 
                  <button onClick={() => handleSelect('select-1')} className={`px-4 py-2 rounded-sm hover:text-white ${getButtonClass('select-1')}`}>Education</button>
                  <button onClick={() => handleSelect('select-2')} className={`px-4 py-2 rounded-sm hover:text-white ${getButtonClass('select-2')}`}>Experience</button>
                  <button onClick={() => handleSelect('select-3')} className={`px-4 py-2 rounded-sm hover:text-white ${getButtonClass('select-3')}`}>Hobbies</button>
                  <button onClick={() => handleSelect('select-4')} className={`px-4 py-2 rounded-sm hover:text-white ${getButtonClass('select-4')}`}>Travels&Hiking</button>
                  <button onClick={() => handleSelect('select-5')} className={`px-4 py-2 rounded-sm hover:text-white ${getButtonClass('select-5')}`}>Community</button>
                </div>
                <div>
                  {renderComponent()}
                </div>
             </div>
          </div>
        </Wrapper>
      </div>
  );
};

export default AboutPage;

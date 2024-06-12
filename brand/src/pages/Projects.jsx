import { useState } from "react";
import SubHeroSection from "../helpers/SubHeroSection"
import Wrapper from "../helpers/Wrapper";
import All from "../components/sections/All";
import Web from "../components/sections/Web";
import Apps from "../components/sections/Apps";
import Designs from "../components/sections/Designs";

function Projects() {
  const [selected, setSelected] = useState('all');

  const handleSelect = (option) => {
    setSelected(option);
  };

  const renderComponent = () => {
    switch (selected) {
      case 'all':
        return <All />;
      case 'web':
        return <Web />;
      case 'apps':
        return <Apps />;
      case 'Ux':
        return <Designs />;
      default:
        return <div>Please select an option above.</div>;
    }
  };

  const getButtonClass = (option) => {
    return selected === option ? 'bg-blue-500 text-white' : '';
  };
  return (
    <div className="all-projects">
        <SubHeroSection title='Projects Page' navigateTo='Home'/>
        <div className="projects bg-secondary-alertenative">
            <Wrapper>
              <div className="filter pt-5 pb-16">
                  <div className="selectors py-10 text-gray-500 flex justify-center items-center gap-2"> 
                    <button onClick={() => handleSelect('all')} className={`px-10 py-2 border rounded-sm hover:text-white ${getButtonClass('all')}`}>All</button>
                    <button onClick={() => handleSelect('web')} className={`px-10 py-2 border rounded-sm hover:text-white ${getButtonClass('web')}`}>Web</button>
                    <button onClick={() => handleSelect('apps')} className={`px-10 py-2 border rounded-sm hover:text-white ${getButtonClass('apps')}`}>Apps</button>
                    <button onClick={() => handleSelect('Ux')} className={`px-10 py-2 border rounded-sm hover:text-white ${getButtonClass('Ux')}`}>Designs</button>
                  </div>
                  <div>
                    {renderComponent()}
                  </div>
              </div>
            </Wrapper>
        </div>
    </div>
  )
}

export default Projects;
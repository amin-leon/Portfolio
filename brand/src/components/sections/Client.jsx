import Wrapper from "../../helpers/Wrapper"
import { IoHappyOutline } from "react-icons/io5";
import { CiMedicalCase } from "react-icons/ci";
import { CiCalendarDate } from "react-icons/ci";



function Client() {
  return (
    <div className="bg-secondary-alertenative">
        <Wrapper>
            <div className="all-client-container grid grid-cols-3 gap-3 p-10">
                <div className="happy-client flex justify-start items-center gap-7 bg-primary-main p-6">
                    <div className="icon p-2 border border-textcolor-secondary rounded-md">
                       <IoHappyOutline className="text-6xl text-textcolor-secondary"/>
                    </div>
                    <div className="number-desc">
                        <h1 className="text-2xl font-bold text-textcolor-primary">25+</h1>
                        <p className="pt-2 text-textcolor-secondary">Happy clients</p>
                    </div>
                </div>
                <div className="happy-client flex justify-start items-center gap-7 bg-primary-main p-6">
                    <div className="icon p-2 border border-textcolor-secondary rounded-md">
                       <CiMedicalCase className="text-6xl text-textcolor-secondary"/>
                    </div>
                    <div className="number-desc">
                        <h1 className="text-2xl font-bold text-textcolor-primary">10+</h1>
                        <p className="pt-2 text-textcolor-secondary">Project Done</p>
                    </div>
                </div>
                <div className="happy-client flex justify-start items-center gap-7 bg-primary-main p-6">
                    <div className="icon p-2 border border-textcolor-secondary rounded-md">
                       <CiCalendarDate className="text-6xl text-textcolor-secondary"/>
                    </div>
                    <div className="number-desc">
                        <h1 className="text-2xl font-bold text-textcolor-primary">5+</h1>
                        <p className="pt-2 text-textcolor-secondary">Year of Experience</p>
                    </div>
                </div>
            </div>
        </Wrapper>
    </div>
  )
}

export default Client
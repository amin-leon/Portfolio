import Wrapper from "../../helpers/Wrapper"

function Subscribe() {
  return (
    <div className="bg-secondary-alertenative p-10">
        <Wrapper>
            <div className="big-small-header flex justify-center items-center flex-col gap-1">
              <h5 className='text-textcolor-secondary'>|| Subscribe</h5>
              <div className="big-header text-textcolor-primary">
                <h1 className='text-xl font-bold text-textcolor-primary'>Put in your email adress</h1>
              </div>
            </div>
            <div className="field-button flex justify-center items-center p-7">
                <input type="text" placeholder="Type in your image" className="p-2 w-128 focus:outline-none" />
                <button className="p-2 w-56 bg-transparent border border-textcolor-secondary text-textcolor-primary hover:bg-black">Subscribe</button>
            </div>
        </Wrapper>
    </div>
  )
}

export default Subscribe
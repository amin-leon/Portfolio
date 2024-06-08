// TimelineItem.js

const TimelineItem = ({ year, title, subTitle, description }) => {
  return (
    <div className='background grid grid-cols-4 py-4 cursor-pointer relative'>
      <div className="year col-span-1 flex justify-end border-r border-textcolor-secondary text-white pr-5">{year}</div>
      <div className="description col-span-3 px-2">
        <div className="desc-title text-textcolor-primary font-bold text-xl">{title}</div>
        <div className="desc-sub-title text-md text-textcolor-secondary italic">{subTitle}</div>
        <div className="desc-desc pt-5">
          <p className='text-textcolor-secondary'>
            {description}
          </p>
        </div>
      </div>
      <p className="absolute inset-0 hover:bg-black hover:opacity-[0.4]"></p>
    </div>
  );
};

export default TimelineItem;

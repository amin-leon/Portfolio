import React from 'react';
import TimelineItem from "../common/Background";

const Education = () => {
  const timelines = [
    {
      year: "2020-2024",
      title: "Bachelor of Business Administration",
      subTitle: "University of California, Berkeley",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
    },
    {
      year: "2016-2020",
      title: "Associate of Arts in Business",
      subTitle: "Community College of San Francisco",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. It has been the industry's standard dummy text ever since the 1500s."
    },
    {
      year: "2012-2016",
      title: "High School Diploma",
      subTitle: "Springfield High School",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
    },
    {
      year: "2008-2012",
      title: "Middle School",
      subTitle: "Lincoln Middle School",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. It has been the industry's standard dummy text ever since the 1500s."
    },
    {
      year: "2004-2008",
      title: "Elementary School",
      subTitle: "Greenwood Elementary",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. It has been the industry's standard dummy text ever since the 1500s."
    },
  ];

  return (
    <div>
      {timelines.map((timeline, index) => (
        <TimelineItem
          key={index}
          year={timeline.year}
          title={timeline.title}
          subTitle={timeline.subTitle}
          description={timeline.description}
        />
      ))}
    </div>
  );
};

export default Education;


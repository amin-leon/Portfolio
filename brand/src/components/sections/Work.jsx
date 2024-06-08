import React from 'react';
import TimelineItem from "../common/Background";

const WorkExperience = () => {
  const workExperiences = [
    {
      year: "2022-Present",
      title: "Senior Software Engineer",
      subTitle: "Tech Innovators Inc.",
      description: "Lead a team of developers to create cutting-edge web applications using React, Node.js, and MongoDB. Implemented best practices for code quality and performance optimization."
    },
    {
      year: "2020-2022",
      title: "Software Engineer",
      subTitle: "Creative Solutions Ltd.",
      description: "Developed and maintained web applications with a focus on front-end development using React and Redux. Collaborated closely with UX/UI designers to enhance user experience."
    },
    {
      year: "2018-2020",
      title: "Junior Developer",
      subTitle: "NextGen Tech",
      description: "Worked on various client projects, contributing to both front-end and back-end development. Gained experience in React, Angular, and Node.js, and participated in code reviews and agile development processes."
    },
    {
      year: "2016-2018",
      title: "Intern Developer",
      subTitle: "Innovatech Solutions",
      description: "Assisted in developing internal tools and applications, primarily using JavaScript and Python. Learned the fundamentals of full-stack development and best practices in software engineering."
    },
    {
      year: "2015-2016",
      title: "Freelance Developer",
      subTitle: "Self-Employed",
      description: "Worked on small projects for various clients, building websites and applications using HTML, CSS, and JavaScript. Developed a strong foundation in web development and client communication."
    },
  ];

  return (
    <div>
      {workExperiences.map((experience, index) => (
        <TimelineItem
          key={index}
          year={experience.year}
          title={experience.title}
          subTitle={experience.subTitle}
          description={experience.description}
        />
      ))}
    </div>
  );
};

export default WorkExperience;

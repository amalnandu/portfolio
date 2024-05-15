import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../styles/projects.css';
import flutter from './flutter.png'

const projectsData = [
  {
    title: "Vpool",
    description: "Vpool is a vehicle pooling application made using flutter and firebase",
    imageUrl: "/images/project1.jpg",
  },
  {
    title: "Medlink",
    description: "Medlink is a blockchain powered hospital management system, with CP-ABE encryption",
    imageUrl: "/images/project2.jpg",
  },
  {
    title: "eTrack",
    description: "eTrack is a GPS based attendance marking system made exclusively for night patrolling officers.",
    imageUrl:"/images/project2.jpg",
  },
  {
    title: "Notes",
    description: "Simple notes app made using flutter and firebase",
    imageUrl: "/images/project2.jpg",
  },
  {
    title: "Budget",
    description: "Budget tracking app made with flutter and firebase",
    imageUrl: "/images/project2.jpg",
    link:""
  },
  // Add more projects as needed
];

const Projects = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Show 3 slides at a time on larger screens
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2, // Show 2 slides at a time on medium screens
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1, // Show 1 slide at a time on smaller screens
        },
      },
    ],
  };
  

  return (
    <section id="projects">
      <div className="projects-container">
        <h2><span style={{color: "#007fbf"}}>  Projects </span></h2>
        <p></p>
        <br />
        <Slider {...settings}>
          {projectsData.map((project, index) => (
            <div key={index}>
              {/* <img src={flutter} alt={project.title} /> */}
              <h3><span style={{color:"black"}}> <a href={project.link}>  {project.title} </a> </span></h3>
              <p/><span style={{color:"rgb(56, 55, 55)"}}> 
               <a href={project.link}>
                {project.description} </a></span>
                 

            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Projects;


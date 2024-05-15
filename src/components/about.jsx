import React from "react";
import "../styles/about.css";
import Timeline from "../components/timeline";


const educationItems = [
  {
    year: "2020 - 2024",
    title: "B.Tech in Computer Science Engg.",
    description: "APJAKTU - GCE Kannur",
    gpa: "8.5",
  },
  {
    year: "2017 - 2019",
    title: "Higher Secondary Education",
    description: "Kendriya Vidyalaya Payyannur",
    gpa:"9.2"
  },
  {
    year: "2015 - 2017",
    title: "Secondary Education",
    description: "Kendriya Vidyalaya Ezhimala",
    gpa:"10"
  },

];




function About() {
  return (
    <section id="about">
   
      <div className="outer">
        <div className="about-header">About</div>
        <div className="about-body">
          Hi! I am Amal Ganesh from Kerala🌴, India.
          <p></p> I am an engineer and a
          passionate developer who loves technologies.
          <p />
          Feel free to get in touch or take a look at my works below! 
          <p/>
          See ya!👋
        </div>

        <div className="about-header">Education</div>
        <Timeline items={educationItems} /> \
          </div>
    </section>
  );
}

export default About;

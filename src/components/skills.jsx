import React from "react";
import "../styles/skills.css";

// const skillsData = [
//   { skill: 'JavaScript', level: '80%' },
//   { skill: 'React', level: '75%' },
//   { skill: 'Node.js', level: '70%' },
//   { skill: 'CSS', level: '85%' },
//   { skill: 'HTML', level: '90%' },
//   // Add more skills as needed
// ];

// const Skillsss = () => (
//   <section id="skills">
//     <div className="skills-container">
//       <h2 className="skills-header">Skills</h2>
//       <div className="skills-list">
//         {skillsData.map((skillItem, index) => (
//           <div key={index} className="skill">
//             <div className="skill-name">{skillItem.skill}</div>
//             <div className="skill-bar">
//               <div
//                 className="skill-level"
//                 style={{ width: skillItem.level }}
//               />
//             </div>
//             <div className="skill-percent">{skillItem.level}</div>
//           </div>
//         ))}
//       </div>
//     </div>
//   </section>
// );

// /

const skillsData = [
  { skill: 'JavaScript', level: '80%' },
  { skill: 'React', level: '75%' },
  { skill: 'Flutter', level: '70%' },
  { skill: 'CSS', level: '70%' },
  { skill: 'HTML', level: '75%' },
  { skill: 'Python', level: '70%' },
  { skill: 'SQL', level: '65%' },
  { skill: 'Git', level: '80%' },
  { skill: 'Linux', level: '80%' },
  // Ensure there are exactly 8 items
];

const Skillsss = () => (
  <section id="skills">
   <div className="skills-container">
    <p></p>
    <br />
    <h2 className="skills-header">Skills</h2>
      <div className="skills-grid">
        {skillsData.map((skillItem, index) => (
          <div key={index} className="skill">
            <div className="skill-name">{skillItem.skill}</div>
            <div className="skill-bar">
              <div
                className="skill-level"
                style={{ width: skillItem.level }}
              />
            </div>
            <div className="skill-percent">{skillItem.level}</div>
          </div>
        ))}
      </div>
   </div>
      
    
  </section>
);


function Skills() {
  return (
    
      
         <Skillsss/>
   
   
    
  );
}

export default Skills;

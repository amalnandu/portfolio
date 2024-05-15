import React from "react";
import "../styles/home.css";
import flutter from "./flutter.png";
import amal from '../amal.jpeg'
import OscillatingImage from "../components/img";
import { Typewriter } from "react-simple-typewriter";
import Particles from 'react-tsparticles';

function Home() {
  return (
    <section id="home">
      <div className="home">
 

        <div className="home-left">
          <h2> Hi I'm Amal Ganesh</h2>
          <span style={{ color: "#007fbf", fontSize: "1.5em" }}>
            <Typewriter
              words={["Tech Enthusiast ", "Developer </>", "Engineer 💻"]}
              loop={0}
              cursor
              cursorStyle=" | "
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </span>
        </div>
        <div className="home-right">
          
          <img src={amal} alt="pro pic" className="home-image" />
        </div>
      </div>
    </section>
  );
}

export default Home;

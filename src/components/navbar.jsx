
import "../App.css";
import "../styles/nav.css"



function Navbar() {
  return (
    <div className="navbar">
      <div className="nav-left">
        <span style={{ color: "#007fbf" }}>@</span>Amal Ganesh
      </div>
     <div className="nav-right">
   
      <nav>
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
  
     </div>
    </div>
  );
}

export default Navbar;

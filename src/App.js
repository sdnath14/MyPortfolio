

import React from "react";
import "./App.css";
import FloatingIcons from "./components/FloatingIcons";
import ConsoleOutput from "./components/ConsoleOutput";
import { FaGithub, FaLinkedin, FaFileAlt, FaPaperPlane, FaRobot } from "react-icons/fa";
import { motion } from "framer-motion";

function App() {
  return (
    <>
      <FloatingIcons />

      <div className="main-content">
        <motion.div
          className="text-section"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <h1>SNEHA DEBNATH</h1>
          <h2>Software Engineer</h2>

          {/* ICONS */}
          <div className="icons">
            <div className="icon-item">
              <a href="https://github.com/sdnath14" target="_blank" rel="noreferrer">
                <FaGithub className="icon" />
              </a>
              <span className="icon-label">GitHub</span>
            </div>

            <div className="icon-item">
              <a href="https://www.linkedin.com/in/sneha-debnath-11a631258/" target="_blank" rel="noreferrer">
                <FaLinkedin className="icon" />
              </a>
              <span className="icon-label">LinkedIn</span>
            </div>



            

            <div className="icon-item">
              <a href="https://drive.google.com/file/d/1V0j1rC1jUvYKF9bnK7GeIlJUnygfi4id/view?usp=sharing" target="_blank" rel="noreferrer">
                <FaFileAlt className="icon" />
              </a>
              <span className="icon-label">Resume</span>
            </div>

            <div className="icon-item">
              <a href="mailto:snehadebnath145@gmail.com">
                <FaPaperPlane className="icon" />
              </a>
              <span className="icon-label">Email</span>
            </div>


            <div className="icon-item">
              <a href="https://codewithkitty-igabiahjn6asaczrugrmoa.streamlit.app/" target="_blank" rel="noreferrer">
                <FaRobot className="icon" style={{ fontSize: "2.5rem" }} />
              </a>
              <span className="icon-label">Chatbot</span>
            </div>
          



            
          </div>

          {/* CONSOLE OUTPUT */}
          <div className="console-container">
            <ConsoleOutput />
          </div>
        </motion.div>
      </div>

      <footer className="footer">
        © 2025 Designed by <span>Sdnath</span>
      </footer>
    </>
  );
}
 export default App;

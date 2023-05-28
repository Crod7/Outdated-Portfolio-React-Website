import Navbar from "./Navbar"
import Project from "./Projects"
import Skills from "./Skills"
import About from "./About"
import React, {useRef} from "react"
import Contact from "./Contact"

const Home = () => {
    const sectionRef = useRef(null)
    const scrollToSection = (sectionId) => {
        const section = sectionRef.current.querySelector(`#${sectionId}`)
        if (section) {
            section.scrollIntoView({behavior: 'smooth'})
        }
    }
    const openPDF = () => {
        window.open("/Portfolio-React-Website/Resume.pdf", "_blank")
      }


  return (
    <div>
        <div className="main-container" >
        <Navbar scrollToSection={scrollToSection} />
        <div ref={sectionRef}>
            <div className="homepage-banner" id="home">
                <button onClick={openPDF}>Resume</button>
                <div className="homepage-name">
                    <h1>Carlos</h1>
                    <h2>Rodriguez</h2>
                    <h3>Software Developer</h3>
                    <a href="https://github.com/Crod7" target="_blank" rel="noopener noreferrer">
                        <img className="github-link"src="/Portfolio-React-Website/github.png" alt={'null/404/notworking.exe'}/>
                    </a>
                    <a href="https://www.linkedin.com/in/carlosrodriguez007/" target="_blank" rel="noopener noreferrer">
                        <img className="linkedin-link"src="/Portfolio-React-Website/linkedin.png" alt={'null/404/notworking.exe'}/>
                    </a>
                </div>
            </div>
            <div id="projects">
                <Project />
            </div>
            <div id="skills">
                <Skills />
            </div>
            <div id="about">
                <About />
            </div>
            <div id="contact">
                <Contact />
            </div>
        </div>
        </div>
    </div>


  )
}

export default Home

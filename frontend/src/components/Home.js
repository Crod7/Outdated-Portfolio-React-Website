import { useEffect } from "react"
import Navbar from "./Navbar"
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

    const projects = [
        {
            id: 1,
            title: 'Budgeting React App',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ac tincidunt elit.',
            image: '/budgetThumbnail.jpg',
            page: 'https://example.com/project1',
            sourceCode: 'https://example.com/project1'
        },
        {
            id: 2,
            title: 'Appointment Management System',
            description: 'Praesent eu vestibulum justo. Donec auctor nibh ac purus feugiat, id tempus risus efficitur.',
            image: '/appointmentThumbnail.jpg',
            page: 'https://example.com/project2',
            sourceCode: 'https://example.com/project2' 
        },
        {
            id: 3,
            title: 'Routing Optimization Algorithm Program',
            description: 'Praesent eu vestibulum justo. Donec auctor nibh ac purus feugiat, id tempus risus efficitur.',
            image: '/routingProjectThumbnail.jpg',
            page: 'https://example.com/project2',
            sourceCode: 'https://example.com/project2' 
        }
    ]
    const skills = [
        {
            id: 1,
            title: 'Technical Skills',
            description: 'Java, Python, Node.js, Express.js, JSON, Git, Bash',
            image: '/computerIcon.png',
        },
        {
            id: 2,
            title: 'FrontEnd Frameworks',
            description: 'React, Javascript, CSS, HTML',
            image: '/react.png',
        },
        {
            id: 3,
            title: 'Database Skills',
            description: 'MongoDB, MySql, PostgresSpl, Postman',
            image: '/backendIcon.png',
        }
    ]

  useEffect(() => {
        
  }, [])


  return (
    <div className="homepage-container" id="home">
        <Navbar scrollToSection={scrollToSection} />
        <div ref={sectionRef}>
            <div>
                <h1 className="homepage-name">Carlos Rodriguez</h1>
                <h2 className="homepage-subtitle">Software Developer</h2>
            </div>

            <section id="projects">
                <h2 className="title">Projects</h2>
                <div className="projects-container">
                    {projects.map((project) => (
                    <div key={project.id} className="project-card">
                        <img src={project.image} alt={project.title} />
                        <div className="project-details">
                        <h3>{project.title}</h3>
                        <p>{project.description}</p>
                        <a href={project.page} target="_blank" rel="noopener noreferrer">View Project</a>
                        <a href={project.sourceCode} target="_blank" rel="noopener noreferrer">See Code</a>
                        </div>
                    </div>
                    ))}
                </div>
            </section>
            <div>
                <h2 className="title" id="skills">Skills</h2>
                <div className="skills-container">
                    {skills.map((skill) => (
                    <div key={skill.id} className="skill-card">
                        <img src={skill.image} alt={skill.title} />
                        <div className="skill-details">
                        <h3>{skill.title}</h3>
                        <p>{skill.description}</p>
                        </div>
                    </div>
                    ))}
                </div>
            </div>
            <h2 className="title" id="about">About me</h2>
            <div className="about-container">
                <img src="/bomb.jpg" alt="HELLOWORLD" className="about-image"/>
                <p className="about-text">
                    I was first introduced into programming when I was a kid. I wanted to make my own video game so I use this program called Game Maker 7. After making some basic platformer games, I wanted to transition into first person type of games. This is when I discovered programming. All advanced features required knowledge on c#. I learned c# just well enough to create my very first fps game.
                    It wasn't until I became an adult when I realized the true potential of software development. If I could spend all my time coding I would. I'm very passionate about programming and I can't wait to start working together.
                </p>
            </div>
            <div id="contact">
                <Contact id="contact"/>
            </div>

        </div>
    </div>

  )
}

export default Home

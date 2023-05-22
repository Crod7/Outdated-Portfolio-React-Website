import { useEffect } from "react"

const Home = () => {
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
            title: 'Budgeting React App',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ac tincidunt elit.',
            image: '/computerIcon.png',
            className: 'red'
        },
        {
            id: 2,
            title: 'Appointment Management System',
            description: 'Praesent eu vestibulum justo. Donec auctor nibh ac purus feugiat, id tempus risus efficitur.',
            image: '/react.png',
            className: 'blue'
        },
        {
            id: 3,
            title: 'Routing Optimization Algorithm Program',
            description: 'Praesent eu vestibulum justo. Donec auctor nibh ac purus feugiat, id tempus risus efficitur.',
            image: '/backendIcon.png',
            className: 'yellow'
        }
    ]

  useEffect(() => {
        
  }, [])


  return (
    <div className="homepage-container">
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
            <h2 className="title">Skills</h2>
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

    </div>

  )
}

export default Home

import React from "react"

const Project = () => {

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

    return (
        <section>
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

  )
}

export default Project

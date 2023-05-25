import React from "react"

const Project = () => {

    const projects = [
        {
            id: 1,
            title: 'Budgeting React App',
            description: 'A budgeting app that uses the MERN stack. Is able to sign up users authenticate them. Helps users manage their monthly budgets.',
            image: '/Portfolio-React-Website/budgetThumbnail.jpg',
            page: 'https://example.com/project1',
            sourceCode: 'https://example.com/project1'
        },
        {
            id: 2,
            title: 'Appointment Management System',
            description: 'A JavaFX UI interface that connects to a local database to keep track of appointments & customers. Helps manage schedule conflicts & data from appointments & customers. ',
            image: '/Portfolio-React-Website/appointmentThumbnail.jpg',
            page: 'https://example.com/project2',
            sourceCode: 'https://example.com/project2' 
        },
        {
            id: 3,
            title: 'Routing Optimization Algorithm Program',
            description: 'Takes a csv file with a list of addresses & another csv file with a list of package information. Uses the package information & the greedy algorithm to find an optimal path to deliver all packages.',
            image: '/Portfolio-React-Website/routingProjectThumbnail.jpg',
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

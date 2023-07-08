import React from "react"

const Project = () => {

    return (
        <section>
            <h2 className="title">Projects</h2>
            <div className="project-section-title">
                Budgeting React App
            </div>
            <div className="project-parent-section">
                <div className="project-section">
                    <img src={"/Portfolio-React-Website/BudgetingAppThumbNail.png"} alt={"404.exe"} />
                </div>
                <div className="project-section">
                    <div className="project-section-description">
                        A budgeting app that uses the MERN stack. Is able to sign up users to authenticate them. Helps users manage their monthly budgets.
                    </div>
                    <div className="project-section-subtitle">
                        Technologies used:
                    </div>
                    <div className="project-section-list-of-technologies">
                        <ul>
                            <div className="project-skill">
                                Restful Api
                            </div>
                        </ul>
                        <ul>
                            <div className="project-skill">
                                CRUD App
                            </div>
                        </ul>
                        <ul>
                            <div className="project-skill">
                                MongoDB
                            </div>
                        </ul>
                        <ul>
                            <div className="project-skill">
                                Express.js
                            </div>
                        </ul>
                        <ul>
                            <div className="project-skill">
                                React.js
                            </div>
                        </ul>
                        <ul>
                            <div className="project-skill">
                                Node.js
                            </div>
                        </ul>
                    </div>
                    <div className="project-section-button-container">
                        <a className="video-button" href={"https://youtu.be/08Ayvy9zRv8"} target="_blank" rel="noopener noreferrer">See Video</a>
                        <a className="code-button" href={"https://github.com/Crod7/Budgeting-React-App"} target="_blank" rel="noopener noreferrer">See Code</a>
                    </div>
                </div>
            </div>
            <div className="project-section-title">
                Appointment Management System
            </div>
            <div className="project-parent-section">
                <div className="project-section">
                    <img src={"/Portfolio-React-Website/AppointmentAppThumbNail.png"} alt={"404.exe"} />
                </div>
                <div className="project-section">
                    <div className="project-section-description">
                    A JavaFX UI interface that connects to a local database to keep track of appointments & customers. Helps manage schedule conflicts & data from appointments & customers.
                    </div>
                    <div className="project-section-subtitle">
                        Technologies used:
                    </div>
                    <div className="project-section-list-of-technologies">
                        <ul>
                            <div className="project-skill">
                                Java
                            </div>
                        </ul>
                        <ul>
                            <div className="project-skill">
                                CRUD App
                            </div>
                        </ul>
                        <ul>
                            <div className="project-skill">
                                JDBC
                            </div>
                        </ul>
                        <ul>
                            <div className="project-skill">
                                MySQL
                            </div>
                        </ul>
                        <ul>
                            <div className="project-skill">
                                OOP
                            </div>
                        </ul>
                        <ul>
                            <div className="project-skill">
                                JavaFx
                            </div>
                        </ul>
                    </div>
                    <div className="project-section-button-container">
                        <a className="video-button" href={"https://youtu.be/7HvbpJJomdQ"} target="_blank" rel="noopener noreferrer">See Video</a>
                        <a className="code-button" href={"https://github.com/Crod7/Appointment-Management-System"} target="_blank" rel="noopener noreferrer">See Code</a>
                    </div>
                </div>
            </div>
            <div className="project-section-title">
                Routing Optimization Algorithm Program
            </div>
            <div className="project-parent-section">
                <div className="project-section">
                    <img src={"/Portfolio-React-Website/RoutingAppThumbNail.png"} alt={"404.exe"} />
                </div>
                <div className="project-section">
                    <div className="project-section-description">
                        Takes a csv file with a list of addresses & another csv file with a list of package information. Uses the package information & the greedy algorithm to find an optimal path to deliver all packages.
                    </div>
                    <div className="project-section-subtitle">
                        Technologies used:
                    </div>
                    <div className="project-section-list-of-technologies">
                        <ul>
                            <div className="project-skill">
                                Python
                            </div>
                        </ul>
                        <ul>
                            <div className="project-skill">
                                Algorithms
                            </div>
                        </ul>
                        <ul>
                            <div className="project-skill">
                                Data Structures
                            </div>
                        </ul>
                        <ul>
                            <div className="project-skill">
                                OOP
                            </div>
                        </ul>
                        <ul>
                            <div className="project-skill">
                                CSV
                            </div>
                        </ul>

                    </div>
                    <div className="project-section-button-container">
                        <a className="video-button" href={"https://youtu.be/xeL16GQ1cxg"} target="_blank" rel="noopener noreferrer">See Video</a>
                        <a className="code-button" href={"https://github.com/Crod7/Routing-Delivery-Optimization-Algorithm-Program"} target="_blank" rel="noopener noreferrer">See Code</a>
                    </div>
                </div>
            </div>
        </section>

  )
}

export default Project

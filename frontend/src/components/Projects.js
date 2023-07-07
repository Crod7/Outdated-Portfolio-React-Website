import React from "react"

const Project = () => {

    return (
        <section>
            <h2 className="title">Projects</h2>

            <div className="project-parent-section">
                <div className="project-section">
                    <img src={"/Portfolio-React-Website/BudgetingAppThumbNail.png"} alt={"404.exe"} />
                    <div className="project-section-button-container">
                        <a className="video-button" href={"https://youtu.be/08Ayvy9zRv8"} target="_blank" rel="noopener noreferrer">See Video</a>
                        <a className="code-button" href={"https://github.com/Crod7/Budgeting-React-App"} target="_blank" rel="noopener noreferrer">See Code</a>
                    </div>
                </div>
                <div className="project-section">
                    <div className="project-section-title">
                        Budgeting React App
                    </div>
                    <div className="project-section-description">
                        A budgeting app that uses the MERN stack. Is able to sign up users to authenticate them. Helps users manage their monthly budgets.
                    </div>
                    <div className="project-section-subtitle">
                        Technologies used:
                    </div>
                    <div className="project-section-list-of-technologies">
                        <ul>
                            <img src="/Portfolio-React-Website/mongo.png" alt="Why is this missing?"/>
                        </ul>
                        <ul>
                            <img src="/Portfolio-React-Website/express.png" alt="Why is this missing?"/>
                        </ul>
                        <ul>
                            <img src="/Portfolio-React-Website/reactLogo.png" alt="Why is this missing?"/>
                        </ul>
                        <ul>
                            <img src="/Portfolio-React-Website/js.png" alt="Why is this missing?"/>
                        </ul>
                        <ul>
                            <img src="/Portfolio-React-Website/css.png" alt="Why is this missing?"/>
                        </ul>
                        <ul>
                            <img src="/Portfolio-React-Website/html.png" alt="Why is this missing?"/>
                        </ul>
                        <ul>
                            <img src="/Portfolio-React-Website/node.png" alt="Why is this missing?"/>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="project-parent-section">
                <div className="project-section">
                    <img src={"/Portfolio-React-Website/AppointmentAppThumbNail.png"} alt={"404.exe"} />
                    <div className="project-section-button-container">
                        <a className="video-button" href={"https://youtu.be/7HvbpJJomdQ"} target="_blank" rel="noopener noreferrer">See Video</a>
                        <a className="code-button" href={"https://github.com/Crod7/Appointment-Management-System"} target="_blank" rel="noopener noreferrer">See Code</a>
                    </div>
                </div>
                <div className="project-section">
                    <div className="project-section-title">
                        Appointment Management System
                    </div>
                    <div className="project-section-description">
                    A JavaFX UI interface that connects to a local database to keep track of appointments & customers. Helps manage schedule conflicts & data from appointments & customers.
                    </div>
                    <div className="project-section-subtitle">
                        Technologies used:
                    </div>
                    <div className="project-section-list-of-technologies">
                        <ul>
                            <img src="/Portfolio-React-Website/java.png" alt="Why is this missing?"/>
                        </ul>
                        <ul>
                            <img src="/Portfolio-React-Website/mysql.png" alt="Why is this missing?"/>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="project-parent-section">
                <div className="project-section">
                    <img src={"/Portfolio-React-Website/RoutingAppThumbNail.png"} alt={"404.exe"} />
                    <div className="project-section-button-container">
                        <a className="video-button" href={"https://youtu.be/xeL16GQ1cxg"} target="_blank" rel="noopener noreferrer">See Video</a>
                        <a className="code-button" href={"https://github.com/Crod7/Routing-Delivery-Optimization-Algorithm-Program"} target="_blank" rel="noopener noreferrer">See Code</a>
                    </div>
                </div>
                <div className="project-section">
                    <div className="project-section-title">
                        Routing Optimization Algorithm Program
                    </div>
                    <div className="project-section-description">
                        Takes a csv file with a list of addresses & another csv file with a list of package information. Uses the package information & the greedy algorithm to find an optimal path to deliver all packages.
                    </div>
                    <div className="project-section-subtitle">
                        Technologies used:
                    </div>
                    <div className="project-section-list-of-technologies">
                        <ul>
                            <img src="/Portfolio-React-Website/python.png" alt="Why is this missing?"/>
                        </ul>
                    </div>
                </div>
            </div>
        </section>

  )
}

export default Project

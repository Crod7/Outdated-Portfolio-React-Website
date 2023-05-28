/**
 * The manages the skills component.
 */
import React from "react"

const Skills = () => {
    return (
        <div>
            <h2 className="title" id="skills">Skills</h2>
            <div className="skills-container">
                <div className="skill-card" id="technical-container">
                    <img src={'/Portfolio-React-Website/computerIcon.png'} alt={'Technical Skills'} />
                    <div className="spinning-icons">
                        <h3 className="technical-title-text">{'Technical Skills'}</h3>
                        <p>{'Java, Python, Node.js, Express.js, JSON, Git, Bash'}</p>
                        <img src={'/Portfolio-React-Website/java.png'} alt={'null/404/notworking.exe'}/>
                        <img src={'/Portfolio-React-Website/python.png'} alt={'null/404/notworking.exe'}/>
                        <img src={'/Portfolio-React-Website/node.png'} alt={'null/404/notworking.exe'}/>
                        <img src={'/Portfolio-React-Website/express.png'} alt={'null/404/notworking.exe'}/>
                        <img src={'/Portfolio-React-Website/json.png'} alt={'null/404/notworking.exe'}/>
                        <img src={'/Portfolio-React-Website/git.png'} alt={'null/404/notworking.exe'}/>
                        <img src={'/Portfolio-React-Website/gitbash.png'} alt={'null/404/notworking.exe'}/>

                    </div>
                </div>
                <div className="skill-card" id="frontend-container">
                    <img src={'/Portfolio-React-Website/react.png'} alt={'FrontEnd Frameworks'} />
                    <div className="spinning-icons">
                        <h3 className="frontend-title-text">{'FrontEnd Frameworks'}</h3>
                        <p>{'React, Javascript, CSS, HTML'}</p>
                        <img src={'/Portfolio-React-Website/reactLogo.png'} alt={'null/404/notworking.exe'}/>
                        <img src={'/Portfolio-React-Website/js.png'} alt={'null/404/notworking.exe'}/>
                        <img src={'/Portfolio-React-Website/css.png'} alt={'null/404/notworking.exe'}/>
                        <img src={'/Portfolio-React-Website/html.png'} alt={'null/404/notworking.exe'}/>

                    </div>
                </div>
                <div className="skill-card" id="database-container">
                    <img src={'/Portfolio-React-Website/backendIcon.png'} alt={'Database Skills'} />
                    <div className="spinning-icons">
                        <h3 className="database-title-text">{'Database Skills'}</h3>
                        <p>{'MongoDB, MySql, PostgresSql, Postman'}</p>
                        <img src={'/Portfolio-React-Website/mongo.png'} alt={'null/404/notworking.exe'}/>
                        <img src={'/Portfolio-React-Website/mysql.png'} alt={'null/404/notworking.exe'}/>
                        <img src={'/Portfolio-React-Website/postgres.png'} alt={'null/404/notworking.exe'}/>
                        <img src={'/Portfolio-React-Website/postman.png'} alt={'null/404/notworking.exe'}/>

                    </div>
                </div>
            </div>
        </div>
  )
}

export default Skills

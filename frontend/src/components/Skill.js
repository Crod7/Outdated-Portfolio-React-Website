/**
 * The manages the skills component.
 */
import React from "react"

const Skills = () => {
    return (
        <div>
            <h2 className="title">Skills</h2>
            <div className="skills-container">
                <div className="skill-card" id="technical-container">
                    <img src={'/Portfolio-React-Website/computerIcon.png'} alt={'Technical Skills'} />
                    <div className="spinning-icons">
                        <h3 className="technical-title-text">{'Languages'}</h3>
                        <p className="skills-subtitle-text">{'JavaScript, CSS, HTML, Java, Python'}</p>
                        <img src={'/Portfolio-React-Website/js.png'} alt={'null/404/notworking.exe'}/>
                        <img src={'/Portfolio-React-Website/css.png'} alt={'null/404/notworking.exe'}/>
                        <img src={'/Portfolio-React-Website/html.png'} alt={'null/404/notworking.exe'}/>
                        <img src={'/Portfolio-React-Website/java.png'} alt={'null/404/notworking.exe'}/>
                        <img src={'/Portfolio-React-Website/python.png'} alt={'null/404/notworking.exe'}/>


                    </div>
                </div>
                <div className="skill-card" id="frontend-container">
                    <img src={'/Portfolio-React-Website/react.png'} alt={'FrontEnd Frameworks'} />
                    <div className="spinning-icons">
                        <h3 className="frontend-title-text">{'Technologies'}</h3>
                        <p className="skills-subtitle-text">{'MongoDB, Express.js, React.js, Node.js, MySQL, Git, Bash'}</p>
                        <img src={'/Portfolio-React-Website/mongo.png'} alt={'null/404/notworking.exe'}/>
                        <img src={'/Portfolio-React-Website/express.png'} alt={'null/404/notworking.exe'}/>
                        <img src={'/Portfolio-React-Website/reactLogo.png'} alt={'null/404/notworking.exe'}/>
                        <img src={'/Portfolio-React-Website/node.png'} alt={'null/404/notworking.exe'}/>
                        <img src={'/Portfolio-React-Website/mysql.png'} alt={'null/404/notworking.exe'}/>
                        <img src={'/Portfolio-React-Website/git.png'} alt={'null/404/notworking.exe'}/>
                        <img src={'/Portfolio-React-Website/gitbash.png'} alt={'null/404/notworking.exe'}/>


                    </div>
                </div>
                <div className="skill-card" id="database-container">
                    <img src={'/Portfolio-React-Website/backendIcon.png'} alt={'Database Skills'} />
                    <div className="spinning-icons">
                        <h3 className="database-title-text">{'Concepts'}</h3>
                        <p className="skills-subtitle-text">{'Restful Api, Object-Oriented Programming, Version Control, Data Structures & Algorithms'}</p>
                        <img src={'/Portfolio-React-Website/whiteIcons/api.svg'} alt={'null/404/notworking.exe'}/>
                        <img src={'/Portfolio-React-Website/oops.png'} alt={'null/404/notworking.exe'}/>
                        <img src={'/Portfolio-React-Website/version.png'} alt={'null/404/notworking.exe'}/>
                        <img src={'/Portfolio-React-Website/dsa.png'} alt={'null/404/notworking.exe'}/>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default Skills

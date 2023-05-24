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
                    <img src={'/computerIcon.png'} alt={'Technical Skills'} />
                    <div>
                        <h3 className="technical-title-text">{'Technical Skills'}</h3>
                        <p>{'Java, Python, Node.js, Express.js, JSON, Git, Bash'}</p>
                    </div>
                </div>
                <div className="skill-card" id="frontend-container">
                    <img src={'/react.png'} alt={'FrontEnd Frameworks'} />
                    <div>
                        <h3 className="frontend-title-text">{'FrontEnd Frameworks'}</h3>
                        <p>{'React, Javascript, CSS, HTML'}</p>
                    </div>
                </div>
                <div className="skill-card" id="database-container">
                    <img src={'/backendIcon.png'} alt={'Database Skills'} />
                    <div>
                        <h3 className="database-title-text">{'Database Skills'}</h3>
                        <p>{'MongoDB, MySql, PostgresSpl, Postman'}</p>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default Skills

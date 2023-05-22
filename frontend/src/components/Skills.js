import React from "react"

const Skills = () => {

    return (
        <div>
            <h2 className="title" id="skills">Skills</h2>
            <div className="skills-container">
                <div className="skill-card">
                    <img src={'/computerIcon.png'} alt={'Technical Skills'} />
                    <div className="skill-details">
                    <h3 className="red-text">{'Technical Skills'}</h3>
                    <p>{'Java, Python, Node.js, Express.js, JSON, Git, Bash'}</p>
                    </div>
                </div>
                <div className="skill-card">
                    <img src={'/react.png'} alt={'FrontEnd Frameworks'} />
                    <div className="skill-details">
                    <h3 className="blue-text">{'FrontEnd Frameworks'}</h3>
                    <p>{'React, Javascript, CSS, HTML'}</p>
                    </div>
                </div>
                <div className="skill-card">
                    <img src={'/backendIcon.png'} alt={'Database Skills'} />
                    <div className="skill-details">
                    <h3 className="yellow-text">{'Database Skills'}</h3>
                    <p>{'MongoDB, MySql, PostgresSpl, Postman'}</p>
                    </div>
                </div>
            </div>
        </div>

  )
}

export default Skills

import React from "react";
import '../css/resume.css';

const Resume = () => {
    return (
      <div className="resume-container">
        <div className="section-container">
          <h1>Carlos Rodriguez</h1>
          <p>
            Phone: 323-622-5469 || Online Portfolio:{' '}
            <a href="https://www.CarlosRodriguez.com">https://www.CarlosRodriguez.com</a>
          </p>
          <p>
            Email: cRodriguezYt10@gmail.com || GitHub:{' '}
            <a href="https://github.com/Crod7">https://github.com/Crod7</a>
          </p>
          <p>
            LinkedIn:{' '}
            <a href="https://www.linkedin.com/in/carlosrodriguez007/">https://www.linkedin.com/in/carlosrodriguez007/</a>
          </p>
        </div>
  
        <div className="section-container">
          <h2>Objective</h2>
          <p>
            Driven software developer with a strong foundation in programming languages and frameworks. Seeking a software
            development role that provides opportunities for continuous learning and professional growth. Eager to
            contribute to innovative projects while expanding technical skills and staying up-to-date with emerging
            technologies. Committed to delivering high-quality solutions and collaborating effectively within a dynamic
            team environment.
          </p>
        </div>
  
        <div className="section-container">
          <h2>Projects</h2>
          <ul>
            <li>
              <strong>Online Budgeting React App</strong> (Mongoose.js, Express.js, React, Node.js): A CRUD application
              that allows users to set up a monthly budget plan and record all their expenses and purchases throughout the
              month. The navigation bar updates in real-time with the remaining balance left for the month. This online
              application requires users to create an account for authentication and to save their data.
            </li>
            <li>
              <strong>Appointment Management System</strong> (Java, JavaFx, JDBC, MySql): A CRUD application that allows
              the user to create and manage appointments and customers. Resolves scheduling conflicts and organizes useful
              business data. Java application that uses Java Database Connectivity (JDBC) to connect to a MySql database
              using JavaFx to display the user interface.
            </li>
            <li>
              <strong>Routing Optimization Algorithm Program</strong> (Python): The program takes a CSV file with a list of
              addresses on it and another CSV file with a list of package information. It uses the package information and
              the greedy algorithm to find an optimal path to deliver all packages in a shorter amount of mileage when
              compared to taking packages in order.
            </li>
          </ul>
        </div>
  
        <div className="section-container">
          <h2>Education</h2>
          <p>
            B.S. Computer Science Major, 2023
            <br />
            Western Governors University, United States
          </p>
        </div>
  
        <div className="section-container">
          <h2>Technical Skills</h2>
          <ul>
            <li>Machine Learning:</li>
            <li>Programming Technologies: Java, Python</li>
            <li>Graphical User Interface Technologies: JavaFx</li>
            <li>Programming Technologies, Front End: React, JavaScript, HTML, CSS</li>
            <li>Programming Technologies, Back End: Express.js</li>
            <li>Programming Frameworks: Node.js, JSON</li>
            <li>Database Technologies: PostgresSql, MySql, JDBC, MongoDB, Mongoose.js</li>
            <li>Version Control: Git, GitHub</li>
            <li>Other Technologies: Postman, MongoDB Atlas</li>
          </ul>
        </div>
  
        <div className="section-container">
          <h2>Other Skills</h2>
          <ul>
            <li>Languages: Fluent in English and Spanish</li>
            <li>Public Speaking: Experience and ability to speak with passion and confidence</li>
          </ul>
        </div>
      </div>
    );
  };
  
  export default Resume;
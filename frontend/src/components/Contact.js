import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();

  const [formData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [isSuccess, setIsSuccess] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_goxjmeb', 'template_vq8q0v6', form.current, 'HJuy_hVTcQ2g4c6AG')
      .then((result) => {
        console.log(result.text);
        form.current.reset();
        setIsSuccess(true); // Set success status to true
      }, (error) => {
        console.log(error.text);
      });

    console.log(formData);
  };

  return (
    <div className='contact-title'>
      <h1 className='title'>Contact me</h1>
      <div className='message-box-container'>
        {isSuccess && <p className='success-message'>Email sent successfully!</p>}
      </div>
      <div className="contact-container">
        <form ref={form} onSubmit={sendEmail}>
          <label>Name</label>
          <input type="text" name="name" required/>
          <label>Email</label>
          <input type="email" name="email" required/>
          <label>Message</label>
          <textarea className='message-box' style={{ resize: "none" }} name="message" required/>
          <input className='submit-button' type="submit" value="Send" />
        </form>
      </div>
    </div>
  );
};

export default Contact;

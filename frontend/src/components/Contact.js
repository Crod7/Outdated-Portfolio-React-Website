import React, { useState, useRef} from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_goxjmeb', 'template_vq8q0v6', form.current, 'HJuy_hVTcQ2g4c6AG')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
    // Handle form submission logic here
    console.log(formData);
    // Reset the form after submission
    setFormData({
      name: '',
      email: '',
      message: '',
    });
  };

  return (
    <div className='contact-title'>
      <h1 className='title'>Contact me</h1>
      <div className="contact-container">
        <form ref={form} onSubmit={sendEmail}>
          <label>Name</label>
          <input type="text" name="name" />
          <label>Email</label>
          <input type="email" name="email" />
          <label>Message</label>
          <textarea style={{ resize: "none" }} name="message" />
          <input className='submit-button' type="submit" value="Send" />
        </form>
      </div>
    </div>
  );
};

export default Contact;

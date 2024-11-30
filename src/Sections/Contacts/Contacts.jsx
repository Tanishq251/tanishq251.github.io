import { useState } from 'react';
import './Contacts.css';
import emailjs from 'emailjs-com';

const Contacts = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState(prevState => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.send(
      'tanishq@165', // Replace with your EmailJS service ID
      'template_hah8smi', // Replace with your EmailJS template ID
      {
        to_name: 'Tanishq', // Replace with the recipient's name
        from_name: formState.name,
        from_email: formState.email,
        subject: formState.subject,
        message: formState.message,
        reply_to: formState.email
      },
      'YRCxL1lmWKbupgpNC' // Replace with your EmailJS user ID
    ).then((response) => {
      console.log('SUCCESS!', response.status, response.text);
      alert('Message sent successfully!');
    }).catch((err) => {
      console.error('FAILED...', err);
      alert('Failed to send the message. Please try again.');
    });

    setFormState({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <section id="contact">
      <p className="section-text-p1">Get in Touch</p>
      <h1 className="title">Contact Me</h1>
      <form className="contact-form" onSubmit={handleSubmit}>
        <input 
          type="text" 
          name="name" 
          placeholder="Name" 
          value={formState.name} 
          onChange={handleChange} 
          required
        />
        <input 
          type="email" 
          name="email" 
          placeholder="Email" 
          value={formState.email} 
          onChange={handleChange} 
          required
        />
        <input 
          type="text" 
          name="subject" 
          placeholder="Subject" 
          value={formState.subject} 
          onChange={handleChange} 
          required
        />
        <textarea 
          name="message" 
          placeholder="Message" 
          value={formState.message} 
          onChange={handleChange}
          required
        ></textarea>
        <button type="submit" className="button">Send Message</button>
      </form>
      {/* <div className="contact-info">
        <a href="mailto:tanishqrachamalla12@gmail.com" className="contact-icon" title="Email">
          <img src="/assets/mail.jpg" alt="Email" />
        </a>
        <a href="https://www.linkedin.com/in/tanishq-rachamalla-5a759b234/" className="contact-icon" title="LinkedIn" target="_blank" rel="noopener noreferrer">
          <img src="/assets/linkedin2.png" alt="LinkedIn" />
        </a>
        <a href="tel:+918074463612" className="contact-icon" title="Phone">
          <img src="/assets/contact.jpg" alt="Phone" />
        </a>
      </div> */}
    </section>
  );
}

export default Contacts;

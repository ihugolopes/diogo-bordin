import { useState } from 'react';
import './Contact.css';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Form submission logic here
    console.log('Form submitted:', formData);
    alert('Obrigado pela sua mensagem! Retornarei em breve.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <section className="contact" id="contact">
      <div className="contact-container">
        <div className="contact-info">
          <h2 className="contact-title">ENTRE EM CONTATO</h2>
          <p className="contact-description">
            Pronto para criar algo direto e bem executado? Vamos conversar sobre seu projeto.
          </p>

          <div className="contact-details">
            <div className="contact-item">
              <h3>Email</h3>
              <p>contato@dbordin.com</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;

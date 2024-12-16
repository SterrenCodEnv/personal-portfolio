import React, { useState, useRef } from 'react';
import emailjs from 'emailjs-com';
const contactData = {
  phone: ['+54 3562 529555'],
  email: ['sterrenjuanignacio\n@gmail.com'],
};
const service_id = 'service_a0vmxl7';
const template_id = 'template_bx3pmji';
const user_id = 'YTTYt0homKY_mgB_a';
function Contact() {
  const [formdata, setFormdata] = useState({
    name: '',
    email: '',
    subject: '',
  });

  const [error, setError] = useState(false);
  const [message, setMessage] = useState('');
  const [messageAlert, setMessageAlert] = useState(false);

  const form = useRef();
  const handleSubmit = (event) => {
    event.preventDefault();
    if (!formdata.name) {
      setError(true);
      setMessageAlert(true);
      setMessage('Nombre requerido');
    } else if (!formdata.email) {
      setError(true);
      setMessageAlert(true);
      setMessage('Email requerido');
    } else if (!formdata.subject) {
      setError(true);
      setMessageAlert(true);
      setMessage('Asunto requerido');
    } else {
      setError(false);
      setMessageAlert(true);
      setMessage('¡Mensaje enviado correctamente!');
    }
    emailjs.sendForm(service_id, template_id, form.current, user_id).then(
      (result) => {
        console.log(result.text);
      },
      (error) => {
        console.log(error.text);
      }
    );
    event.target.reset();

    setTimeout(() => {
      setFormdata({
        name: '',
        email: '',
        subject: '',
      });
    }, 1000);
  };

  const handleChange = (event) => {
    setFormdata({
      ...formdata,
      [event.currentTarget.name]: event.currentTarget.value,
    });
  };

  const handleAlerts = () => {
    if (error && message && messageAlert) {
      setTimeout(() => {
        setMessageAlert(false);
      }, 1500);
      return <div className="alert alert-danger mt-4">{message}</div>;
    } else if (!error && message && messageAlert) {
      setTimeout(() => {
        setMessageAlert(false);
      }, 1500);
      return <div className="alert alert-success mt-4">{message}</div>;
    } else {
      return null;
    }
  };

  return (
    <div className="row">
      <div className="col-md-4 mb-4 mb-md-0">
        <div className="contact-info mb-5">
          <i className="fa-brands fa-whatsapp"></i>
          <div className="details">
            <h5>Teléfono</h5>
            {contactData.phone.map((singlePhone, index) => (
              <span key={index}>{singlePhone}</span>
            ))}
          </div>
        </div>
        <div className="contact-info mb-5">
          <i className="fa-regular fa-envelope"></i>
          <div className="details">
            <h5>Email</h5>
            {contactData.email.map((singleEmail, index) => (
              <span key={index}>{singleEmail}</span>
            ))}
          </div>
        </div>
      </div>

      <div className="col-md-8">
        <form
          id="contact-form"
          ref={form}
          className="contact-form"
          onSubmit={handleSubmit}
          autoComplete="off"
        >
          <div className="row">
            <div className="column col-md-6">
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  name="name"
                  placeholder="Nombre..."
                  onChange={handleChange}
                  value={formdata.name}
                />
              </div>
            </div>

            <div className="column col-md-6">
              <div className="form-group">
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  placeholder="Email..."
                  onChange={handleChange}
                  value={formdata.email}
                />
              </div>
            </div>

            <div className="column col-md-12">
              <div className="form-group">
                <textarea
                  type="text"
                  className="form-control"
                  rows={5}
                  name="subject"
                  placeholder="Mensaje..."
                  onChange={handleChange}
                  value={formdata.subject}
                />
              </div>
            </div>
          </div>

          <button
            type="submit"
            name="submit"
            value="Submit"
            className="btn btn-default"
          >
            <i className="fa-regular fa-paper-plane"></i>Enviar Mensaje
          </button>
        </form>
        {handleAlerts()}
      </div>
    </div>
  );
}

export default Contact;

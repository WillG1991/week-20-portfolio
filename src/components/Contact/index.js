import emailjs from 'emailjs-com';
import React, { useRef } from 'react';
import { useState } from 'react';


export const Contact = () => {
  const [input_username, setUserName] = useState('');
  const [input_email, setEmail] = useState('');
  const [input_message, setMessage] = useState('');

  

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    

    emailjs.sendForm('service_miclkz2', 'template_3vy91zb', form.current, 'Fn_zxEFg1IdXStiDB')
    .then((result) => {
      alert("Thanks for reaching out, I will get back to you soon!");
  }, (error) => {
      console.log(error.text);
  });
  setUserName('');
    setEmail('');
    setMessage('');
};

return (
 <section className="contact-form justify-content-center ">
<h2 className="text-center varela-font">Contact Me</h2>
<form ref={form} onSubmit={sendEmail}>
  <div className="borderBoxContact ">
    <div className="p-2 bd-highlight  justify-content-center">
      <label htmlFor="name">
        <h4 className="d-flex justify-content-center">Name:</h4>
      </label>
      <input className="rounded" id="input_username" type="text" name="from_name" onChange={event => setUserName(event.target.value)}
          value={input_username} />
    </div>
    <div className="p-2 bd-highlight  ">
      <label htmlFor="email">
        <h4 className="d-flex justify-content-center">Email:</h4>
      </label>
      <input className="rounded" id="input_email" type="email" name="reply_to" onChange={event => setEmail(event.target.value)}
          value={input_email} />
    </div>
    <div className="btnSubmit p-2 bd-highlight ">
      <label htmlFor="message">
        <h4 className="d-flex justify-content-center">Message:</h4>
      </label>
      <textarea className="rounded" name="message" onChange={event => setMessage(event.target.value)}
          value={input_message} />
  <input className="btnback btn btn-outline-info mt-4  justify-content-center"
      id="input_message" type="submit" value="Submit" />
    </div>
   
     
   
  </div>
</form>
</section>
);
}

export default Contact;



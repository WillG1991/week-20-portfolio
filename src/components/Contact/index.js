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
      console.log(result.text);
  }, (error) => {
      console.log(error.text);
  });
  setUserName('');
    setEmail('');
    setMessage('');
};

return (
 <section class="contact-form ">
<h2 class="text-center varela-font">Contact Me</h2>
<form ref={form} onSubmit={sendEmail}>
  <div class="borderBoxContact">
    <div class="p-2 bd-highlight  justify-content-center">
      <label htmlFor="name">
        <h4>Name:</h4>
      </label>
      <input id="input_username" type="text" name="from_name" onChange={event => setUserName(event.target.value)}
          value={input_username} />
    </div>
    <div class="p-2 bd-highlight  ">
      <label htmlFor="email">
        <h4>Email:</h4>
      </label>
      <input id="input_email" type="email" name="reply_to" onChange={event => setEmail(event.target.value)}
          value={input_email} />
    </div>
    <div class="p-2 bd-highlight ">
      <label htmlFor="message">
        <h4>Message:</h4>
      </label>
      <textarea name="message" onChange={event => setMessage(event.target.value)}
          value={input_message} />
  <input class="btn btn-outline-info mt-4 "
      id="input_message" type="submit" value="Submit" />
    </div>
   
     
   
  </div>
</form>
</section>
);
}

export default Contact;



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
<form ref={form} onSubmit={sendEmail}>
  <label>Name</label>
  <input id="input_username" type="text" name="user_name" onChange={event => setUserName(event.target.value)}
          value={input_username} />
  <label>Email</label>
  <input id="input_email" type="email" name="user_email" onChange={event => setEmail(event.target.value)}
          value={input_email} />
  <label>Message</label>
  <textarea name="message" onChange={event => setMessage(event.target.value)}
          value={input_message} />
  <input id="input_message" type="submit" value="Send" />
</form>
);
};


export default Contact;

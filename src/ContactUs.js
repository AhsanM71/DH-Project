import React from 'react';
import emailjs from 'emailjs-com';


export default function ContactUs() {

  function sendEmail(e) {
    e.preventDefault();
    console.log(e.target);
    emailjs.sendForm('dino579892', 'template_0baw48r', e.target, 'F3DzbtF6AEJ55pJ7w')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  }

  return (
    <form className="form contact-form" onSubmit={sendEmail}>
      <label>Name</label>
      <input type="text" name="name" />
      <label>Email</label>
      <input type="email" name="email" />
      <label>Message</label>
      <textarea name="message" />
      <input type="submit" value="Send" />
    </form>
  );
}
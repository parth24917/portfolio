import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import styles from "../Form/Form.module.css"
import crazy from "../../assets/crazy.jpg"

const ContactForm = () => {
  const form = useRef();

  const sendEmail = (event) => {
    event.preventDefault();
    const formData = new FormData(form.current);
    const user_name = formData.get('user_name');
    const user_email = formData.get('user_email');
    const message = formData.get('message');
    emailjs.send("service_g9lxdty", "template_jtq36cx", {
      user_name,
      user_email,
      message
    }, "s7SO3q0rVzUA7am4s")
      .then((result) => {
        alert("Message Sent");
      }).catch((error) => {
        console.log(error);
      });
  };

  return (
    <form ref={form} onSubmit={sendEmail} className={styles.formcontainer}>
      <label className={styles.title}>
        Name:
        <input type="text" name="user_name" className={styles.input}/>
      </label>
      <br />
      <label className={styles.title}>
        Email:
        <input type="email" name="user_email" className={styles.input}/>
      </label>
      <br />
      <label className={styles.title}>
        Message:
        <textarea name="message" className={styles.inputs}/>
      </label>
      <br />
      <button type="submit" className={styles.button}>
        <h1 className={styles.title}>Send</h1>
        </button>
    </form>
  );
};

export default ContactForm;
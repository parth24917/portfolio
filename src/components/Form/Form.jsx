import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import styles from "../Form/Form.module.css"
import crazy from "../../assets/crazy.jpg"

const ContactForm = () => {
  const form = useRef();

  const sendEmail = (event) => {
    event.preventDefault();
    emailjs
      .sendForm('service_g9lxdty', 'template_aelh8rn', form.current, 's7SO3q0rVzUA7am4s')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
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

import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import styles from "../Form/Form.module.css";
import Button from "../Button/Button";

const ContactForm = () => {
  const form = useRef();

  const sendEmail = (event) => {
    event.preventDefault();

    const formData = new FormData(form.current);
    const user_name = formData.get("user_name");
    const user_email = formData.get("user_email");
    const message = formData.get("message");

    emailjs
      .send(
        "service_g9lxdty",
        "template_jtq36cx",
        {
          user_name,
          user_email,
          message,
        },
        "s7SO3q0rVzUA7am4s"
      )
      .then(() => {
        alert("Message Sent");
        form.current.reset();
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const handleSubmit = () => {
    form.current.requestSubmit();
  };
  return (
    <form
      ref={form}
      onSubmit={sendEmail}
      className={styles.formcontainer}
    >
      <div className={styles.webDecoration}></div>

      <h2 className={styles.heading}>LET'S CONNECT</h2>
      <p className={styles.subtitle}>
        Got a project? Shoot me a message.
      </p>

      <label className={styles.field}>
        <span>YOUR NAME</span>
        <input
          type="text"
          name="user_name"
          placeholder="Peter Parker"
          className={styles.input}
          required
        />
      </label>

      <label className={styles.field}>
        <span>YOUR EMAIL</span>
        <input
          type="email"
          name="user_email"
          placeholder="spider@email.com"
          className={styles.input}
          required
        />
      </label>

      <label className={styles.field}>
        <span>MESSAGE</span>
        <textarea
          name="message"
          placeholder="What's on your mind?"
          className={styles.inputs}
          required
        />
      </label>

      <Button
        title="SEND MESSAGE →"
        type="red"
        onClick={handleSubmit}
      />
    </form>
  );
};

export default ContactForm;


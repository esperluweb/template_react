import { useRef } from 'react';
import emailjs from '@emailjs/browser';

import "./index.scss";

import site from "./../../data/json/site.json";

export default function Contact() {

    const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    const service_id = site.contact.service_id;
    const template_id = site.contact.template_id;
    const public_key = site.contact.public_key;

    emailjs
      .sendForm(service_id, template_id, form.current, {
        publicKey: public_key,
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

    return (
        <section id="contact">
            <form ref={form} onSubmit={sendEmail}>
                <input type="hidden" name="contact_number" value="697483" />
                <label>Name</label>
                <input type="text" name="user_name" />
                <label>Email</label>
                <input type="email" name="user_email" />
                <label>Message</label>
                <textarea name="message"></textarea>
                <input type="submit" value="Send" />
            </form>
        </section>
    );
  }
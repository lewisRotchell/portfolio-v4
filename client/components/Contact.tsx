import React from "react";
import classes from "./Contact.module.scss";
import { ContactForm } from "./ContactForm";

interface ContactProps {}

export const Contact: React.FC<ContactProps> = ({}) => {
  return (
    <section className={`${classes.contact} container`}>
      <h2>Contact Me</h2>
      <div className="bottom-line"></div>
      <ContactForm />
    </section>
  );
};

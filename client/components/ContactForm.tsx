import React, { InputHTMLAttributes } from "react";
import classes from "./ContactForm.module.scss";
import { Formik, useField, Form } from "Formik";
import * as Yup from "yup";
import { Button } from "./Button";

type InputFieldProps = InputHTMLAttributes<HTMLInputElement> & {
  label: string;
  type: string;
  name: string;
};

type TextAreaProps = InputHTMLAttributes<HTMLTextAreaElement> & {
  label: string;
  type: string;
  name: string;
};

const InputField: React.FC<InputFieldProps> = ({ label, ...props }) => {
  const [field, meta] = useField(props);

  return (
    <div className={classes.formControl}>
      <label htmlFor={props.id || props.name}>{label}</label>
      <input className={classes.input} {...field} {...props}></input>
      {/* {meta.error ? <div className={classes.error}>{meta.error}</div> : null} */}
    </div>
  );
};

const TextArea: React.FC<TextAreaProps> = ({ label, ...props }) => {
  const [field, meta] = useField(props);

  return (
    <div className={classes.formControl}>
      <label htmlFor={props.id || props.name}>{label}</label>
      <textarea className={classes.textArea} {...field} {...props}></textarea>
      {/* {meta.error ? <div className={classes.error}>{meta.error}</div> : null} */}
    </div>
  );
};

interface ContactForm {}

export const ContactForm: React.FC<ContactForm> = ({}) => {
  return (
    <Formik
      initialValues={{
        name: "",
        email: "",
        message: "",
      }}
      validateOnChange={false}
      validateOnBlur={false}
      validationSchema={Yup.object({
        name: Yup.string().required("Required"),
        email: Yup.string().email("Invalid").required("Required"),
        message: Yup.string().required("Required"),
      })}
      onSubmit={(values, { setSubmitting, resetForm }) => {
        console.log(JSON.stringify(values));
        resetForm();
        setSubmitting(false);
      }}
    >
      {({ isSubmitting }) => (
        <Form className={classes.contactForm}>
          <InputField name="name" label="Name" type="text" placeholder="Name" />
          <InputField
            name="email"
            label="Email"
            type="text"
            placeholder="Email"
          />
          <TextArea
            name="message"
            label="Message"
            type="textarea"
            placeholder="Message"
          />
          <Button style={classes.button} type={"submit"}>
            {isSubmitting ? "Loading" : "Submit"}
          </Button>
        </Form>
      )}
    </Formik>
  );
};

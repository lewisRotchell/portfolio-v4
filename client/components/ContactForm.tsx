import React, { InputHTMLAttributes } from "react";
import classes from "./ContactForm.module.scss";
import { Formik, useField, Form } from "Formik";
import * as Yup from "yup";

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
    <>
      <label htmlFor={props.id || props.name}>{label}</label>
      <input className={classes.input} {...field} {...props}></input>
      {meta.error ? <div className={classes.error}>{meta.error}</div> : null}
    </>
  );
};

const TextArea: React.FC<TextAreaProps> = ({ label, ...props }) => {
  const [field, meta] = useField(props);

  return (
    <>
      <label htmlFor={props.id || props.name}>{label}</label>
      <textarea className={classes.textArea} {...field} {...props}></textarea>
      {meta.error ? <div className={classes.error}>{meta.error}</div> : null}
    </>
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
        <Form>
          <InputField name="name" label="name" type="text" placeholder="name" />
          <InputField
            name="email"
            label="email"
            type="text"
            placeholder="email"
          />
          <TextArea
            name="message"
            label="message"
            type="textarea"
            placeholder="message"
          />
          <button type="submit">{isSubmitting ? "Loading" : "Submit"}</button>
        </Form>
      )}
    </Formik>
  );
};

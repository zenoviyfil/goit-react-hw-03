import css from './ContactForm.module.css'
import { Formik, Form, ErrorMessage } from 'formik';
import { useId } from 'react';

const ContactForm = ({ }) => {
  const nameFieldId = useId();
  const numberFieldId = useId();

  return (
  <Formik>
    <Form className={css.formContainer}>
      <div>
        <label htmlFor={nameFieldId}>Name</label>
        <input type='text' name='name' id={nameFieldId}></input>
        <ErrorMessage name='name' as='span'></ErrorMessage>
      </div>

      <div>
        <label htmlFor={numberFieldId}>Number</label>
        <input type='number' name='number' id={numberFieldId}></input>
        <ErrorMessage name='number' as='span'></ErrorMessage>
      </div>

      <button type='submit'>Add contact</button>
    </Form>
  </Formik>
  )
};

export default ContactForm
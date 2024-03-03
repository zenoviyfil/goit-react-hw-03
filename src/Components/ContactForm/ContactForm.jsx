import css from './ContactForm.module.css'
import { Formik, Form, ErrorMessage } from 'formik';
import { useId } from 'react';
import { date } from 'yup';

const ContactForm = ({ onAdd }) => {
  const handleSubmit = e => {
    e.preventDefault()
    onAdd({
      id: Date.now(),
      name: e.target.elements.text.value,
      number: e.target.elements.number.value
    })
    e.target.reset()
  }

  return(
    <form onSubmit={handleSubmit}>
      <input type="text" name='text'/>
      <input type="number" name='number'/>
      <button type='submit'>Add contact</button>
    </form>
  )
};

export default ContactForm
import css from './ContactForm.module.css'
import { Formik, Form, ErrorMessage } from 'formik';
import { useId } from 'react';
import { date } from 'yup';
import { FaUser, FaPhone, FaPlus } from "react-icons/fa";

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
    <form className={css.form} onSubmit={handleSubmit}>
      <label className={css.inputLabelUser} htmlFor="text"><FaUser /></label>
      <input className={css.formName} type="text" name='text' placeholder='George Washington'/>
      <label className={css.inputLabelNumber} htmlFor="number"><FaPhone /></label>
      <input className={css.formNumb} type='tel' name='number' placeholder='0667898456'/>
      <button className={css.formBtn} type='submit'><FaPlus />Add contact</button>
    </form>
  )
};

export default ContactForm
import css from './Contact.module.css'
import { useId } from 'react'

const Contact = ({ data: { id, name, number}, onDelete }) => {

  return (
    <div className={css.contactContainer}>
      <ul className={css.contactInfo}>
        <li className={css.contactName}>{name}</li>
        <li className={css.contactNumber}>{number}</li>
      </ul>
      <button className={css.contactBtn} onClick={() => onDelete(id)}>Delete</button>
    </div>
  )
}

export default Contact
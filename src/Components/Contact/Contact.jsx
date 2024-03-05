import css from './Contact.module.css'
import { FaUser, FaPhone } from "react-icons/fa";

const Contact = ({ data: { id, name, number}, onDelete }) => {

  return (
    <div className={css.contactContainer}>
      <ul className={css.contactInfo}>
        <li className={css.contactName}><FaUser />{name}</li>
        <li className={css.contactNumber}><FaPhone />{number}</li>
      </ul>
      <button className={css.contactBtn} onClick={() => onDelete(id)}>Delete</button>
    </div>
  )
}

export default Contact
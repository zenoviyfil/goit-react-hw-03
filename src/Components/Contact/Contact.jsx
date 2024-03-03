import css from './Contact.module.css'
import { useId } from 'react'

const Contact = ({name, number, nameFieldId, numberFieldId}) => {
  
  return (
    <div>
      <div className="contactInfo">
        <label htmlFor='name' id={nameFieldId}>{name}</label>
        <label htmlFor="number" id={numberFieldId}>{number}</label>
      </div>
      <button>Delete</button>
    </div>
  )
}

export default Contact
import css from './Contact.module.css'
import { useId } from 'react'

const Contact = ({ data: { id, name, number}, onDelete }) => {

  return (
    <>
      <div key={id}>
        <p>{name}</p>
        <p>{number}</p>
      </div>
      <button onClick={() => onDelete(id)}>Delete</button>
    </>
  )
}

export default Contact
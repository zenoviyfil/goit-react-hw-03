import './App.css'
import { useState } from 'react'
import * as Yup from 'yup';
import ContactForm from './Components/ContactForm/ContactForm'
import SearchBox from './Components/SearchBox/SearchBox'
import ContactList from './Components/ContactList/ContactList'

function App() {
  // Contact Form
  const [contacts, setContacts] = useState([
    {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
    {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
    {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
  ]
  )

  const addContact = (newContact) => {
    setContacts((initContacts) => {
      return [...initContacts, newContact]
    })
  }

  const deleteContact = (contactId) => {
    setContacts((initContacts) => {
      return initContacts.filter((contact) => contact.id !== contactId)
    })
  }

  //---------------------------------------------

  // Search Box
  const [filter, setFilter] = useState('')

  const searchContacts = contacts.filter((contact) => contact.name.toLowerCase().includes(filter.toLowerCase()))

 //-------------------------------------------------

  return (
    <div>
      <h1 className='header'>Phonebook</h1>
      <ContactForm onAdd={addContact}/>
      <SearchBox value={filter} onSearch={setFilter}/>
      <ContactList contacts={searchContacts} onDelete={deleteContact}/>
    </div>
  )
}

export default App

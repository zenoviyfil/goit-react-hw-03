import './App.css'
import { useState } from 'react'
import * as Yup from 'yup';
import ContactForm from './Components/ContactForm/ContactForm'
import SearchBox from './Components/SearchBox/SearchBox'
import ContactList from './Components/ContactList/ContactList'

function App() {
  // Contact Form

  //---------------------------------------------

  // Search Box
  const [inputValue, setInputValue] = useState("");

  const handleSearch = (event) => {
    setInputValue(event.target.value);
  };
 //-------------------------------------------------

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm />
      <SearchBox value={inputValue} handleSearch={handleSearch}/>
      <ContactList />
    </div>
  )
}

export default App

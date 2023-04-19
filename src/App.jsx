import { useState } from 'react'
import './App.css'
import { data } from "./data"
import Contacts from './Contacts'
import ContactsForm from './ContactsForm'

function App() {
  const [users, setUsers] = useState(data)

  const handleAddUser = (newUser) => {
    setUsers(prevUsers => [...prevUsers, newUser]);
  }

  return (
    <div className="App">
      <ContactsForm handleAddUser={handleAddUser} />
      <Contacts users={users} />
    </div>
  )
}

export default App

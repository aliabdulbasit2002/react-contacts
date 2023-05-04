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

  const handleDeleteContact = (id) => {
    setUsers(users.filter(user => user.id !== id))
  }

  const saveChanges = (id, update) => {
    setUsers(users.map((item) => {
      if (item.id === id) {
        return update
      }
      return item
    }))

  }

  return (
    <div className="App">
      <ContactsForm handleAddUser={handleAddUser} />
      <Contacts
        users={users}
        onDelete={handleDeleteContact}
        saveChanges={saveChanges}
      />
    </div>
  )
}

export default App

import { useState } from "react";
import "./App.css";
import { data } from "./data";
import Contacts from "./Contacts";
import ContactsForm from "./ContactsForm";
import { Grid, GridItem } from "@chakra-ui/react";

function App() {
  const [users, setUsers] = useState(data);

  // const handleAddUser = (newUser) => {
  //   setUsers((prevUsers) => [...prevUsers, newUser]);
  // };

  const handleDeleteContact = (id) => {
    setUsers(users.filter((user) => user.id !== id));
  };

  const saveChanges = (id, update) => {
    setUsers(
      users.map((item) => {
        if (item.id === id) {
          return update;
        }
        return item;
      })
    );
  };

  return (
    <Grid className="App" templateColumns="repeat(12,1fr)">
      <GridItem colSpan={{ base: 12, md: 6 }}>
        <ContactsForm />
      </GridItem>
      <GridItem colSpan={{ base: 12, md: 6 }}>
        <Contacts
          users={users}
          onDelete={handleDeleteContact}
          saveChanges={saveChanges}
        />
      </GridItem>
    </Grid>
  );
}

export default App;

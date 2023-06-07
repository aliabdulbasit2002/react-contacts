import Contacts from "./Contacts";
import ContactsForm from "./ContactsForm";
import { Grid, GridItem } from "@chakra-ui/react";

function App() {
  // const [users, setUsers] = useState(data);

  // const handleAddUser = (newUser) => {
  //   setUsers((prevUsers) => [...prevUsers, newUser]);
  // };

  // const handleDeleteContact = (id) => {
  //   setUsers(users.filter((user) => user.id !== id));
  // };

  // const saveChanges = (id, update) => {
  //   setUsers(
  //     users.map((item) => {
  //       if (item.id === id) {
  //         return update;
  //       }
  //       return item;
  //     })
  //   );
  // };

  return (
    <Grid
      className="App"
      templateColumns="repeat(12,1fr)"
      gap={{ base: 0, md: 6 }}
      p={10}
    >
      <GridItem colSpan={{ base: 12, md: 6 }}>
        <ContactsForm />
      </GridItem>
      <GridItem colSpan={{ base: 12, md: 6 }} mt={{ base: 10, md: 0 }}>
        <Contacts />
      </GridItem>
    </Grid>
  );
}

export default App;

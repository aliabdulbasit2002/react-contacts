import { Box, Button, Flex, SimpleGrid, Text } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { deleteUser } from "./reducers/contactReducer";
import EditContactForm from "./EditContactForm";

const Contacts = () => {
  const { contacts } = useSelector((state) => state.contacts);
  const dispatch = useDispatch();

  return (
    <SimpleGrid minChildWidth="14rem" gap={3}>
      {contacts.map((contact) => (
        <Box
          key={contact.id}
          bg="telegram.400"
          p={5}
          borderRadius={10}
          borderTop="10px solid"
          borderTopColor="pink"
        >
          <Text>Name : {contact.name}</Text>
          <Text>Phone : {contact.phoneNumber}</Text>
          <Text>Location: {contact.location}</Text>
          <Flex gap={3} mt={4}>
            <EditContactForm contact={contact} />
            <Button onClick={() => dispatch(deleteUser(contact.id))}>
              delete
            </Button>
          </Flex>
        </Box>
      ))}
    </SimpleGrid>
  );
};
export default Contacts;

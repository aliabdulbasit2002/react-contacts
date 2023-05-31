import { useState } from "react";
import EditContactForm from "./EditContactForm";
import { v4 as uuid } from "uuid";
import { Button, Flex, SimpleGrid } from "@chakra-ui/react";
import { useSelector } from "react-redux";

const Contacts = ({ onDelete, saveChanges }) => {
  const [showModal, setShowModal] = useState(false);

  const handleButtonClick = () => {
    setShowModal(!showModal);
  };

  const handleModalClose = () => {
    setShowModal(!showModal);
  };

  const { contacts } = useSelector((state) => state.contacts);

  return (
    <SimpleGrid minChildWidth="14rem">
      {contacts.map((contact) => (
        <div key={contact.id} className="card">
          <p>Name : {contact.name}</p>
          <p>Phone : {contact.phoneNumber}</p>
          <p>Location: {contact.location}</p>
          <Flex gap={3}>
            <Button onClick={handleButtonClick}>edit</Button>
            <Button onClick={() => onDelete(contact.id)}>delete</Button>
          </Flex>
          {showModal && (
            <EditContactForm
              modalClose={handleModalClose}
              saveChanges={saveChanges}
              user={user}
            />
          )}
        </div>
      ))}
    </SimpleGrid>
  );
};
export default Contacts;

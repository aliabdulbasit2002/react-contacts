import { useState } from "react";
import { useDispatch } from "react-redux";
import { addUser } from "./reducers/contactReducer";
import {
  Button,
  FormControl,
  FormLabel,
  Heading,
  Input,
} from "@chakra-ui/react";
import { v4 as uuid } from "uuid";

const ContactsForm = () => {
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [location, setLocation] = useState("");

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newUser = {
      name: name,
      phoneNumber: phoneNumber,
      location: location,
      id: uuid(),
    };
    dispatch(addUser(newUser));
    setName("");
    setPhoneNumber("");
    setLocation("");
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <Heading>Functional Form</Heading>
        <FormControl>
          <FormLabel>Name </FormLabel>
          <Input
            type="text"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </FormControl>
        <FormControl>
          <FormLabel>Phone </FormLabel>
          <Input
            type="number"
            name="phoneNumber"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
        </FormControl>
        <FormControl>
          <FormLabel>Location</FormLabel>
          <Input
            type="text"
            name="location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
        </FormControl>
        <Button mt={6} type="submit" colorScheme="telegram">
          Submit
        </Button>
      </form>
    </>
  );
};

export default ContactsForm;

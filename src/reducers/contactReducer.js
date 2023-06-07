import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuid } from "uuid";

let initialState = {
  contacts: [
    {
      name: "Ali",
      phoneNumber: 28338932728,
      location: "Grou",
      id: uuid(),
    },
    {
      name: "Maher",
      phoneNumber: 28373829292,
      location: "Kingston",
      id: uuid(),
    },
  ],
};

export const contactSlice = createSlice({
  name: "contacts",
  initialState,
  reducers: {
    addUser: (state, action) => {
      state.contacts.push(action.payload);
    },
    editUser: (state, action) => {
      state.contacts = state.contacts.map((contact) => {
        if (contact.id === action.payload.id) {
          return action.payload.updatedUser;
        }
        return contact;
      });
    },
    deleteUser: (state, action) => {
      state.contacts = state.contacts.filter((contact) => {
        if (contact.id !== action.payload) {
          return contact;
        }
      });
    },
  },
});

export const { addUser, editUser, deleteUser } = contactSlice.actions;

export default contactSlice.reducer;

import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { toast } from 'react-toastify';

axios.defaults.baseURL = 'https://6403183f302b5d671c46c806.mockapi.io';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchContacts',
  async (_, thunkAPI) => {
    try {
      const { data } = await axios.get('/contacts');
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const contactStr = contact => `Contact \n
name: ${contact.name} \n
phone: ${contact.number} \n
`;

export const addContact = createAsyncThunk(
  'contacts/addContacts',
  async (contact, thunkAPI) => {
    try {
      const { data, status } = await axios.post('/contacts', contact);

      if (status === 201) {
        thunkAPI.dispatch(fetchContacts());
      }

      toast.success(contactStr(data).concat('is created'));

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (id, thunkAPI) => {
    try {
      const { data, status } = await axios.delete(`/contacts/${id}`);

      if (status === 200) {
        thunkAPI.dispatch(fetchContacts());
      }

      toast.success(contactStr(data).concat('deleted'));


      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
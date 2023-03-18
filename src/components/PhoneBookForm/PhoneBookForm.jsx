import { useState } from 'react';
import css from './PhoneBookForm.module.css';

import { nanoid } from 'nanoid';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'components/redux/contacts/contactsThunk';
import { selectContacts } from 'components/redux/selectors';


export const PhoneBookForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();

  const isDublicate = (name, number) => {
    const normalizedName = name.toLowerCase();
    const normalizedNumber = number.toLowerCase();
    const contact = contacts.find(({ name, number }) => {
      return (
        name.toLowerCase() === normalizedName ||
        number.toLowerCase() === normalizedNumber
      );
    });

    return Boolean(contact);
  };


  const handleCanngeInput = ({ currentTarget: { name, value } }) => {
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        break;
    }
  };

  const handleFormSubmit = evt => {
    evt.preventDefault();

    if (isDublicate(name, number)) {
      alert(`${name}. number: ${number} is already in contacts.`);
      return false;
    }

    dispatch(addContact({ id: nanoid(), name, number }));

    setName('');
    setNumber('');
  };

  return (
    <form className={css.formStyle} onSubmit={handleFormSubmit}>
      <label>
        <p className={css.labelStyle}>Name</p>
        <input
          className={css.inputStyle}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          value={name}
          onChange={handleCanngeInput}
        />
      </label>
      <label>
        <p className={css.labelStyle}>Number</p>
        <input
          className={css.inputStyle}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          value={number}
          onChange={handleCanngeInput}
        />
      </label>
      <button className={css.addButton} type="submit">
        Add contact
      </button>
    </form>
  );
};


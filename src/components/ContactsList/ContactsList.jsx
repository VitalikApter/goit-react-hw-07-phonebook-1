import { Contact } from './Contact/Contact';
import { useDispatch, useSelector } from 'react-redux';
import { selectFilteredContacts, selectIsLoading } from 'redux/selectors';
import { deleteContact } from 'redux/contacts/contactsThunk';
import css from './ContactsList.module.css';
import Loader from 'components/Loader/Loader';

export const ContactsList = () => {
  const dispatch = useDispatch();

  const handleDeleteContact = id => {
    dispatch(deleteContact(id));
  };

  const contactListToDisplay = useSelector(selectFilteredContacts);
  const isLoading = useSelector(selectIsLoading);

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : !contactListToDisplay.length ? (
        <p>No contacts to display</p>
      ) : (
        <ul className={css.contactsList}>
          {contactListToDisplay.map(item => (
            <Contact
              key={item.id}
              contact={item}
              onDelete={handleDeleteContact}
            />
          ))}
        </ul>
      )}
    </>
  );
};
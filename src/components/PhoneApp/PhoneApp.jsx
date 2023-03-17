import { Section } from 'components/Section/Section';
import { PhoneBookForm } from 'components/PhoneBookForm/PhoneBookForm';
import { ContactsList } from 'components/ContactsList/ContactsList';
import { FilterByName } from 'components/FilterByName/FilterByName';
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts } from 'redux/selectors';
import { fetchContacts } from 'redux/contacts/contactsThunk';
import { useEffect } from 'react';

export const PhoneApp = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <Section title="Phonebook">
        <PhoneBookForm />
      </Section>

      {!!contacts.length && (
        <Section>
          <FilterByName />
        </Section>
      )}
      <Section title="ContactsList">
        <ContactsList />
      </Section>
    </>
  );
};
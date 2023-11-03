import { useEffect, useState } from 'react';
import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';
import { nanoid } from 'nanoid';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import {
  MainTitle,
  Message,
  SecondaryTitle,
} from './individualElements/Title.styled';

export const App = () => {
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    const contactsData = localStorage.getItem('contacts');
    if (contactsData !== null) {
      setContacts(JSON.parse(contactsData));
    }
  }, []);

  useEffect(() => {
    if (contacts.length > 0) {
      localStorage.setItem('contacts', JSON.stringify(contacts));
    }
  }, [contacts]);

  const addContact = contact => {
    if (contacts.find(({ name }) => name === contact.name)) {
      return Notify.failure(`${contact.name} is already in contacts`);
    }

    setContacts([...contacts, { id: nanoid(), ...contact }]);
  };

  const deleteContact = key => {
    setContacts(contacts.filter(({ id }) => id !== key));
  };

  const changeFilter = newFilter => {
    setFilter(newFilter);
  };

  const filterArray = contacts.filter(({ name }) => {
    if (filter === '') {
      return true;
    }

    return name.toLowerCase().includes(filter.toLowerCase());
  });

  return (
    <div>
      <MainTitle>Phonebook</MainTitle>
      <ContactForm onAdd={addContact} />
      <SecondaryTitle>Contacts</SecondaryTitle>
      <Filter filter={filter} onChange={changeFilter} />
      {contacts.length > 0 ? (
        <ContactList arr={filterArray} onDelete={deleteContact} />
      ) : (
        <Message>Phonebook is empty</Message>
      )}
    </div>
  );
};

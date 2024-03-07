import { ContactForm } from 'components/contactForm/contactForm';
import { ContactList } from 'components/contactList/contactList';
import { Filter } from 'components/filter/filter';
import css from './ContactsPage.module.css'

const ContactsPage = () => {
  return (
    <>
      <h1 className={css.phonebook__header}>Phonebook</h1>
      <ContactForm />
      <h2 className={css.phonebook__title}>Contacts</h2>
      <Filter />
      <ContactList />
    </>
  );
};

export default ContactsPage;

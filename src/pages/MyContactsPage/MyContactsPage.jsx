import MyContacts from '../../components/MyContacts/MyContacts';
import ContactList from 'components/MyContacts/ContactsList/ContactsList';

const MyContactsPage = () => {
  return (
    <main>
      <section>
        <MyContacts />
        <ContactList />
      </section>
    </main>
  );
};

export default MyContactsPage;

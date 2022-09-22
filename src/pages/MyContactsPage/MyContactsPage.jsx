import MyContacts from '../../components/MyContacts/MyContacts';
import ContactList from 'components/MyContacts/ContactsList/ContactsList';

const MyContactsPage = () => {
  return (
    <div className="container">
      <MyContacts />
      <ContactList />
    </div>
  );
};

export default MyContactsPage;

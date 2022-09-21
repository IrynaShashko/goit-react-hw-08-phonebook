export const getContacts = ({ contacts }) => contacts.items;

export const getFilteredContacts = ({ contacts, filter }) => {
  if (!filter) {
    return contacts.items;
  }
  const normalizedFilter = filter?.toLowerCase();
  const result = contacts?.items?.filter(({ name, email }) => {
    const normalizedName = name?.toLowerCase();
    const normalizedEmail = email?.toLowerCase();
    return (
      normalizedName.includes(normalizedFilter) ||
      normalizedEmail.includes(normalizedFilter)
    );
  });

  return result;
};

export const getFavoriteContacts = ({ contacts }) => {
  const favoriteContacts = contacts.items.filter(({ favorite }) => favorite);
  return favoriteContacts;
};

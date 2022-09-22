export const getContacts = ({ contacts }) => contacts.items;

export const getFilteredContacts = ({ contacts, filter }) => {
  if (!filter) {
    return contacts.items;
  }
  const normalizedFilter = filter?.toLowerCase();
  const result = contacts?.items?.filter(({ name, number }) => {
    const normalizedName = name?.toLowerCase();
    return (
      normalizedName.includes(normalizedFilter) ||
      number.includes(normalizedFilter)
    );
  });

  return result;
};

export const getFavoriteContacts = ({ contacts }) => {
  const favoriteContacts = contacts.items.filter(({ favorite }) => favorite);
  return favoriteContacts;
};

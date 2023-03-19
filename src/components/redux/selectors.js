import { createSelector } from '@reduxjs/toolkit';

export const selectContacts = ({ contacts }) => contacts.items;
export const selectError = ({ contacts }) => contacts.error;
export const selectIsLoading = ({ contacts }) => contacts.isLoading;
export const selectFilter = ({ filter }) => filter;

const filterNormalize = filter => filter.toLowerCase();

export const selectFilteredContacts = createSelector(
  [selectContacts, selectFilter],
  (contacts, filter) =>
    contacts.filter(({ number, name }) =>
      number.toLowerCase().includes(filterNormalize(filter)) ||
      name.toLowerCase().includes(filterNormalize(filter))
    )
);


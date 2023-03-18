import { createSelector } from '@reduxjs/toolkit';

export const selectContacts = ({ contacts }) => contacts.items;
export const selectError = ({ contacts }) => contacts.error;
export const selectIsLoading = ({ contacts }) => contacts.isLoading;
export const selectFilter = ({ filter }) => filter;

const filterNormalize = filter => filter.toLowerCase();

export const selectFilteredContacts = createSelector(
  [selectContacts, selectFilter],
  (contacts, filter) =>
    contacts.filter(({ name, number }) =>
      name.toLowerCase().includes(filterNormalize(filter))
    ),
    (contacts, filter) =>
    contacts.filter(({  number }) =>
    number.toLowerCase().includes(filterNormalize(filter))
    )
);
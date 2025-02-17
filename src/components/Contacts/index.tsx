/* eslint-disable import/no-anonymous-default-export */
import { Contact } from '@/types';

import { ContactCreate } from './ContactCreate';
import { ContactEdit } from './ContactEdit';
import { ContactList } from './ContactList';
import { ContactShow } from './ContactShow';

export default {
  list: ContactList,
  show: ContactShow,
  edit: ContactEdit,
  create: ContactCreate,
  recordRepresentation: (record: Contact) =>
    record?.first_name + ' ' + record?.last_name,
};

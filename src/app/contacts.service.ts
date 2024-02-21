import { Injectable } from '@angular/core';

import { Contact } from './contac';

@Injectable({
  providedIn: 'root'
})
export class ContactsService {
  contact: Contact[] = []

  constructor() { }

  addNewContact(newContact: Contact) {
    this.contact.push(newContact)
  }

  getContact() {
    return this.contact;
  }
}

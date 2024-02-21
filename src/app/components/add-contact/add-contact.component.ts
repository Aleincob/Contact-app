import { Component } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';

import { Contact } from 'src/app/contac';

import { ContactsService } from 'src/app/contacts.service';

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.css']
})
export class AddContactComponent {
  contact = '';

  dataForm = this.formBuilder.group({
    name: new FormControl('', [Validators.required]),
    phone: new FormControl(0, [Validators.required]),
    eMail: new FormControl('', [Validators.required])
  })

  constructor(private contactsService: ContactsService, private formBuilder: FormBuilder) { }

  addNewContact() {
    const newContact: Contact = {
      name: this.dataForm.value.name ?? '',
      phone: this.dataForm.value.phone ?? 0,
      eMail: this.dataForm.value.eMail ?? '',
    };
    this.contactsService.addNewContact(newContact)
    console.log('datos recibidos')
  }
}

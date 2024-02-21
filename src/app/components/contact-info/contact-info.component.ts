import { Component } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';

import { Contact } from 'src/app/contac';

import { ContactsService } from 'src/app/contacts.service';

@Component({
  selector: 'app-contact-info',
  templateUrl: './contact-info.component.html',
  styleUrls: ['./contact-info.component.css']
})
export class ContactInfoComponent {
  contacts: Contact[] = this.contactsService.getContact()

  constructor(private contactsService: ContactsService) { }

}

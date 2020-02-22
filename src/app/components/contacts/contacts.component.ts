import { Component, OnInit } from "@angular/core";
import { Contact } from "../../models/contact";
import { ContactsService } from "../../services/contacts.service";

@Component({
  selector: "app-contacts",
  templateUrl: "./contacts.component.html",
  styleUrls: ["./contacts.component.css"]
})
export class ContactsComponent implements OnInit {
  pageHeader: string;
  pageDescription: string;
  pageIcon: string;
  avatar: string;
  contacts: Array<Contact>;

  constructor(private contactService: ContactsService) {}

  ngOnInit() {
    this.pageHeader = "Contacts";
    this.pageDescription = "This page shows customers contacts";
    this.pageIcon = "far fa-id-card";

    this.contactService.getContacts().subscribe((contact: Array<Contact>) => {
      // console.log(contact);
      this.contacts = contact;
    });
  }
}

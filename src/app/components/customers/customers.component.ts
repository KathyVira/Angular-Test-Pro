import { Component, OnInit } from "@angular/core";
import { Contact } from "../../models/contact";
import { ContactsService } from "../../services/contacts.service";

@Component({
  selector: "app-customers",
  templateUrl: "./customers.component.html",
  styleUrls: ["./customers.component.css"]
})
export class CustomersComponent implements OnInit {
  pageHeader: string;
  pageDescription: string;
  pageIcon: string;
  avatar: string;
  contacts: Array<Contact>;

  constructor(private contactService: ContactsService) {}

  ngOnInit() {
    this.pageHeader = "Customers Page";
    this.pageDescription = "This is all of your registers customers";
    this.pageIcon = "fas fa-user";
    this.contactService.getContacts().subscribe((contact: Array<Contact>) => {
      // console.log(contact);
      this.contacts = contact;
    });
  }
  pressMe(){
    alert('hello');
  }
}

import { Component, OnInit } from "@angular/core";
import { Contact } from "../../models/contact";
import { ContactsService } from "../../services/contacts.service";
import { AngularFirestore } from "@angular/fire/firestore";
import { map } from "rxjs/operators";

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
  customers: Array<any> = [];

  id: string;
  name: string;
  email: string;
  address: string;

  constructor(
    private contactService: ContactsService,
    private firestore: AngularFirestore
  ) {}

  ngOnInit() {
    this.pageHeader = "Customers Page";
    this.pageDescription = "This is all of your registers customers";
    this.pageIcon = "fas fa-user";

    this.contactService.getContacts().subscribe((contact: Array<Contact>) => {
      // console.log(contact);
      this.contacts = contact;
    });

    this.firestore
      .collection("customers")
      .get()
      .pipe(
        map(a => {
          a.forEach(customer => {
            this.customers.push({
              id: customer.id,
              name: customer.data().name,
              email: customer.data().email,
              address: customer.data().address
            });
          });
        })
      )
      .subscribe(res => {
        // console.log(this.customers);
      });
  }
  pressMe() {
    alert("hello");
  }

  deleteCustomer(id) {
    // console.log(id);

    this.firestore
      .collection("customers")
      .doc(id)
      .delete();
  }
  updateCustomer(id) {
    // console.log(id);
    this.firestore
      .collection("customers")
      .doc(id)
      .update({ name: "nnnn", email: "nnnn@gmail.com", address: "nnnntlv" });
  }

  confirmDelete(id) {
    // var txt;
    var r = confirm("You are sure you want to delete this customer?");
    if (r == true) {
      this.deleteCustomer(id);
      // txt = "You pressed OK!";
    } else {
      // txt = "You pressed Cancel!";
    }
    // document.getElementById("demo").innerHTML = txt;
  }
}

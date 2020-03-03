import { Injectable } from "@angular/core";
import { AngularFirestore } from "@angular/fire/firestore";
import { map } from "rxjs/operators";
import { ContactsService } from "../services/contacts.service";
import { Contact } from "../models/contact";

import { Router } from "@angular/router";

@Injectable({
  providedIn: "root"
})
export class FirebaseService {
  constructor(
    public db: AngularFirestore,
    private contactService: ContactsService,
    public router: Router
  ) {}
  customers: Array<any> = [];
  contacts: Array<Contact>;

  name: "string";
  email: "string";
  address: "string";
  id: "string";

  getCustomertoUpdatefireBase(customer) {
    console.log("in firebase: " + (this.name = customer.name));
    this.name = customer.name;
    this.email = customer.email;
    this.address = customer.address;
    this.id = customer.id;
    return this;
  }

  getUser(customer) {
    this.name = customer.name;
    this.email = customer.email;
    this.address = customer.address;
    this.id = customer.id;

    // console.log(this.name + " in getUser.firebase.service");
    // console.log(this.email + " in getUser.firebase.service");
    // console.log(this.address + " in getUser.firebase.service");
    // console.log(this.id + " in getUser.firebase.service");

    // console.log(customer.value.email + " in getUser.firebase.service");
    // this.router.navigate(["customer/update"]);
    // return
    //  this.db
    // .collection("customers")
    // .doc(customer.id)
    // .snapshotChanges();
    // .get();

    // console.log(this.db);
    // .snapshotChanges();
  }

  updateUser(value) {
    this.db
      .collection("customers")
      .doc(value.id)
      .update({
        name: value.name,
        email: value.email,
        address: value.address
      });
  }

  deleteUser(id) {
    return this.db
      .collection("customers")
      .doc(id)
      .delete();
  }

  getUsers() {
    // this.contactService.getContacts().subscribe((contact: Array<Contact>) => {
    //   // console.log(contact);
    //   this.contacts = contact;
    // });
    this.db
      .collection("customers")
      .get()
      .pipe(
        map(a => {
          // console.log(a);
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

    return this.db.collection("customers").snapshotChanges();
  }

  createUser(form) {
    return this.db.collection("customers").add({
      name: form.value.name,
      email: form.value.email,
      address: form.value.address
    });
  }
}

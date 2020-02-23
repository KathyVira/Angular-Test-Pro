import { Injectable } from "@angular/core";
import { AngularFirestore } from "@angular/fire/firestore";
import { map } from "rxjs/operators";
import { ContactsService } from "../services/contacts.service";
import { Contact } from "../models/contact";

@Injectable({
  providedIn: "root"
})
export class FirebaseService {
  constructor(
    public db: AngularFirestore,
    private contactService: ContactsService
  ) {}
  customers: Array<any> = [];
  contacts: Array<Contact>;

  getUser(customer) {
    console.log(customer.name + " in firebase.service");
    // this.router.navigate(["customer/update"]);
    // return
    //  this.db
    // .collection("customers")
    // .doc(customer.id)
    // .snapshotChanges();
    // .get();

    console.log(this.db);
    // .snapshotChanges();
  }

  updateUser(id, value) {
    this.db
      .collection("customers")
      .doc(id)
      .update({
        name: "from",
        email: "service@gmail.com",
        address: "firebase"
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
      email: form.value.name,
      address: form.value.name
    });
  }
}

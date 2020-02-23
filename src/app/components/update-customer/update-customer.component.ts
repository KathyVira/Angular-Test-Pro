import { Component, OnInit } from "@angular/core";
import { AngularFirestore } from "@angular/fire/firestore";
import { map } from "rxjs/operators";
import { Router } from "@angular/router";
import { FirebaseService } from "../../services/firebase.service";
import { CustomersComponent } from "../customers/customers.component";

@Component({
  selector: "app-update-customer",
  templateUrl: "./update-customer.component.html",
  styleUrls: ["./update-customer.component.css"]
})
export class UpdateCustomerComponent implements OnInit {
  pageHeader: string;
  pageDescription: string;
  pageIcon: string;
  customer: Array<any> = [];

  id: string;
  name: string;
  email: string;
  address: string;

  constructor(
    private firestore: AngularFirestore,
    public firebaseService: FirebaseService,
    public router: Router,
    public customersComponent: CustomersComponent
  ) {}

  ngOnInit(customer) {
    this.pageHeader = "Customers Update";
    this.pageDescription = "here you can update your customers";
    this.pageIcon = "fas fa-users";
    console.log(this.customer);
    // this.firestore
    //   .collection("customers")
    //   .get()
    //   .pipe(
    //     map(a => {
    //       // console.log(a);
    //       a.forEach(customer => {
    //         this.customers.push({
    //           id: customer.id,
    //           name: customer.data().name,
    //           email: customer.data().email,
    //           address: customer.data().address
    //         });
    //       });
    //     })
    //   )
    //   .subscribe(res => {
    //     console.log(this.customers);
    //   });
  }
  onsubmit(id, form) {
    this.firebaseService.updateUser(id, form.value);
    console.log(form.value);
    console.log("updateCustomerForm");
  }

  getCustomer(customer) {
    this.name = customer.name;
    this.email = customer.email;
    this.address = customer.address;

    console.log(customer.name + " in update-module");
    console.log(customer.email + " in update-module");
    console.log(customer.address + " in update-module");
  }
}

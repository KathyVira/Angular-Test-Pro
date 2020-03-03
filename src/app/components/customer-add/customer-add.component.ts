import { Component, OnInit } from "@angular/core";
import { FirebaseService } from "../../services/firebase.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-customer-add",
  templateUrl: "./customer-add.component.html",
  styleUrls: ["./customer-add.component.css"]
})
export class CustomerAddComponent implements OnInit {
  pageHeader: string;
  pageDescription: string;
  pageIcon: string;
  customers: Array<any> = [];

  id: string;
  name: string;
  email: string;
  address: string;

  constructor(public firebaseService: FirebaseService, public router: Router) {}

  ngOnInit() {
    this.pageHeader = "Customers Add";
    this.pageDescription = "Here you can add new customers";
    this.pageIcon = "fas fa-users";

    // this.firestore.collection('customers').add({name:'qqqq',email:'qqq@gmail.com',address:'gggtlv'});

    // this.firestore.collection('customers').doc('j77FgcFyAPu1PsFAycjD').update({name:'nnnn',email:'nnnn@gmail.com',address:'nnnntlv'});

    // this.firestore.collection('customers').doc('j77FgcFyAPu1PsFAycjD').delete();

    // this.firebaseService.getUsers();
  }

  onsubmit(form) {
    this.firebaseService.createUser(form);
    this.router.navigate(["/customers"]);
  }
}

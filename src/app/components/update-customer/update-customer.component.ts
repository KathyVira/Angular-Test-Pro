import { Component, OnInit } from "@angular/core";
import {
  AngularFirestore,
  AngularFirestoreDocument
} from "@angular/fire/firestore";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { Router, ActivatedRoute } from "@angular/router";
import { FirebaseService } from "../../services/firebase.service";

export interface Item {
  name: string;
}

@Component({
  selector: "app-update-customer",
  templateUrl: "./update-customer.component.html",
  styleUrls: ["./update-customer.component.css"]
})
export class UpdateCustomerComponent implements OnInit {
  // https://github.com/angular/angularfire/blob/master/docs/firestore/documents.md

  //
  pageHeader: string;
  pageDescription: string;
  pageIcon: string;
  // customer: Array<any> = [];

  id: string;
  name: string;
  email: string;
  address: string;

  constructor(
    private firestore: AngularFirestore,
    public firebaseService: FirebaseService,
    public router: Router,
    public rourerA: ActivatedRoute
  ) {}

  ngOnInit() {
    this.pageHeader = "Customers Update";
    this.pageDescription = "here you can update customers list with FireBase DB";
    this.pageIcon = "fas fa-users";

    this.id = this.rourerA.snapshot.paramMap.get("id");
    this.name = this.rourerA.snapshot.paramMap.get("name");

    this.email = this.rourerA.snapshot.paramMap.get("email");
    this.address = this.rourerA.snapshot.paramMap.get("address");
  }

  onsubmit(form) {
    this.firebaseService.updateUser(form.value);
    this.router.navigate(["/customers"]);
    // console.log("In updateCustomerForm: ", form.value, form.value.id);
  }
}

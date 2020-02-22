import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-customer-add",
  templateUrl: "./customer-add.component.html",
  styleUrls: ["./customer-add.component.css"]
})
export class CustomerAddComponent implements OnInit {
  pageHeader: string;
  pageDescription: string;
  pageIcon: string;
  test: string = "";

  constructor() {}

  ngOnInit() {
    this.pageHeader = "Customers Add";
    this.pageDescription = "here you can add new customers";
    this.pageIcon = "fas fa-users";
    console.log(this.test);
  }
  showthistest() {
    console.log(this.test);
  }
  onsubmit(form) {
    console.log(form.value.firstname);
  }
}

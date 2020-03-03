import { Component, OnInit } from "@angular/core";
import { map } from "rxjs/operators";

import { Router } from "@angular/router";
import { from } from "rxjs";
import { SigninService } from "../../services/signin.service";

@Component({
  selector: "app-sing-in",
  templateUrl: "./sing-in.component.html",
  styleUrls: ["./sing-in.component.css"]
})
export class SingInComponent implements OnInit {
  pageHeader: string;
  pageDescription: string;
  pageIcon: string;
  emailUser: string;
  passwordUser: string;

  isLogedIn: boolean = false;
  constructor(private signinService: SigninService, public router: Router) {}

  ngOnInit() {
    this.pageHeader = "Authentication";
    this.pageDescription =
      "Connection with FireBase DB, email and password you can take from Kathy Vira";
    this.pageIcon = "fas fa-users";
  }
  login(form) {
    // console.log(form.value);
    this.signinService.Login(form);
    this.router.navigate(["customers"]);
  }
  // addUserForm() {
  //   console.log("in addUserForm");
  // }
}

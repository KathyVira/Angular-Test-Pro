import { Injectable } from "@angular/core";
import { AngularFireAuth } from "@angular/fire/auth";
import { Router } from "@angular/router";

@Injectable({
  providedIn: "root"
})
export class SigninService {
  constructor(public angularFireAuth: AngularFireAuth, public router: Router) {}

  isLogedIn: boolean = false;

  Login(form) {
    // console.log(form.value);

    this.angularFireAuth.auth
      .signInWithEmailAndPassword(form.value.email, form.value.passwordUser)
      .then(res => {
        this.isLogedIn = true;
        console.log("success from Login service");
        // console.log("res");
        this.router.navigate(["/customers"]);
      })
      .catch(err => {
        console.log(err.code);
        console.log("err");
      });
  }
}

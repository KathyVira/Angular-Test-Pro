import { Injectable } from "@angular/core";
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree
} from "@angular/router";
import { Observable, from } from "rxjs";
import { SigninService } from "../services/signin.service";

@Injectable({
  providedIn: "root"
})
export class AuthGuardGuard implements CanActivate {
  constructor(public signinService: SigninService) {}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    console.log("from auth-guard");
    console.log(this.signinService.isLogedIn + " isLogedIn from auth-guard");
    return this.signinService.isLogedIn;
  }
}

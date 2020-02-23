import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { RouterModule, Routes, CanActivate } from "@angular/router";
import { CustomersComponent } from "./components/customers/customers.component";
import { ContactsComponent } from "./components/contacts/contacts.component";
import { PageNotFoundComponent } from "./components/page-not-found/page-not-found.component";
import { CustomerMessegesComponent } from "./components/customer-messeges/customer-messeges.component";
import { CustomerAddComponent } from "./components/customer-add/customer-add.component";
import { SingInComponent } from "./components/sing-in/sing-in.component";
import { UpdateCustomerComponent } from "./components/update-customer/update-customer.component";
import { AuthGuardGuard } from "../app/guards/auth-guard.guard";

const appRoutes: Routes = [
  { path: "", redirectTo: "customers", pathMatch: "full" },
  { path: "singin", component: SingInComponent },
  {
    path: "customers",
    component: CustomersComponent
  },
  {
    path: "customers/add",
    component: CustomersComponent
  },
  {
    path: "contacts",
    component: ContactsComponent,
    canActivate: [AuthGuardGuard]
  },
  { path: "messeges", component: CustomerMessegesComponent },
  {
    path: "customer/add",
    component: CustomerAddComponent
  },
  {
    path: "customer/update",
    component: UpdateCustomerComponent
  },

  { path: "**", component: PageNotFoundComponent }
];

@NgModule({
  exports: [RouterModule],
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(appRoutes)]
})
export class AppRoutingModule {}

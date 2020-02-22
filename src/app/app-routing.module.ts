import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { RouterModule, Routes } from "@angular/router";
import { CustomersComponent } from "./components/customers/customers.component";
import { ContactsComponent } from "./components/contacts/contacts.component";
import { PageNotFoundComponent } from "./components/page-not-found/page-not-found.component";
import { CustomerMessegesComponent } from "./components/customer-messeges/customer-messeges.component";
import { CustomerAddComponent } from "./components/customer-add/customer-add.component";


const appRoutes: Routes = [
  { path: "", redirectTo: "customers", pathMatch: "full" },
  { path: "customers", component: CustomersComponent },
  { path: "customers/add", component: CustomersComponent },
  { path: "contacts", component: ContactsComponent },
  { path: "messeges", component: CustomerMessegesComponent },
  { path: "customer/add", component: CustomerAddComponent},



  { path: "**", component: PageNotFoundComponent }
];

@NgModule({
  exports: [RouterModule],
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(appRoutes)]
})
export class AppRoutingModule {}

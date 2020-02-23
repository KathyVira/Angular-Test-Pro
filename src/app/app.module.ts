import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { environment } from "../environments/environment";
import { AngularFireModule } from "@angular/fire";
import { AngularFirestoreModule } from "@angular/fire/firestore";

import { AppComponent } from "./app.component";
import { TopNavComponent } from "./components/top-nav/top-nav.component";
import { SideNavComponent } from "./components/side-nav/side-nav.component";
import { FooterComponent } from "./components/footer/footer.component";
import { CustomersComponent } from "./components/customers/customers.component";
import { ContactsComponent } from "./components/contacts/contacts.component";
import { AppRoutingModule } from "./app-routing.module";
import { PageNotFoundComponent } from "./components/page-not-found/page-not-found.component";
import { PageHeaderComponent } from "./components/page-header/page-header.component";
import { CustomerMessegesComponent } from "./components/customer-messeges/customer-messeges.component";
import { CustomerAddComponent } from "./components/customer-add/customer-add.component";
import { FormsModule } from "@angular/forms";
import { AngularFireAuthModule } from "@angular/fire/auth";
import { SingInComponent } from "./components/sing-in/sing-in.component";
import { UpdateCustomerComponent } from "./components/update-customer/update-customer.component";
import { AuthGuardGuard } from "./guards/auth-guard.guard";

@NgModule({
  declarations: [
    AppComponent,
    TopNavComponent,
    SideNavComponent,
    FooterComponent,
    CustomersComponent,
    ContactsComponent,
    PageNotFoundComponent,
    PageHeaderComponent,
    CustomerMessegesComponent,
    CustomerAddComponent,
    SingInComponent,
    UpdateCustomerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule
  ],
  providers: [AuthGuardGuard],
  bootstrap: [AppComponent]
})
export class AppModule {}

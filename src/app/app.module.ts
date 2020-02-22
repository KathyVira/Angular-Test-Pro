import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from "./app.component";
import { TopNavComponent } from "./components/top-nav/top-nav.component";
import { SideNavComponent } from "./components/side-nav/side-nav.component";
import { FooterComponent } from "./components/footer/footer.component";
import { CustomersComponent } from "./components/customers/customers.component";
import { ContactsComponent } from "./components/contacts/contacts.component";
import { AppRoutingModule } from "./app-routing.module";
import { PageNotFoundComponent } from "./components/page-not-found/page-not-found.component";
import { PageHeaderComponent } from "./components/page-header/page-header.component";
import { CustomerMessegesComponent } from './components/customer-messeges/customer-messeges.component';
import { CustomerAddComponent } from './components/customer-add/customer-add.component';
import { FormsModule } from '@angular/forms';

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
    CustomerAddComponent
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}

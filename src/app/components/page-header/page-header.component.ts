import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-page-header",
  templateUrl: "./page-header.component.html",
  styleUrls: ["./page-header.component.css"]
})
export class PageHeaderComponent implements OnInit {
  @Input()
  pageHeader: string;
  @Input()
  pageDescription: string;
  @Input()
  pageIcon: string;
  constructor() {}

  ngOnInit() {
    // this.pageIcon = "fas fa-users";
    // this.pageHeader = "Customers Page";
    // this.pageDescription = "This is all of your registers customers";
  }
}

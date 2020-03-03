import { Component, OnInit } from "@angular/core";
import { Messege } from "../../models/messege";
import { MessegesService } from "../../services/messeges.service";

@Component({
  selector: "app-customer-messeges",
  templateUrl: "./customer-messeges.component.html",
  styleUrls: ["./customer-messeges.component.css"]
})
export class CustomerMessegesComponent implements OnInit {
  pageHeader: string;
  pageDescription: string;
  pageIcon: string;
  messeges: Array<any>;
  constructor(private messegesService: MessegesService) {}

  ngOnInit() {
    this.pageHeader = "Messages";
    this.pageDescription =
      "Messages from clients from https://jsonplaceholder.typicode.com/comments with HttpClient";
    this.pageIcon = "far fa-id-card";

    this.messegesService.getMessages().subscribe((m: any[]) => {
      // console.log(m);
      this.messeges = m;
    });
  }
}

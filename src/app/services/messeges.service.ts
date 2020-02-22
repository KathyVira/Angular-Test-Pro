import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class MessegesService {
  constructor(private http: HttpClient) {}

  getMessages() {
    return this.http.get("https://jsonplaceholder.typicode.com/comments");
  }
}

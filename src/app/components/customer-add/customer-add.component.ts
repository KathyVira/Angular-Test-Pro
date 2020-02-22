import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';


@Component({
  selector: 'app-customer-add',
  templateUrl: './customer-add.component.html',
  styleUrls: ['./customer-add.component.css']
})
export class CustomerAddComponent implements OnInit {
  pageHeader: string;
  pageDescription: string;
  pageIcon: string;
  customers:Array<any>=[];

  id:string;
  name:string;
  email:string;
  address:string;

  constructor(private firestore: AngularFirestore) {

   }

  ngOnInit() {
    this.pageHeader = "Customers Add";
    this.pageDescription = "here you can add new customers";
    this.pageIcon = "fas fa-users";


      // this.firestore.collection('customers').add({name:'qqqq',email:'qqq@gmail.com',address:'gggtlv'});
      // this.firestore.collection('customers').doc('j77FgcFyAPu1PsFAycjD').update({name:'nnnn',email:'nnnn@gmail.com',address:'nnnntlv'});
      // this.firestore.collection('customers').doc('j77FgcFyAPu1PsFAycjD').delete();
      this.firestore.collection('customers').get().pipe(map(a=>{
        // console.log(a);
        a.forEach(customer =>{
          this.customers.push({
            id:customer.id,
            name:customer.data().name,
            email:customer.data().email,
            address:customer.data().address
          });

        })
      }))
      .subscribe(res=>{


        console.log(this.customers);
      });

   }


  test(test){
    console.log(test.key);
  }

  onsubmit(form){
    this.name=(form.value.name);
    this.email=(form.value.email);
    this.address=(form.value.address);
    this.firestore.collection('customers').add({name:this.name,email:this.email,address:this.address});
    
    console.log(this.name);
  }
}

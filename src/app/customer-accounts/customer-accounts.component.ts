import { Component } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {Customer} from "../model/Customer.model";

@Component({
  selector: 'app-cutomer-accounts',
  templateUrl: './customer-accounts.component.html',
  styleUrl: './customer-accounts.component.css'
})
export class CustomerAccountsComponent {
  customrtId! : string;
  customer! : Customer;
  constructor(private route : ActivatedRoute,private router:Router) {
    this.customer=this.router.getCurrentNavigation()?.extras.state as Customer;
  }

  ngOnInit(){
    this.customrtId=this.route.snapshot.params['id'];
  }
}

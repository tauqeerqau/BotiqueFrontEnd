import { Component } from '@angular/core';
import { Customer } from './../../models/customer';
import { CustomerService } from './../../services/customer.Service'

@Component({
    selector: 'customer-form',
    templateUrl: './customer.template.html',
    styleUrls:['./customer.style.css'],
    providers:[CustomerService]
})

export class CustomerFormComponent {
    public newCustomer;
    constructor(private _customerService: CustomerService) { }


    addCustomer(): void {
        console.log("Add Customer is Cliecked TS");
        this.newCustomer.DateOfBirth = Math.round(new Date(this.newCustomer.DateOfBirth).getTime()/1000);
        console.log(this.newCustomer);
        this._customerService.addCustomer(this.newCustomer).subscribe(res => {
            console.log(res);
        });
    }

    ngOnInit(): void {
        this.newCustomer = new Customer();
      }

}
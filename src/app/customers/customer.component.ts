import { Component } from '@angular/core';
import { Customer } from './../../models/customer';
import { CustomerService } from './../../services/customer.Service'
declare var $: any;
@Component({
    selector: 'customer-form',
    templateUrl: './customer.template.html',
    styleUrls: ['./customer.style.scss'],
    providers: [CustomerService]
})

export class CustomerFormComponent {
    public newCustomer;
    constructor(private _customerService: CustomerService) { }


    addCustomer(): void {
        console.log("Add Customer is Cliecked TS");
        this.newCustomer.DateOfBirth = Math.round(new Date(this.newCustomer.DateOfBirth).getTime() / 1000);
        $(".customerLoader").show();
        $("#addCustomerBtn").hide();
        this._customerService.addCustomer(this.newCustomer).subscribe(a => {
            console.log(a);
            if (a.code == 200) {

                $("#snackbar").html("Customer Added Successfully!");
                this.showToast();
                this.newCustomer = new Customer();
                $(".customerLoader").hide();
                $("#addCustomerBtn").show();
            } else {

                $("#snackbar").html("Error occurred!");
                this.showToast();
                $(".customerLoader").hide();
                $("#addCustomerBtn").show();

            }

        });
    }

    showToast() {
        // Get the snackbar DIV
        var x = document.getElementById("snackbar")

        // Add the "show" class to DIV
        x.className = "show";

        // After 3 seconds, remove the show class from DIV
        setTimeout(function () { x.className = x.className.replace("show", ""); }, 3000);
    }


    ngOnInit(): void {
        this.newCustomer = new Customer();
    }

}
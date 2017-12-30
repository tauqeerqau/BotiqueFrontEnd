import { Component } from '@angular/core';
import { Customer } from './../../models/customer';
import { Measurement } from './../../models/measurement';
import { CustomerService } from './../../services/customer.Service';
import { MeasurementService } from './../../services/measurement.Service';


@Component({
    selector: 'customerMeasurement-form',
    templateUrl: './CustomerMeasurementForm.template.html',
    styleUrls:['./CustomerMeasurementForm.style.css'],
    providers:[CustomerService,MeasurementService]
})

export class CustomerMeasurementForm {
    constructor(private _measurementService: MeasurementService,
         private _customerService: CustomerService) 
         {
    }
    
    public newMeasurement;
    public customers: Customer[];


    addMeasurement(): void {
        console.log("Add Measurement is Cliecked TS");
        this._measurementService.addMeasurement(this.newMeasurement).subscribe(res => {
            console.log(res);
        });
    }

    search(): void {
        this._customerService.getCustomersByContactNumber(this.newMeasurement.CustomerContactNumber).subscribe(res=> {
            if(res.code==200)
            {
                this.customers = res.data;
            }
            else
            {
                this.customers=null;
            }
            console.log("customer for referance is");
            console.log(this.customers);
        });
    }

    onChange(_id:string):void
    {
        console.log("CHange is Clicked"+_id);
        this.newMeasurement.CustomerId=_id;
    }

    ngOnInit(): void {
        this.newMeasurement = new Measurement();
      }

}
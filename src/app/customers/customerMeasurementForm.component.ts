import { Component } from '@angular/core';
import { Customer } from './../../models/customer';
import { Measurement } from './../../models/measurement';
import { CustomerService } from './../../services/customer.Service';
import { MeasurementService } from './../../services/measurement.Service';

declare var $:any;

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


    public ShalwarKameez:boolean = false;
    public Coat:boolean = false;
    public Sherwani:boolean = false
    public WaistCoat:boolean = false
    public Pant:boolean = false
    public Trouser:boolean = false

    addMeasurement(): void {
        console.log(this.newMeasurement);
        this._measurementService.addMeasurement(this.newMeasurement).subscribe(res => {
            console.log(res);
            if(res.code == 200){
                $("#snackbar").html("Values Saved!");
                this.showToast();
                this.newMeasurement = new Measurement();
                $("#selectType").hide();
                this.allFalse();
            }else{ 
                 $("#snackbar").html(res.message);
                this.showToast();
            }
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


    showToast() {
        // Get the snackbar DIV
        var x = document.getElementById("snackbar")
    
        // Add the "show" class to DIV
        x.className = "show";
    
        // After 3 seconds, remove the show class from DIV
        setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
    }

    onChange(_id:string):void
    {
        console.log("CHange is Clicked"+_id);
        this.newMeasurement.CustomerId=_id;
        $("#selectType").show();
    }


    allFalse(){

        this.Sherwani = false;
        this.WaistCoat=false;
        this.Coat = false;
        this.ShalwarKameez = false;
        this.Pant = false;
        this.Trouser  = false; 
     
    }

    getForms(elem){
        console.log(elem);

        if(elem == "Shalwar Kameez"){

            this.allFalse();
            this.ShalwarKameez = true;
          
        }else if(elem == "Coat"){
            this.allFalse();
            this.Coat = true;
        }else if(elem == "Sherwani"){
            this.allFalse();
            this.Sherwani = true;
        }else if(elem == "Waist Coat"){
            this.allFalse();
            this.WaistCoat = true;
        }else if(elem == "Pant"){
            this.allFalse();
            this.Pant = true;
        }else{
            this.allFalse();
            this.Trouser = true;
        }

    }

    ngOnInit(): void {
        this.newMeasurement = new Measurement();
      }

}
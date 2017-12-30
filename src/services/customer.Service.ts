import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import { Customer } from './../models/customer';
import { CustomerResponse } from './../models/customerResponse';

@Injectable()
export class CustomerService {

    private _addCustomerURL = 'http://localhost:3100/customers/addCustomer';
    private _getAllCustomersURL = 'http://localhost:3100/customers/getAllCustomers';
    private getCustomersByContactNumberURL = 'http://localhost:3100/customers/getCustomerAndReferancesByContactNumber?ContactNumber=';
    constructor(private _http: Http) { }


    public addCustomer(customer: Customer): Observable<Customer> {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        return this._http.post(this._addCustomerURL, customer, options)
            .map(this.extractData);
    }
    
    public getAllCustomers(): Observable<CustomerResponse> {
        return this._http.get(this._getAllCustomersURL)
         .map((response: Response) => <CustomerResponse> response.json())
         .do(data => console.log(JSON.stringify(data)));
     }

    public getCustomersByContactNumber(contactNumber:string): Observable<CustomerResponse> {
        return this._http.get(this.getCustomersByContactNumberURL+contactNumber)
         .map((response: Response) => <CustomerResponse> response.json())
         .do(data => console.log(JSON.stringify(data)));
     }

    private extractData(res: Response) {
        let body = res.json();
        console.log("Extract Data");
        console.log(body);
        return body.data || {};
    }

}
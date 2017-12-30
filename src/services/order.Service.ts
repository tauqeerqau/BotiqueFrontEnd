import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import { CustomerOrder } from './../models/customerOrder';
import { ProductType } from './../models/productType';
import {Server} from './../utilities/Server';

@Injectable()
export class OrderService {

    private _addCustomerOrder = 'orders/addCustomerOrder';
    private baseURL:String ;
    constructor(private _http: Http) {
        var server = new Server();
        this.baseURL = server.getServerURL();
     }

     public addCustomerOrder(customerOrder: CustomerOrder): Observable<CustomerOrder> {
        console.log("Add Customer Order is called in Service");
        console.log(customerOrder);
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        return this._http.post(this.baseURL + this._addCustomerOrder, customerOrder, options)
            .map(this.extractData);
    }

    public getProductTypes(){
        var productTypes=[];
        var productType = new ProductType;
        productType.Name = "Shalwar Kameez";
        productType.TypeId = 1; 
        productTypes.push(productType);
        productType = new ProductType(); 
        productType.Name = "Coat";
        productType.TypeId = 2; 
        productTypes.push(productType);
        productType = new ProductType(); 
        productType.Name = "Waist Coat";
        productType.TypeId = 3; 
        productTypes.push(productType);
        productType = new ProductType(); 
        productType.Name = "Sherwani";
        productType.TypeId = 4; 
        productTypes.push(productType);
        productType = new ProductType(); 
        productType.Name = "Pent";
        productType.TypeId = 5; 
        productTypes.push(productType);
        return productTypes;
    }

    private extractData(res: Response) {
        let body = res.json();
        console.log("Extract Data");
        console.log(body);
        return body.data || {};
    }

}
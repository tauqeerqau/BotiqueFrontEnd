import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import { Measurement } from './../models/measurement';
import {Server} from './../utilities/Server';

@Injectable()
export class MeasurementService {

    private _addMeasurmentURL = 'customers/addMeasurement';
    private baseURL:String ;
    constructor(private _http: Http) {
        var server = new Server();
        this.baseURL = server.getServerURL();
     }

    public addMeasurement(measurement: Measurement): Observable<Measurement> {
        console.log("Add Measurement is called in Service");
        console.log(measurement);
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        return this._http.post(this.baseURL + this._addMeasurmentURL, measurement, options)
            .map(this.extractData);
    }

    private extractData(res: Response) {
        let body = res.json();
        console.log("Extract Data");
        console.log(body);
        return body.data || {};
    }

}
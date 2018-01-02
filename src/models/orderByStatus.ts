import { Data } from "@angular/router/src/config";

    export interface CustomerId {
        _id: string;
        Address: string;
        FullName: string;
        Email: string;
        __v: number;
        ContactNumber: string;
    }

    export class OrderByStatusModel {
        _id: string;
        CustomerId: CustomerId;
        OrderStatus: number;
        OrderTotal: number;
        TryDate: any;
        DeliveryDate: any;
        AdvanceReceived: number;
        __v: number;
        OrderItemId: string[];
        OnCreationDateUTC:Number;
        OnUpdatetedUTC:Number;
    }



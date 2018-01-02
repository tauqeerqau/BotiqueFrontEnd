    export interface CustomerId {
        _id: string;
        Address: string;
        FullName: string;
        Email: string;
        __v: number;
        ContactNumber: string;
    }

    export interface OrderItemId {
        _id: string;
        OrderItemStatus: number;
        CustomerId: string;
        Quantity: number;
        Price: number;
        SpecialInstructions: string;
        ProductType: number;
        ProductName: string;
        __v: number;
        AssignedBy: string;
        AssignedTo: string;
    }

    export class OneOrderModel {
        _id: string;
        CustomerId: CustomerId;
        OrderStatus: number;
        OrderTotal: number;
        TryDate: any;
        DeliveryDate: any;
        AdvanceReceived: number;
        __v: number;
        OrderItemId: OrderItemId[];
    }



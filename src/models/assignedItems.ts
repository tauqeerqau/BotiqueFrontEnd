    export interface AssignedTo {
        _id: string;
        EmployeeRole: number;
        ContactNumber: string;
        FullName: string;
        Email: string;
        __v: number;
    }

    export class AssignedItemsModel {
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
        AssignedTo: AssignedTo;
    }


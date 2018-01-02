import {Customer} from './../models/customer';
import {OrderItem} from './../models/orderItem'
    
        export class CustomerOrder {
            _id: string;
            OrderStatus: number;
            TryDate: number;
            DeliveryDate: number;
            AdvanceReceived: number;
            OrderTotal: number;
            CustomerId: string;
            CustomerContactNumber: string;
            SpecialInstructions: string;
            OrderTakenBy:string;
            __v: number;
            OrderItemId: OrderItem[];
        }
    
    
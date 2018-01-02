import { Component } from '@angular/core';
import { CustomerOrder } from './../../models/customerOrder';
import { Customer } from './../../models/customer';
import { OrderItem } from './../../models/orderItem';
import { OrderService } from './../../services/order.Service'
import { CustomerService } from './../../services/customer.Service'
import { UserModel } from '../../models/user';
@Component({
    selector: 'order-form',
    templateUrl: './orderForm.template.html',
    styleUrls:['./orderForm.style.scss'],
    providers:[OrderService,CustomerService]
})

export class OrderFormComponent {
    public newOrder;
    public newOrderItem;
    public customer;
    public customerRefarances;
    public productTypes;
    public userObject:UserModel;
    constructor(private _orderService: OrderService,
        private _customerService: CustomerService
    ) { }


    addOrder(): void {
        console.log("Add Order is Clicked TS");
        this.userObject = JSON.parse(localStorage.getItem('user'));
    
        this.newOrder.OrderTakenBy = this.userObject._id;
        this.newOrder.DeliveryDate = Math.round(new Date(this.newOrder.DeliveryDate).getTime()/1000);
        this.newOrder.TryDate = Math.round(new Date(this.newOrder.TryDate).getTime()/1000);
        this._orderService.addCustomerOrder(this.newOrder).subscribe(res => {
            console.log(res);
        });
        this.newOrder = new CustomerOrder();
    }

    addOrderItem():void
    {
        console.log("Order Item");
        console.log(this.newOrderItem);
        if(this.newOrder.OrderItemId==undefined)
        {
            this.newOrder.OrderItemId=[];
        }
        this.newOrder.OrderItemId.push(this.newOrderItem);
        this.newOrderItem = new OrderItem();
        this.newOrder.OrderTotal=0;
        for(var i=0;i<this.newOrder.OrderItemId.length;i++)
        {
            this.newOrder.OrderTotal = this.newOrder.OrderTotal+(this.newOrder.OrderItemId[i].Quantity * this.newOrder.OrderItemId[i].Price);
        }
        console.log("Order Total is "+this.newOrder.OrderTotal);
    }

    search(): void {
        this._customerService.getCustomersByContactNumber(this.newOrder.CustomerContactNumber).subscribe(res=> {
            if(res.code==200)
            {
                this.customerRefarances = res.data;
            }
            else
            {
                this.customerRefarances=null;
            }
            console.log("customer for referance is");
            console.log(this.customerRefarances);
        });
    }

    onChange(_id:string):void
    {
        console.log("CHange is Clicked"+_id);
        this.newOrderItem.CustomerId=_id;
    }

    onChangeProductType(productType:number):void
    {
        console.log("CHange is Clicked"+productType);
        this.newOrderItem.ProductType=productType;
    }

    ngOnInit(): void {
        this.userObject = new UserModel();
        this.newOrder = new CustomerOrder();
        this.newOrderItem = new OrderItem();
        this.customer = new Customer();
        this.customerRefarances = [];
        this.productTypes = this._orderService.getProductTypes();
      }

}
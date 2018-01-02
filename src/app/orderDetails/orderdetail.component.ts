import { Component } from '@angular/core';
import { CustomerOrder } from './../../models/customerOrder';
import { Customer } from './../../models/customer';
import { OrderItem } from './../../models/orderItem';
import { OrderService } from './../../services/order.Service'
import { CustomerService } from './../../services/customer.Service'
import { OrderByStatusModel } from '../../models/orderByStatus';
import { OneOrderModel } from './../../models/oneOrder';
import {EmployeeService} from './../../services/employee.Service'
import { Employee } from '../../models/employee';
import { UserModel } from '../../models/user';

@Component({
    selector: 'order-detail',
    templateUrl: './orderdetail.template.html',
    styleUrls: ['./orderdetail.style.scss'],
    providers: [OrderService, CustomerService,EmployeeService]
})

export class OrderdetailComponent {
    public newOrder;
    public newOrderItem;
    public customer;
    public customerRefarances;
    public productTypes;
    public OneOrder : OneOrderModel;
    public orderFetched:boolean = false;
    public allEmployees:Employee[] = [] ;

    public ordersList: OrderByStatusModel[] = [];
    public userObject:UserModel;

    constructor(private _orderService: OrderService,public _employeeService:EmployeeService,
        private _customerService: CustomerService
    ) {
        this.userObject = JSON.parse(localStorage.getItem('user'));
     }


    getOrdersByStatus(elem) {
        console.log(elem);
        if (elem == 100) {

            this._orderService.getOrdersListByOrderStatus(elem).subscribe(a => {
                this.ordersList = [];
                this.ordersList = a.data;
                console.log(a);
                for (var i = 0; i < this.ordersList.length; i++) {
                    this.ordersList[i].DeliveryDate = new Date(this.ordersList[i].DeliveryDate * 1000);
                    this.ordersList[i].TryDate = new Date( this.ordersList[i].TryDate * 1000);
                }

            })

        } else if (elem == 200) {

            this._orderService.getOrdersListByOrderStatus(elem).subscribe(a => {
                this.ordersList = [];
                this.ordersList = a.data;
                console.log(a);
                for (var i = 0; i < this.ordersList.length; i++) {
                    this.ordersList[i].DeliveryDate = new Date(this.ordersList[i].DeliveryDate * 1000);
                    this.ordersList[i].TryDate = new Date( this.ordersList[i].TryDate * 1000);
                }
            })

        } else if (elem == 300) {

            this._orderService.getOrdersListByOrderStatus(elem).subscribe(a => {
                this.ordersList = [];
                this.ordersList = a.data;
                console.log(a);
                for (var i = 0; i < this.ordersList.length; i++) {
                    this.ordersList[i].DeliveryDate = new Date(this.ordersList[i].DeliveryDate * 1000);
                    this.ordersList[i].TryDate = new Date( this.ordersList[i].TryDate * 1000);
                }
            })

        } else {

            this._orderService.getOrdersListByOrderStatus(elem).subscribe(a => {
                this.ordersList = [];
                this.ordersList = a.data;
                console.log(a);
                for (var i = 0; i < this.ordersList.length; i++) {
                    this.ordersList[i].DeliveryDate = new Date(this.ordersList[i].DeliveryDate * 1000);
                    this.ordersList[i].TryDate = new Date( this.ordersList[i].TryDate * 1000);
                }
            })

        }
    }


    setOrderStatus(elem,order){ 

        this._orderService.editOrderStatus(elem,order._id).subscribe(a=>{
            if(a.code == 200){
                $("#snackbar").html("Order Edited Successfully!");
                this.showToast();
            }else{
                $("#snackbar").html("Errors!");
                this.showToast();
            }
        })
    }

    viewThisOrder(order){

         this._orderService.getDetailsForOrder(order._id).subscribe(a=>{

            this.OneOrder = a;
            this.orderFetched = true;
            this.OneOrder.DeliveryDate = new Date(this.OneOrder.DeliveryDate * 1000);
            this.OneOrder.TryDate = new Date( this.OneOrder.TryDate * 1000);

        }) 


        this._employeeService.getEmployees().subscribe(a=>{
            this.allEmployees = a.data;
      
        })

    }
   

    getSelectedUser(orderItem,elem){
     
        this._orderService.AssignThisOrderItemToUser(orderItem._id,this.userObject._id,elem).subscribe(a=>{
          
            if(a.code == 200){
                $("#snackbar").html("Assigned Successfully!");
                this.showToast();
            }else{
                $("#snackbar").html("Errors!");
                this.showToast();
            }
        })

    }

    showToast() {
        // Get the snackbar DIV
        var x = document.getElementById("snackbar")
    
        // Add the "show" class to DIV
        x.className = "show";
    
        // After 3 seconds, remove the show class from DIV
        setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
    }

    ngOnInit(): void {
        this.OneOrder = new OneOrderModel();
        this.newOrder = new CustomerOrder();
        this.newOrderItem = new OrderItem();
        this.customer = new Customer();
        this.customerRefarances = [];
        this.productTypes = this._orderService.getProductTypes();
    }

}
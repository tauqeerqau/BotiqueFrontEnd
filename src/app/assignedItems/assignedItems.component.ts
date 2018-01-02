import { Component, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeeService } from '../../services/employee.Service';
import { UserModel } from '../../models/user';
import { AssignedItemsModel } from '../../models/assignedItems';
import { OrderService} from '../../services/order.Service';
import { Employee } from '../../models/employee';
@Component({
  selector: 'assignedItems',
  styleUrls: [ './assignedItems.style.scss' ],
  templateUrl: './assignedItems.template.html',
  encapsulation: ViewEncapsulation.None,
  providers:[EmployeeService,OrderService],
  host: {
    class: 'assignedItems-page app'
  },
})
export class AssignedItemsComponent {
  router: Router;
  public userObject : UserModel;
  public AssignedItems : AssignedItemsModel[] = [] ;

  public allEmployees:Employee[] = [] ;

  constructor(router: Router, public _employeeService:EmployeeService,public _orderService:OrderService) {
    this.router = router;
    this.userObject = new UserModel();

    this._employeeService.getAssignedItems(this.userObject._id).subscribe(a=>{
      this.AssignedItems = a.data;

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

              this._employeeService.getAssignedItems(this.userObject._id).subscribe(a=>{
              
                this.AssignedItems = a.data;
          
              })

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

  searchResult(): void {
    this.router.navigate(['/app', 'extra', 'search']);
  }
}

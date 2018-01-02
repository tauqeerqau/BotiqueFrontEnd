import { Component, ViewEncapsulation } from '@angular/core';
import {EmployeeService} from '../../services/employee.Service';
import { Router } from '@angular/router';
import {UserModel} from '../../models/user';

@Component({
  selector: 'login',
  styleUrls: [ './login.style.scss' ],
  templateUrl: './login.template.html',
  encapsulation: ViewEncapsulation.None,
  providers:[EmployeeService],
  host: {
    class: 'login-page app'
  }
})
export class Login {
  public Email: string = "";
  public Password: string = "";
  public errorMessage:string = "";
  public router:Router;

  public userObject:UserModel;

  constructor(public _employee:EmployeeService, router: Router) {
    this.router = router;
  }

  EnterKey(event) {

    if (event.keyCode == 13) {

        this.login();
      

    }

  }

  login() {
     this.errorMessage = "";
    if (this.Email != "" && this.Email !== undefined && this.Password != "" && this.Password !== undefined) {
      this._employee.login(this.Email, this.Password).subscribe(response=>{
        console.log(response);
        if(response.code != 200){
          this.errorMessage = response.message;

        }
        else{
          this.errorMessage = response.message;
          localStorage.setItem('user', JSON.stringify(response.data));
          setTimeout(() => {
            this.router.navigate(["app/customers"]);
          }, 1000);
          //
        }
      });
    }
    else{
      this.errorMessage = "User Name or Password is Required";
    } 
  }

  ngOnInit(){
    this.userObject = new UserModel();
  }
  myFunction() {
    // Get the snackbar DIV
    var x = document.getElementById("snackbar")

    // Add the "show" class to DIV
    x.className = "show";

    // After 3 seconds, remove the show class from DIV
    setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
}

}

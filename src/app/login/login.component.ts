import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'login',
  styleUrls: [ './login.style.scss' ],
  templateUrl: './login.template.html',
  encapsulation: ViewEncapsulation.None,
  host: {
    class: 'login-page app'
  }
})
export class Login {
  public Email: string = "";
  public Password: string = "";
  public errorMessage:string = "";
  public router:Router;
  constructor(public _userService:UserService, router: Router) {
    this.router = router;
  }
  login() {
    this.errorMessage = "";
    if (this.Email != "" && this.Email !== undefined && this.Password != "" && this.Password !== undefined) {
      this._userService.login(this.Email, this.Password).subscribe(response=>{
        if(response.code != 200){
          this.errorMessage = response.message;
        }
        else{
          this.router.navigate(["/app/dashboard"]);
        }
      });
    }
    else{
      this.errorMessage = "User Name or Password is Required";
    }
  }
}

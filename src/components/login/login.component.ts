import { Component, OnInit, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';
import { Userinfo } from 'src/models/userinfo';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  //User Details
  username: string;
  password: string;
  validuser: boolean = false;

  userinfo: Userinfo;

  constructor(private router: Router,private renderer:Renderer2) { }

  ngOnInit() {
    this.userinfo = new Userinfo();
    this.renderer.setStyle(document.body, 'background-color', '#ce37f1');
  }
  checkevent(event) {
    if(this.username && this.password && event.keyCode == 13) {
      this.validateUser();
    }
  }
  validateUser() {
    console.log("in func vlidate")
    // API CALL TO VALIDATE THE USER WITH GIVEN CREDENTIALS
    // AND STORING THE USER INFO

    // this.userinfo = response;
    this.userinfo.id = 1;
    this.userinfo.firstname = "admin",
      this.userinfo.username = "admin",
      this.userinfo.lastactive = "2021-07-03",
      this.userinfo.role = "Product Admin"
    this.validuser = true;

    if (this.validuser) {
      sessionStorage.setItem("userdetails", JSON.stringify(this.userinfo));
      this.router.navigate(["./home"])
    }
  }
}

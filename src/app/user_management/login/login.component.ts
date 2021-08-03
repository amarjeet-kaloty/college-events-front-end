import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { LoginService } from './login.service';
import { User } from '../user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  faUser = faUser;
  user = new User();
  authentication?: boolean;
  msg = '';

  constructor(private _service: LoginService, private _router: Router) { }

  ngOnInit(): void {
  }

  loginUser(){
    this._service.loginUserFromRemote(this.user).subscribe(
      data => {
        console.log("success");
        this._router.navigate(['/dashboard']);
      },
      error => {
        console.log("incorrect credentials")
        this.authentication = true;
        this.msg = 'Incorrect credentials. Please try again.'
      }
    );
  }

  register(){
    this._router.navigate(['/register']);
  }

  forgetPassword(){
    this._router.navigate(['/forget-password']);
  }

}

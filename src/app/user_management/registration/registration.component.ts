import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../user';
import { RegistrationService } from './registration.service';


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  user = new User();
  authentication?: boolean;
  msg = '';

  constructor(private _service: RegistrationService, private _router: Router) { }

  ngOnInit(): void {
  }

  register(){
    this._service.registerFromRemote(this.user).subscribe(
      data => {
        console.log('Registration successful.'); 
        this._router.navigate(['']);
      },
      error => {
        console.log(this.user);
        console.log('Error has occured.');
        this.msg = 'Registration unsuccessful.';
        this.authentication = false;
      }
    );
  }

}

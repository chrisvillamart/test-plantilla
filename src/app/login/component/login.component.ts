import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  constructor(private router: Router) { }
username: string;
password: string;
loginInvalid: boolean;
  ngOnInit() {
    this.loginInvalid=false;
  }
  login() : void {
    if(this.username == 'admin' && this.password == 'admin'){
     this.router.navigate(["objects"]); 
    }else {
      //Se utiliza un validador de tipo booleano de acuerdo al resultado del login
      this.loginInvalid=true;
    }
  }
  
}
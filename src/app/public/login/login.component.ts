import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { SecurityService } from './../../services/security/security.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  LoginFrom: FormGroup;

  nombre;
  password;
  men = "";

  constructor(private fb: FormBuilder/*, private serviceSecurity: SecurityService, private routes: Router*/) { }
  ngOnInit(): void {
    this.LoginFrom = this.fb.group({
      nombre: [this.nombre, Validators.required],
      password: [this.password, Validators.required]
    });
  }
  onSubmit(): void {
    if(this.LoginFrom.value.nombre == "hola" && this.LoginFrom.value.password == "hola"){
      this.men = "ACCESS LOGIN";
    }else{
      this.men = "DENIED LOGIN";
    }
    /*this.serviceSecurity.login({ nombre: this.LoginFrom.value.nombre, password: this.LoginFrom.value.password }).subscribe(
      (res) => {
        if (typeof res.token !== 'undefined') {
          localStorage.setItem('token', res.token);
          this.routes.navigate(['cliente']);
        }
      }
    );*/
  }
}

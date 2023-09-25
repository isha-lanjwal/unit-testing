import { Component,OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  title = 'unit-testing';
  submitted: boolean = false;
  loginForm: FormGroup
  constructor(private router: Router){
    this.loginForm = new FormGroup({
      username: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required])
    })
  }

  ngOnInit(): void {
  }
  
  onSubmit(){
    this.submitted = true
    if(this.loginForm.valid){
      this.router.navigate(['/home'])
      this.submitted = false
    }
  }
}

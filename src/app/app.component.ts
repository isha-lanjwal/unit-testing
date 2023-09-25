import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators,FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'unit-testing';
  submitted: boolean = false;
  loginForm: FormGroup
  constructor(private fb: FormBuilder){
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
      console.log(this.loginForm.value);
      this.submitted = false
    }
  }
}

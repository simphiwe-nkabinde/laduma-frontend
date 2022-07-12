import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm!: FormGroup
  submitted: boolean = false;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      username: new FormControl('', {validators: [Validators.required]}),
      pwd: new FormControl('', {validators: [Validators.required]})
    })
  }

  controls(){
    return this.loginForm.controls;
  }

  formSub(){
    this.submitted = true;

    if(this.loginForm.invalid){
      return;
    }

    
  }

}

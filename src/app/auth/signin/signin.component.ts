import { Component, OnInit } from '@angular/core';
import { WebstorgeService } from 'src/app/shared/webstorge.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss'],
})
export class SigninComponent implements OnInit {

  is_forgetPasswordRequestAccepted?: boolean = false;
  constructor(public webstorage : WebstorgeService) {}

  ngOnInit() {}
  
forgotPasswordClicked: boolean = false;

  toggleForgotPassword() {
    this.forgotPasswordClicked = true;
  }
  
  showSignUpClicked: boolean = false;

  toggleView() {
    this.showSignUpClicked = true;
  }

  clearChanges() {
    this.forgotPasswordClicked = false;
    this.showSignUpClicked = false;
    this.is_forgetPasswordRequestAccepted = false
  }

  signup(){
     if(!this.showSignUpClicked){
      this.showSignUpClicked = true ;
      this.forgotPasswordClicked = false ;

     }else{
      this.showSignUpClicked = false ;
      this.forgotPasswordClicked = false ;
     }
  }

  forget(){
    this.forgotPasswordClicked = true
    this.showSignUpClicked = false
  }

  submit(){
    if(this.forgotPasswordClicked){
           this.is_forgetPasswordRequestAccepted = true
           this.showSignUpClicked = false
           this.forgotPasswordClicked = false
    }else{
      this.webstorage.Login("none")
    }
  }
}

import { Component,ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { AngularFireAuth } from '@angular/fire/auth';
/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {
  @ViewChild('username') user;
  @ViewChild('password') password;
  @ViewChild('nickname') nickname;

  constructor(public alertCtrl: AlertController, private fire: AngularFireAuth  ,public navCtrl: NavController, public navParams: NavParams) {
  }

  showAlert(message:string){
    const alert = this.alertCtrl.create({
     title: 'Info',
     subTitle: message,
     buttons: [{
       text: 'Login Now!',
       handler:(click)=>{
         console.log("Login now");
         this.returnToLogin();
       }
     }]


 }); 
 alert.present();
   }

   returnToLogin(){
     this.navCtrl.push(LoginPage);
   }

registerUser(){
  this.fire.auth.createUserWithEmailAndPassword(this.user.value, this.password.value)
  .then(data => {
     console.log('got data' ,data);
    this.showAlert("Successfully registered. Thank you for creating your account with us.");
    

  })
  .catch(error => {
  console.log('got an error: ', error);
  }); 
console.log("Would register with ", this.user.value, this.password.value,this.nickname.value);
}
 
}
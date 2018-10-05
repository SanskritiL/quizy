import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import {FormBuilder, FormArray, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'page-homecreatequiz',
  templateUrl: 'homecreatequiz.html'
})
export class HomecreatequizPage {
public form : FormGroup;
  constructor(public navCtrl: NavController,
     private _FB: FormBuilder,
     public alertCtrl: AlertController) {


      this.form = this._FB.group({
          name: ['',Validators.required],
          questions :this._FB.array([
            this.initQuestionsField()
          ])

      });

  }
initQuestionsField(): FormGroup{
 return this._FB.group({
  name : ['',Validators.required]
 });
}

addNewInputField():void {
  const control = <FormArray>this.form.controls.questions;
  control.push(this.initQuestionsField());
}
removeInputField(i :number):void{
  const control =<FormArray>this.form.controls.questions;
  control.removeAt(i);
}

showAlert(message:string){
  const alert = this.alertCtrl.create({
   title: 'Info',
   subTitle: message,
   buttons: ['OK']
   

}); 
alert.present();
 }







submitQuiz(){
  this.showAlert('It should submit all the datas to database');
}
showOptions(){
  this.showAlert("This shoud provide various options like: radio buttons, attach image etc (hopefully)");
}
manage(val : any):void{
  console.dir(val);
}
}


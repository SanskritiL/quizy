import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {FormBuilder, FormArray, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'page-homecreatequiz',
  templateUrl: 'homecreatequiz.html'
})
export class HomecreatequizPage {
public form : FormGroup;
  constructor(public navCtrl: NavController,
     private _FB: FormBuilder) {


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
manage(val : any):void{
  console.dir(val);
}
}


import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HomecreatequizPage } from '../homecreatequiz/homecreatequiz';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  homecreatequizPage = HomecreatequizPage;
  constructor(public navCtrl: NavController) {

  }

}

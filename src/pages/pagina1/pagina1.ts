import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Pagina2Page } from '../pagina2/pagina2';

@IonicPage()
@Component({
  selector: 'page-pagina1',
  templateUrl: 'pagina1.html',
})
export class Pagina1Page {

  constructor(
  	public navCtrl: NavController, 
  	public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Pagina1Page');
  }

  openPagina2(){ 
    this.navCtrl.push(Pagina2Page)
  }

}

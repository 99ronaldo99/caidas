import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Pagina2Page } from '../pagina2/pagina2';

/**
 * Generated class for the Pagina1Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

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

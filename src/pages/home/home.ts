import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DeviceMotion, DeviceMotionAccelerationData } from '@ionic-native/device-motion'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

	x:string;
	y:string;
	z:string;
	timeStamp:string;
	id:any;
  constructor(
  	public navCtrl: NavController,
  	public deviceMotion : DeviceMotion) {
  	this.x ="-";
  	this.y ="-";
  	this.z ="-";
  	this.timeStamp ="-"; 

  }
  start(){
  	try{
  		// var option: DeviceMotionAccelerationData=
  		// {
  		// 	frequency:200
  		// };

  	}catch(err)
  	{
  		alert("Error" + err);
  	}
  }
  stop(){

  }

}

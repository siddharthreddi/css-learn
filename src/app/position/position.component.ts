import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-position',
  templateUrl: './position.component.html',
  styleUrls: ['./position.component.scss']
})
export class PositionComponent implements OnInit {
sticky:boolean=false;
absolute:boolean=false;
stat:boolean=false;
real:boolean=false;
fixed:boolean=false;
  constructor() { }

  ngOnInit() {
  }
  static(){
this.stat=true;
this.sticky=false;
this.absolute=false;
this.real=false;
this.fixed=false;

}
fix(){
  this.stat=false;
  this.sticky=false;
  this.absolute=false;
  this.real=false;
  this.fixed=true;
}
ab(){
  this.stat=false;
  this.sticky=false;
  this.absolute=true;
  this.real=false;
  this.fixed=false;
}
st(){
  this.stat=false;
  this.sticky=true;
  this.absolute=false;
  this.real=false;
  this.fixed=false;
}
rel(){
  this.stat=false;
  this.sticky=false;
  this.absolute=false;
  this.real=true;
  this.fixed=false;
}
}

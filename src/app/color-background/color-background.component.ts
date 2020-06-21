import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-color-background',
  templateUrl: './color-background.component.html',
  styleUrls: ['./color-background.component.scss']
})
export class ColorBackgroundComponent implements OnInit {
color:boolean=false;
image:boolean=false;
repeat:boolean=false;
attachment:boolean=false;
position:boolean=false;
  constructor() { }

  ngOnInit() {
  }
col(){
this.color=true;
this.image=false;
this.repeat=false;
this.attachment=false;
this.position=false;
}
ima(){
  this.color=false;
  this.image=true;
  this.repeat=false;
  this.attachment=false;
  this.position=false;
}
rep(){
  this.color=false;
  this.image=false;
  this.repeat=true;
  this.attachment=false;
  this.position=false;
}
att(){
  this.color=false;
  this.image=false;
  this.repeat=false;
  this.attachment=true;
  this.position=false;
}
pos(){
  this.color=false;
  this.image=false;
  this.repeat=false;
  this.attachment=false;
  this.position=true;
}
}

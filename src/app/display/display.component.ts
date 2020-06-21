import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.scss']
})
export class DisplayComponent implements OnInit {
inline:boolean=false;
blockk:boolean=false;
none1:boolean=true;
none2:boolean=false;
hidden:boolean=true;
  constructor() { }

  ngOnInit() {
  }
in(){
this.inline=true;
this.blockk=false;
}
block(){
this.blockk=true;
this.inline=false;
}
hide(){
  this.inline=false;
  this.blockk=false;
  this.hidden=false;
  this.none2=true;
}
none(){
  this.inline=false;
  this.blockk=false;
  this.none1=false;
  
}
reset(){
  this.inline=false;
  this.blockk=false;
  this.none2=false;
  this.none1=true;
  this.hidden=true;
}
}

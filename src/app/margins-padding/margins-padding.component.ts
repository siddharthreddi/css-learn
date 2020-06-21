import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-margins-padding',
  templateUrl: './margins-padding.component.html',
  styleUrls: ['./margins-padding.component.scss']
})
export class MarginsPaddingComponent implements OnInit {

margins:boolean=false;
padding:boolean=false;
both:boolean=false;
not:boolean=false;
  constructor() { }

  ngOnInit() {
  }
bothf(){
this.margins=false;
this.padding=false;
this.not=false;
this.both=true;
}
notf(){
  this.margins=false;
  this.padding=false;
  this.not=true;
  this.both=false;
}
pad(){
  this.margins=false;
  this.padding=true;
  this.not=false;
  this.both=false;
}
margin(){
  this.margins=true;
  this.padding=false;
  this.not=false;
  this.both=false;
}
}

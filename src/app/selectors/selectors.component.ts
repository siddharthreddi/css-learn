import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-selectors',
  templateUrl: './selectors.component.html',
  styleUrls: ['./selectors.component.scss']
})
export class SelectorsComponent implements OnInit {
not:boolean=false;
both:boolean=false;
margins:boolean=false;
group:boolean=false;
padding:boolean=false;

  constructor() { }

  ngOnInit() {
  }
ele(){
this.not=true;
this.both=false;
this.margins=false;
this.group=false;
this.padding=false;
}
cl(){
  this.not=false;
  this.both=true;
  this.margins=false;
  this.group=false;
  this.padding=false;
}
i(){
  this.not=false;
  this.both=false;
  this.margins=false;
  this.group=false;
  this.padding=true;
}
uni(){
  this.not=false;
  this.both=false;
  this.margins=true;
  this.group=false;
  this.padding=false;
}
gr(){
  this.not=false;
  this.both=false;
  this.margins=false;
  this.group=true;
  this.padding=false;
}
}

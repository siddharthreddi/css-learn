import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-colors-rgb-hex-hsl',
  templateUrl: './colors-rgb-hex-hsl.component.html',
  styleUrls: ['./colors-rgb-hex-hsl.component.scss']
})
export class ColorsRgbHexHslComponent implements OnInit {
color:boolean=false;
rg:boolean=false;
he:boolean=false;
rga:boolean=false;
hs:boolean=false;
hsa:boolean=false;
  constructor() { }

  ngOnInit() {
  }
rgb(){
  this.color=false;
  this.he=false;
  this.hs=false;
  this.hsa=false;
  this.rg=true;
  this.rga=false;
}
hex(){
  this.color=false;
  this.he=true;
  this.hs=false;
  this.hsa=false;
  this.rg=false;
  this.rga=false;
}
rgba(){
  this.color=false;
  this.he=false;
  this.hs=false;
  this.hsa=false;
  this.rg=false;
  this.rga=true;
}
hsl(){
  this.color=false;
  this.he=false;
  this.hs=true;
  this.hsa=false;
  this.rg=false;
  this.rga=false;
}
hsla(){
  this.color=false;
  this.he=false;
  this.hs=false;
  this.hsa=true;
  this.rg=false;
  this.rga=false;
}
col(){
this.color=true;
this.he=false;
this.hs=false;
this.hsa=false;
this.rg=false;
this.rga=false;
}
}

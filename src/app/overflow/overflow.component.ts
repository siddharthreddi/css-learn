import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-overflow',
  templateUrl: './overflow.component.html',
  styleUrls: ['./overflow.component.scss']
})
export class OverflowComponent implements OnInit {

  visible:boolean=false;
  hidden:boolean=false;
  scroller:boolean=false;
  autoo:boolean=false;
    constructor() { }
  
    ngOnInit() {
    }
    hide(){
  this.visible=false;
  this.scroller=false;
  this.autoo=false;
  this.hidden=true;
  }
  vis(){
    this.hidden=false;
    this.scroller=false;
    this.visible=true;
    this.autoo=false;
  }
  scroll(){
    this.hidden=false;
    this.scroller=true;
    this.visible=false;
    this.autoo=false;
  }
  auto(){
    this.autoo=true;
    this.visible=false;
    this.scroller=false;
    this.hidden=false;
  }

}

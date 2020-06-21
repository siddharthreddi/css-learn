import { Component, OnInit } from '@angular/core';
export interface Food {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-shadow',
  templateUrl: './shadow.component.html',
  styleUrls: ['./shadow.component.scss']
})
export class ShadowComponent implements OnInit {
Text:boolean=false
box:boolean=false;
no:boolean=false;
one:boolean=false;
multi:boolean=false;
nob:boolean=false;
oneb:boolean=false;
multib:boolean=false;
  someMethod(value){
    if(value==="Text")
    {
this.Text=true;
this.box=false;
    }
    else if(value==="Box")
    {
      this.Text=false;
      this.box=true;
    }
    else{
      this.Text=false;
      this.box=false;
    }
  }
  constructor() { }

  ngOnInit() {
  
  }
  foods: Food[] = [
    {value: 'None', viewValue: 'None'},
    {value: 'Text', viewValue: 'Text'},
    {value: 'Box', viewValue: 'Box'}
  ];
  not(){
this.no=true;
this.multi=false;
this.one=false;
  }
  sha(){
    this.no=false;
    this.multi=false;
    this.one=true;
  }
  ms(){
    this.no=false;
    this.multi=true;
    this.one=false;
  }
  notb(){
    this.nob=true;
    this.multib=false;
    this.oneb=false;
      }
      shab(){
        this.nob=false;
        this.multib=false;
        this.oneb=true;
      }
      msb(){
        this.nob=false;
        this.multib=true;
        this.oneb=false;
      }
}

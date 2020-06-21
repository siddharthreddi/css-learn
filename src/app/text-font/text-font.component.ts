import { Component, OnInit } from '@angular/core';
export interface Food {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-text-font',
  templateUrl: './text-font.component.html',
  styleUrls: ['./text-font.component.scss']
})
export class TextFontComponent implements OnInit {
Text:boolean=false;
font:boolean=false;
  constructor() { }

  ngOnInit() {
  }
  foods: Food[] = [
    {value: 'None', viewValue: 'None'},
    {value: 'Text', viewValue: 'Text'},
    {value: 'Font', viewValue: 'Font'}
  ];
  someMethod(value){
    if(value==="Text")
    {
this.Text=true;
this.font=false;
    }
    else if(value==="Font")
    {
      this.Text=false;
      this.font=true;
    }
    else{
      this.Text=false;
      this.font=false;
    }
  }
}

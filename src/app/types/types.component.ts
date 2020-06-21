import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-types',
  templateUrl: './types.component.html',
  styleUrls: ['./types.component.scss']
})
export class TypesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  ex:boolean=false;
  in:boolean=false;
  line:boolean=false;
style:string="<style>";
external(){
this.ex=true;
}
internal(){
this.in=true;
}
inline(){
this.line=true;
}
}

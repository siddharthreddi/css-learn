import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss']
})
export class GridComponent implements OnInit {
auto:boolean=false;
row:boolean=false;
col:boolean=false;
rp:boolean=false;
cp:boolean=false;
rowlen:boolean=false;
mag:boolean=false;
res:boolean=false;
  constructor() { }

  ngOnInit() {
  }
btn1(){
  this.auto=true;
  this.col=false;
  this.row=false;
  this.cp=false;
  this.rp=false;
  this.rowlen=false;
  this.mag=false;
  this.res=false;
}
btn2(){
  this.auto=false;
  this.col=true;
  this.row=false;
  this.cp=false;
  this.rp=false;
  this.rowlen=false;
  this.mag=false;
  this.res=false;

}
btn3()
{
  this.auto=false;
  this.col=false;
  this.row=true;
  this.cp=false;
  this.rp=false;
  this.rowlen=false;
  this.mag=false;
  this.res=false;

}
btncp(){
  this.auto=false;
  this.col=false;
  this.row=false;
  this.cp=true;
  this.rp=false;
  this.rowlen=false;
  this.mag=false;
  this.res=false;

}
btnrp(){
  this.auto=false;
  this.col=false;
  this.row=false;
  this.cp=false;
  this.rp=true;
  this.rowlen=false;
  this.mag=false;
  this.res=false;

}
btnrowl(){
  this.auto=false;
  this.col=false;
  this.row=false;
  this.cp=false;
  this.rp=false;
  this.rowlen=true;
  this.res=false;

  this.mag=false;
}
btnmag(){
  this.auto=false;
  this.col=false;
  this.row=false;
  this.cp=false;
  this.rp=false;
  this.rowlen=false;
  this.mag=true;
  this.res=false;

}
btnres(){
  this.auto=false;
  this.col=false;
  this.row=false;
  this.cp=false;
  this.rp=false;
  this.rowlen=false;
  this.mag=false;
  this.res=true;
}
}

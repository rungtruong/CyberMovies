import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';


@Component({
  selector: 'app-ghe',
  templateUrl: './ghe.component.html',
  styleUrls: ['./ghe.component.scss']
})
export class GheComponent implements OnInit {

  @Input() ghe:any = {};
  @Output() eventDatGhe = new EventEmitter();
  dangDat:boolean = false; 
  constructor() {

   }
   datGhe(){
     this.dangDat = !this.dangDat;
     let objectGheDangDat = {MaGhe:this.ghe.MaGhe,TenGhe:this.ghe.TenGhe,Gia:this.ghe.GiaVe,DangDat:this.dangDat};
     this.eventDatGhe.emit(objectGheDangDat); 
   }
  ngOnInit() {
  }

}

import { Component, OnInit, Input, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.css']
})
export class BreadcrumbComponent implements OnInit, AfterViewInit {
  @Input() data: any;
  homeUrl = "";
  version: string;
  constructor() { }

  ngOnInit() {
    // if(this.configService.getVersion()){
    //   this.version = this.configService.getVersion();
    // }else{
    //   this.http.sendToServer("GET", SYSTEMCONST.API.GET_VERSION,{},null,data=>{
    //     this.version = data.version;
    //     this.configService.setVersion(this.version);
    //   })
    // }
  }
  ngAfterViewInit() {
  }

}

import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Subscription} from 'rxjs';
import Swal from 'sweetalert2';
import { MovieService } from 'src/app/_core/services/movie.service';
import { TicketService } from 'src/app/_core/services/ticket.service';

@Component({
  selector: 'app-book-ticket',
  templateUrl: './book-ticket.component.html',
  styleUrls: ['./book-ticket.component.scss']
})
export class BookTicketComponent implements OnInit {
  lichchieu: any = {DanhSachGhe:[]};
  TenRap = "";
  private MaLichChieu:number=0;
  private subParam : Subscription;
  private subService : Subscription;
  private DanhSachGhe:any[] = [];
  ngayChieuGioChieu = new Date();
  phim:any ={};
  constructor( private activateRouter: ActivatedRoute, private ticketService: TicketService,private movieService:MovieService) { }

  ngOnInit() {
    this.subParam = this.activateRouter.queryParams.subscribe((param) => {
      this.MaLichChieu = param.MaLichChieu;
      this.TenRap = param.TenRap;
      this.ngayChieuGioChieu = param.NgayChieuGioChieu;
      this.LayChiTietPhongVe(this.MaLichChieu);
      this.LayThongTinPhim(param.MaPhim)
    })
  }
  
  LayThongTinPhim (maPhim) {
    this.movieService.chiTietPhim(maPhim).subscribe(phim=>{
      this.phim = phim;
    })
  }
  LayChiTietPhongVe(maLichChieu)
  {

    this.subService =  this.ticketService.layDanhSachLichChieu(maLichChieu).subscribe(result=>{
      this.lichchieu = result;
      console.log(this.lichchieu)
      this.DanhSachGhe = result.DanhSachGhe;
     
      console.log(this.DanhSachGhe)
    })
  }
  DanhSachGheDangDat = [];
  datGhe(gheDangDat:any){
    if(gheDangDat.DangDat)
    {
      this.DanhSachGheDangDat.push(gheDangDat);
    }
    else 
    {
        let indexGheHuy = this.DanhSachGheDangDat.findIndex(ghe => ghe.MaGhe == gheDangDat.MaGhe);
        this.DanhSachGheDangDat.splice(indexGheHuy,1);
    }
    this.tinhTongTien();
  }
  tongTien:number = 0;
  tinhTongTien(){
    let tongTien = 0;
    this.DanhSachGheDangDat.map((ghe,index)=>{
    
      tongTien += ghe.Gia;
    });
    this.tongTien = tongTien;
  }
  datVe()
  {
    if(this.DanhSachGheDangDat.length==0)
    {
      Swal.fire("Thông báo","Bạn chưa chọn ghế","warning");
      return;
    }

    if(!localStorage.getItem("userLogin"))
    {
      Swal.fire("Thông báo","Vui lòng đăng nhập trước khi đặt vé","warning");
      return;
    }
    let userLogin = JSON.parse(localStorage.getItem("userLogin"));
    let ve ={ 
      MaLichChieu :this.MaLichChieu,
      TaiKhoanNguoiDung:userLogin.TaiKhoan,
      DanhSachVe:this.DanhSachGheDangDat
    
      } 
    this.ticketService.datVe(ve).subscribe(result =>{
      if(typeof result === "string")
      {
        Swal.fire("Thông báo","Chúc mừng bạn đặt vé thành công","success").then(()=>{
          location.reload();
        });
        
      }
    })
    
  }
}

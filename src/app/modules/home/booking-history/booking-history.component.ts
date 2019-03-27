import { Component, OnInit } from '@angular/core';
import { TicketService } from 'src/app/_core/services/ticket.service';

@Component({
  selector: 'app-booking-history',
  templateUrl: './booking-history.component.html',
  styleUrls: ['./booking-history.component.scss']
})
export class BookingHistoryComponent implements OnInit {

  constructor(private ticketService:TicketService) { }
  lichSuDatVe:any = [];
  ngOnInit() {
    if(localStorage.getItem('userLogin'))
    {
      let userLogin = JSON.parse(localStorage.getItem('userLogin'));
        this.ticketService.lichSuDatVe(userLogin.TaiKhoan).subscribe((data)=>{
          console.log(data)
          this.lichSuDatVe = data.DanhSachVeDaDat;
        });
    }
  }

}

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TicketService {
  constructor(private http: HttpClient) { }


  public layDanhSachVeDaDat(): Observable<any> {
    let response: any = this.http.delete(`http://svcy2.myclass.vn/api/QuanLyDatVe/XemLichSuDatVe?TaiKhoan`);
    return response;
  }
}


import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  constructor(private http: HttpClient) { }


  public layDanhSachPhim(): Observable<any[]> {
    let response: any = this.http.get('http://sv2.myclass.vn/api/QuanLyPhim/LayDanhSachPhim?MaNhom=GP06');
    return response;
  }

  public layThongTinPhim(maPhim: number): Observable<any[]> {
    let response: any = this.http.get('http://sv2.myclass.vn/api/QuanLyPhim/LayChiTietPhim?MaPhim=' + maPhim);
    return response;
  }
}


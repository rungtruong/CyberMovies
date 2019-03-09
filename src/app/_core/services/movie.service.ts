import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  constructor(private http: HttpClient) { }


  public layDanhSachPhim(): Observable<any[]> {
    let response: any = this.http.get('http://svcy2.myclass.vn/api/QuanLyPhim/LayDanhSachPhim?MaNhom=GP06');
    return response;
  }

  public layThongTinPhim(maPhim: number): Observable<any[]> {
    let response: any = this.http.get('http://svcy2.myclass.vn/api/QuanLyPhim/LayChiTietPhim?MaPhim=' + maPhim);
    return response;
  }

  // public themPhim():Observable<any>{
  //   const linkApi = `http://sv2.myclass.vn/api/QuanLyNguoiDung/ThemNguoiDung`;
  //   const header: HttpHeaders = new HttpHeaders(); //Cho biet dinh dang du lieu truyen di
  //   header.append('Content-Type', 'application/json;charset=UTF-8');
  //   const observable = this.http.post(linkApi, nguoiDung, { headers: header });
  //   return observable;
  // }
}


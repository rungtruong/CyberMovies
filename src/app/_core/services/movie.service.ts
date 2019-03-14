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

  public chiTietPhim(id: number): Observable<any[]> {
  
    let response: any = this.http.get(`http://svcy2.myclass.vn/api/QuanLyPhim/LayChiTietPhim?MaPhim=${id}`);
    return response;
  }

  public themPhim(data): Observable<any> {
    const linkApi = `http://svcy2.myclass.vn/api/QuanLyPhim/ThemPhimMoi`;
    const header: HttpHeaders = new HttpHeaders(); //Cho biet dinh dang du lieu truyen di
    header.append('Content-Type', 'application/json;charset=UTF-8');
    const observable = this.http.post(linkApi, data, { headers: header });
    return observable;
    
  }
  public uploadFileAnhPhim(data): Observable<any> {
    const linkApi = `http://svcy2.myclass.vn/api/QuanLyPhim/UploadFile`;
    const header: HttpHeaders = new HttpHeaders(); //Cho biet dinh dang du lieu truyen di
    header.append('Content-Type', 'application/json;charset=UTF-8');
    const observable = this.http.post(linkApi, data, { headers: header });
    return observable;
  }
  public suaPhim(data): Observable<any> {
    const linkApi = `http://svcy2.myclass.vn/api/QuanLyPhim/CapNhatPhim`;
    const header: HttpHeaders = new HttpHeaders(); //Cho biet dinh dang du lieu truyen di
    header.append('Content-Type', 'application/json;charset=UTF-8');
    const observable = this.http.post(linkApi, data, { headers: header });
    return observable;
  }
  public xoaPhim(id: number): Observable<any> {
    let response: any = this.http.delete(`http://svcy2.myclass.vn/api/QuanLyPhim/XoaPhim?MaPhim=${id}`);
    return response;
  }


}


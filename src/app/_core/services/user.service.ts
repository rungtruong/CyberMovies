import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  public layDanhSachUser(): Observable<any[]> {
    let response: any = this.http.get('http://svcy2.myclass.vn/api/QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=GP06');
    return response;
  }
  public themUser(data): Observable<any> {
    const linkApi = `http://svcy2.myclass.vn/api/QuanLyNguoiDung/ThemNguoiDung`;
    const header: HttpHeaders = new HttpHeaders(); //Cho biet dinh dang du lieu truyen di
    header.append('Content-Type', 'application/json;charset=UTF-8');
    const observable = this.http.post(linkApi, data, { headers: header });
    return observable;

  }
  public capNhatUser(data): Observable<any> {
    const linkApi = `http://svcy2.myclass.vn/api/QuanLyNguoiDung/CapNhatThongTin`;
    const header: HttpHeaders = new HttpHeaders(); //Cho biet dinh dang du lieu truyen di
    header.append('Content-Type', 'application/json;charset=UTF-8');
    const observable = this.http.post(linkApi, data, { headers: header });
    return observable;

  }
  public xoaUser(taikhoan: string): Observable<any> {
    let response: any = this.http.delete(`http://svcy2.myclass.vn/api/QuanLyNguoiDung/XoaNguoiDung?TaiKhoan=${taikhoan}`);
    return response;
  }

  public dangNhap(taikhoan, matkhau): Observable<any> {
    const linkApi = `http://svcy2.myclass.vn/api/QuanLyNguoiDung/DangNhap?taikhoan=${taikhoan}&matkhau=${matkhau}`;
    const header: HttpHeaders = new HttpHeaders(); //Cho biet dinh dang du lieu truyen di
    header.append('Content-Type', 'application/json;charset=UTF-8');
    const observable = this.http.post(linkApi, {}, { headers: header });
    return observable;

  }
  public dangKy(nguoiDung: User): Observable<any> {
    const linkApi = `http://svcy2.myclass.vn/api/QuanLyNguoiDung/ThemNguoiDung`;
    const header: HttpHeaders = new HttpHeaders(); //Cho biet dinh dang du lieu truyen di
    header.append('Content-Type', 'application/json;charset=UTF-8');
    const observable = this.http.post(linkApi, nguoiDung, { headers: header });
    return observable;
  }

}

interface MovieInterface {
    MaPhim: string;
    TenPhim: string;
    Trailer: string;
    HinhAnh: string;
    MoTa: string;
    MaNhom: string;
    NgayKhoiChieu: string;
    DanhGia: string;
    // Quantity?: number;
}

export class Movie implements MovieInterface {
    MaPhim: string;
    TenPhim: string;
    Trailer: string;
    HinhAnh: string;
    MoTa: string;
    MaNhom: string;
    NgayKhoiChieu: string;
    DanhGia: string;
    Quantity?: number;
    constructor(maphim: string, tenphim: string, trailer: string, hinhanh: string, mota: string, manhom: string, ngaychieu: string, danhgia: string) {
        this.MaPhim = maphim;
        this.TenPhim = tenphim;
        this.Trailer = trailer;
        this.HinhAnh = hinhanh;
        this.MoTa = mota;
        this.MaNhom = manhom;
        this.NgayKhoiChieu = ngaychieu;
        this.DanhGia = danhgia;
        
    }
    // Neu co phuong thuc thi ghi o day
    /*example(){

    }*/

}
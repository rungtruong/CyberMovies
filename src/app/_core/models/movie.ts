export class Movie {
    MaPhim: number;
    TenPhim: string;
    Trailer: string;
    HinhAnh: string;
    MoTa: string;
    MaNhom: string;
    NgayKhoiChieu: string;
    DanhGia: number;
    Quantity?: number;
    constructor(maphim: number, tenphim: string, trailer: string, hinhanh: string, mota: string, manhom: string, ngaychieu: string, danhgia: number) {
        this.MaPhim = maphim;
        this.TenPhim = tenphim;
        this.Trailer = trailer;
        this.HinhAnh = hinhanh;
        this.MoTa = mota;
        this.MaNhom = manhom;
        this.NgayKhoiChieu = ngaychieu;
        this.DanhGia = danhgia;        
    }
}
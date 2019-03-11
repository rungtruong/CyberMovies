export class User {
    public TaiKhoan: string;
    public HoTen: string;
    public MatKhau: string;
    public SoDT: string;
    public Email: string;
    public NhapLaiMK: string;
    public MaNhom: string;
    public MaLoaiNguoiDung: string;
    constructor(taiKhoan: string, hoTen: string, matKhau: string, soDT: string, email: string) {
        this.TaiKhoan = taiKhoan;
        this.HoTen = hoTen;
        this.MatKhau = matKhau;
        this.SoDT = soDT;
        this.Email = email;
        this.MaNhom = 'GP06';
        this.MaLoaiNguoiDung = 'KhachHang';

    }
}
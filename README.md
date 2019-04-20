# CyberMovies
Chức năng:
- Trang chủ: Rừng
- Trang quản lý: Rừng
- Chi tiết phim: Diệp, Rừng
- Đặt vé: Diệp
- Trang lịch sử đặt vé: Diệp

Chi tiết:
- Trang chủ: Có chức năng:
	+ Đăng nhập, đăng xuất, khi đăng nhập tài khoản thuộc nhóm có loại người dùng là "QuanTri" thì sẽ được phép truy cập đến trang quản lý phim
	bằng cách click vào tên tài khoản, dropdown menu sẽ hiện ra(Gồm Lịch sử đặt vé, Quản lý web phim, đăng xuất).
	+ Trên menu navbar sẽ có route link tới Danh sách tất cả phim, Tin tức( dropdown bao gồm Phim 24h, Đánh giá và Khuyến mãi).
		-Danh Sách Phim: Show all phim get từ API.
		-Tin tức: Binding với nội dung cố định.
		-Liên hệ: Binding form liên hệ.
	+ Carousel sử dụng mảng đối tượng tự tạo, play trailer trông qua url youtube trong mảng đối tượng(Component Play Movie Trailer được kế thừa cho toàn project).
	+ Navtab tìm kiếm phim nhanh, get danh sách phim từ api, lọc và cho người dùng mua vé ngay khi click vào button "MUA VÉ NGAY" - route link và truyền param tới trang đặt vé.
	+ Tiếp theo là movielist, bao gồm phim đang chiếu và phim sắp chiếu, những phim không sao đc xếp vào phim sắp chiếu, còn lại đc xếp vào phim đang chiếu, phần này sử dụng thư tiện Owl Carousel cho angular để trong component riêng, bao gồm các thông tin liên quan đến phim, khi click vào icon play trong 1 item sẽ hiện thị modal play trailer thông qua url tuyền vào. Khi click vào buttton "MUA VÉ" sẽ route link tới trang chi tiết phim.
	+ Phần tin tức sẽ gồm 3 button route link tới 3 component, nội dung binding lên là cố định. Phần đánh giá ở đánh giá đầu tiên có route link tới component review chưa iframe link tới 123phim để làm ví dụ.
- Chi tiết phim: chứa các thông tin về phim, với phim đang chiếu sẽ có thêm button "MUA VÉ" để trở về tab Lịch Chiếu, click vào "Ngày chiếu - Suất chiếu" để tới trang đặ vé chọn ghế. Các tab còn lại là thôn tin phim chứa nội dung của phim, tab đánh giá chứa iframe link tới 123phim làm ví dụ.
- Trang đặt vé: Người dùng sẽ chọn ghế xem phim thông qua danh sách ghế hiện trên màn hình, các màu tương ứng với tình trạng ghế, thông tin đặt vé hiện lên bên phải màn hình, khi người dùng bấm nút đặt vé, nếu chưa đăng nhập thì sẽ hiện thông báo yêu cầu đăng nhập, nếu chưa chon ghế sẽ thông báo yêu cầu chọn ghế, đặt vé thành công thông báo đặt vé thành công và binding lại màu ghế đã đc đặt.
- Trang lịch sử đặt vé show lịch sử của người dùng đã đặt vé và ngày đặt.
- Trang quản lý web phim:
	+ Dành cho tài khoản quản trị, nếu không phải tài khoản quản trị sẽ không thể vào trang này.
	+ Có 2 mục là quản lý user và quản lý phim.
	+ Quản lý user: Có chức năng thêm mới, sửa, xóa và show các tài khoản user, không thể xóa các tài khoản là quản trị.
	+ Quản lý phim: Có Có chức năng thêm mới, sửa, xóa và show các phim hiện có, khi tạo phim, phần đánh giá phim là random, mặc định nhóm GP06.
	+ Khi đăng xuất sẽ trở về trang chủ.
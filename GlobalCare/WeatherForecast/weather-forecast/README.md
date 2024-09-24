# Xây dựng Ứng dụng Dự báo Thời tiết

## Mục tiêu:

Tạo một ứng dụng dự báo thời tiết đơn giản cho phép người dùng tìm kiếm điều kiện thời tiết hiện tại ở bất kỳ thành phố nào. Ứng dụng này nên lấy dữ liệu từ một API thời tiết và hiển thị nó theo một định dạng thân thiện với người dùng.

## Yêu cầu:

### Thiết lập và môi trường:
- Tạo một ứng dụng React mới bằng cách sử dụng Create React App.
- Sử dụng các thành phần chức năng và các hook của React (useState, useEffect).
### Các thành phần:
- Thành phần App: Thành phần chính chứa cấu trúc của ứng dụng.
- Thành phần SearchBar: Một thành phần với trường nhập liệu nơi người dùng có thể nhập tên của một thành phố và một nút để bắt đầu tìm kiếm.
- Thành phần WeatherInfo: Một thành phần hiển thị thông tin thời tiết cho thành phố được tìm kiếm.
- Thành phần Error: Một thành phần hiển thị thông báo lỗi nếu không tìm thấy thành phố hoặc có bất kỳ vấn đề nào khác với yêu cầu API.
### Quản lý trạng thái:
Sử dụng hook useState để quản lý trạng thái của nhập liệu tìm kiếm, dữ liệu thời tiết và thông báo lỗi.
### Tích hợp API:
- Sử dụng API của OpenWeatherMap (hoặc bất kỳ API thời tiết miễn phí nào khác) để lấy dữ liệu thời tiết.
- Đảm bảo xử lý trạng thái đang tải và lỗi một cách thích hợp.
### Giao diện:
Áp dụng CSS cơ bản để làm cho ứng dụng trông gọn gàng. Bạn có thể sử dụng CSS modules hoặc styled-components nếu thích.


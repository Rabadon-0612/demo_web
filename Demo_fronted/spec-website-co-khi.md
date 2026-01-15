
# WEBSITE DOANH NGHIỆP CƠ KHÍ – CÔNG NGHIỆP
## Tài liệu cấu trúc – UI/UX – Kỹ thuật (Spec cho lập trình)

---

## B. CẤU TRÚC WEBSITE (SITEMAP & NAVIGATION)

**Tham chiếu sitemap & navigation:**  
https://martech.com.vn/vi/

### Navigation chính (Top menu)
1. Trang chủ
2. Giới thiệu
3. Dịch vụ & Giải pháp
   - Cơ khí chế tạo
   - Hệ thống lọc gió
   - Lò hơi – lò sấy
   - Bảo trì – sửa chữa nhà xưởng
4. Sản phẩm (nếu có)
5. Dự án
6. Tuyển dụng
7. Tin tức
8. Liên hệ

### Navigation phụ (Utility)
- Chuyển ngôn ngữ (VI / EN)
- Hotline – Zalo (icon cố định)
- CTA **“Liên hệ nhanh”**

---

## C. UI / UX ĐỊNH HƯỚNG

### 1. Phong cách tổng thể
- Clean – chuyên nghiệp – kỹ thuật
- Không màu mè, không hiệu ứng dư thừa
- Ưu tiên trải nghiệm doanh nghiệp B2B

### 2. Màu sắc
- Đỏ chủ đạo (nhận diện thương hiệu)
- Trắng làm nền chính
- Xám / đen nhạt cho text kỹ thuật

**Tỷ lệ màu**
- Trắng: ~65%
- Đỏ: ~20%
- Trung tính khác: ~15%

### 3. Typography
- Font sans-serif hiện đại
- Độ tương phản cao, dễ đọc
- Heading mạnh, body text gọn

### 4. Responsive & Performance
- Mobile-first
- CTA (Gọi – Zalo) luôn hiển thị trên mobile
- Tối ưu ảnh, lazy loading

---

## D. HIỆU ỨNG SẢN PHẨM (SECTION TRỌNG TÂM)

### Mô tả tổng quan
Hiệu ứng slider sản phẩm theo phong cách hiện đại, tập trung vào trải nghiệm B2B kỹ thuật.

### Layout
- Slider toàn chiều ngang (full-width)
- Bố cục:
  - **Bên trái:** Hình ảnh / mô hình 3D / render sản phẩm
  - **Bên phải:**
    - Tên sản phẩm
    - Mô tả ngắn
    - Nút **“CHI TIẾT”**

### Hiệu ứng chuyển cảnh
- Sản phẩm trượt mượt theo chiều ngang
- Text fade + slide nhẹ
- Không giật, không zoom mạnh

### Điều hướng
- Arrow trái / phải
- Dot indicator phía dưới
- Auto-slide (tùy chọn, ưu tiên thao tác tay)

### Công nghệ gợi ý
- GSAP + ScrollTrigger
- SwiperJS (custom animation)
- Three.js (nâng cấp 3D về sau)
- React.js
- RESTful API + Webhook
- API mã hóa & bảo mật dữ liệu

> Đây là điểm nhấn UI quan trọng nhất của trang chủ, thể hiện đẳng cấp kỹ thuật.

---

## E. TÍNH NĂNG CHÍNH

### 1. Liên hệ & chuyển đổi
- Form liên hệ / báo giá (đơn giản)
- Click-to-call
- Zalo chat
- Email nhanh

### 2. Quản lý nội dung
- CMS custom / headless
- Phân quyền quản trị
- Dễ cập nhật:
  - Dịch vụ
  - Dự án
  - Tuyển dụng
  - Tin tức

### 3. SEO & kỹ thuật
- SEO on-page cơ bản
- URL thân thiện
- Schema doanh nghiệp
- SSL
- Tối ưu Core Web Vitals

### 4. Kết nối
- Mạng xã hội
- Google Maps
- Analytics

---

## F. LỘ TRÌNH TRIỂN KHAI

### Phase 1 – Chuẩn bị
- Thu thập yêu cầu chi tiết
- Chốt sitemap & nội dung khung

### Phase 2 – Thiết kế
- Wireframe (UX)
- UI Design (tone đỏ – trắng)
- Duyệt hiệu ứng slider sản phẩm

### Phase 3 – Lập trình
- Frontend animation
- Backend CMS
- Tối ưu hiệu năng

### Phase 4 – Kiểm thử & bàn giao
- Test đa thiết bị
- Training quản trị
- Go-live

---

## G. GỢI Ý BƯỚC TIẾP THEO

Tôi có thể tiếp tục hỗ trợ ở các bước:
1. Vẽ wireframe trang chủ + section slider sản phẩm
2. Viết content mẫu cho 1 trang dịch vụ + 1 sản phẩm
3. Lập spec kỹ thuật chi tiết cho dev (animation, tech stack)
4. Đề xuất AI Agents tích hợp giai đoạn 2

**Lựa chọn tiếp theo:** Wireframe / UI chi tiết / Spec kỹ thuật

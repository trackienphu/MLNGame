# Mảnh Ghép Minh Triết

Game Sliding Puzzle tĩnh xây dựng bằng Next.js, xoay quanh hành trình khám phá 15 triết gia.

## Tính năng

- 5 cấp độ, mỗi cấp có 3 màn chơi; độ khó tăng từ lưới `3x3` đến `5x5`.
- Xáo mảnh theo các bước dịch hợp lệ nên mọi bàn chơi đều giải được.
- Chấm từ 1 đến 3 sao theo thời gian hoàn thành và lưu kỷ lục bằng `localStorage`.
- Mở khóa tuần tự; hoàn thành mỗi chân dung sẽ hiển thị câu chuyện ngắn về triết gia.
- Bộ 15 chân dung WebP cục bộ, giao diện responsive và không cần backend.

## Chạy dự án

```bash
npm install
npm run dev
```

Mở [http://localhost:3000](http://localhost:3000).

## Xuất bản static

```bash
npm run lint
npm run build
```

Cấu hình `output: "export"` tạo website tĩnh trong thư mục `out/`, có thể triển khai lên bất kỳ dịch vụ host file tĩnh nào.

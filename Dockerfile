# 1. Dùng Node.js v20 Alpine
FROM node:20-alpine

# 2. Tạo thư mục app trong container
WORKDIR /app

# 3. Copy package.json và lock file trước để tận dụng cache
COPY package*.json ./

# 4. Cài đặt dependency
RUN npm install --save-dev ts-node-dev

# 5. Copy toàn bộ project (bao gồm src, tsconfig.json, .env v.v.)
COPY . .

# 6. Build TypeScript (sau khi copy src)
RUN npx tsc

# 7. Mở cổng ứng dụng (tuỳ chỉnh nếu bạn dùng port khác)
EXPOSE 3000

# 8. Chạy app từ thư mục dist
CMD ["npx", "ts-node-dev", "--respawn", "src/index.ts"]
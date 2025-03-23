# Gunakan image Node.js versi terbaru
FROM node:20

# Set working directory
WORKDIR /app

# Copy package.json dan package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install --omit=dev

# Copy semua file ke dalam container
COPY . .

# Expose port aplikasi (sesuai dengan port yang digunakan di Express)
EXPOSE 3000

# Perintah untuk menjalankan aplikasi
CMD ["node", "app.js"]
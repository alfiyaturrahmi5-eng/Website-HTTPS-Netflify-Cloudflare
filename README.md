# 🌐 Penerapan Implementasi Website Sederhana dengan HTTPS Menggunakan Netlify dan Cloudflare SSL

## 📖 Deskripsi Proyek
Proyek ini dibuat sebagai bagian dari tugas mata kuliah **Cloud Computing and Security**.  
Tujuannya adalah untuk memahami proses **deployment website di platform cloud gratis (Netlify)** serta penerapan **keamanan HTTPS menggunakan sertifikat SSL bawaan dari Netlify dan Cloudflare**.

Website ini menggunakan **HTML dan CSS**, kemudian di-*hosting* pada **Netlify**, yang secara otomatis menyediakan sertifikat SSL gratis untuk keamanan koneksi pengguna.

## 🚀 Link Website
🔗 [Kunjungi Website di Netlify](https://5cbdc.netlify.app)

## ⚙️ Langkah Implementasi
1. Membuat website sederhana menggunakan HTML dan CSS.  
2. Deploy ke [Netlify](https://www.netlify.com).  
3. Pastikan HTTPS aktif (terlihat ikon gembok di browser).  
4. Uji koneksi dengan tombol **“Cek HTTPS”**.  
5. Firewall Cloudflare belum digunakan karena domain masih bawaan Netlify.

## 🔒 Hasil Pengujian HTTPS
- HTTPS aktif dan ikon gembok muncul.  
- SSL otomatis dari Netlify.  
- Koneksi pengguna aman dan terenkripsi.

📸 Tambahkan screenshot hasil cek HTTPS di folder `assets/`.

## 🧩 Analisis Keamanan dan Mitigasi
| Aspek | Analisis | Mitigasi |
|-------|-----------|-----------|
| SSL/HTTPS | Sudah aktif otomatis | Tetap gunakan SSL bawaan atau integrasi Cloudflare |
| Firewall | Belum aktif (tanpa domain custom) | Aktifkan Cloudflare jika pakai domain pribadi |
| Enkripsi | Koneksi terenkripsi | Tambahkan autentikasi bila perlu |

## 🧱 Arsitektur Cloud

## 🧑‍💻 Teknologi
- HTML5  
- CSS3  
- Netlify Hosting  
- Cloudflare SSL
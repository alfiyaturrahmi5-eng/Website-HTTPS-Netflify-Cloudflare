// script.js
function cekHTTPS() {
  const result = document.createElement('p');
  if (location.protocol === 'https:') {
    result.textContent = '✅ Website ini sudah menggunakan HTTPS dan aman.';
  } else {
    result.textContent = '❌ Website ini belum menggunakan HTTPS.';
  }
  document.body.appendChild(result);
}
// script.js
function cekHTTPS() {
  const result = document.getElementById("hasil");
  if (window.location.protocol === "https:") {
    result.textContent = "✅ HTTPS aktif — Website ini aman!";
  } else {
    result.textContent = "❌ Website belum menggunakan HTTPS.";
  }
}
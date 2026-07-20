// === CẬP NHẬT SAU KHI DEPLOY APPS SCRIPT ===
// Vào Apps Script > Deploy > New deployment > Web app > copy URL dán vào đây
const APPS_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbxMcZ2W90Qw0ckZ2zBsg6dnCREegTP7xADWP3q6UJd9i-thm3h_GIQChL1IUqx1N65Hag/exec";

// Gọi API Apps Script (dùng POST, content-type text/plain để tránh CORS preflight)
async function callApi(action, params) {
  const body = JSON.stringify(Object.assign({ action }, params));
  const res = await fetch(APPS_SCRIPT_URL, {
    method: "POST",
    headers: { "Content-Type": "text/plain;charset=utf-8" },
    body
  });
  return res.json();
}

// Đọc file input thành base64 (dùng cho đính kèm chỉ định)
function fileToBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result.split(",")[1]);
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
}

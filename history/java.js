//Hàm lưu ls
function saveHistory(movie) {
  let history = JSON.parse(localStorage.getItem("history")) || [];
  const index = history.findIndex(item => item.id === movie.id);

  if (index >= 0) {
    history[index] = movie; // cập nhật
  } else {
    history.unshift(movie); // thêm mới
  }

  if (history.length > 10) history.pop();
  localStorage.setItem("history", JSON.stringify(history));
}
//Hàm render ls
function renderHistory() {
  const history = JSON.parse(localStorage.getItem("history")) || [];
  const container = document.getElementById("history-list");
  if (!container) return;

  container.innerHTML = "";
  history.forEach(movie => {
    const item = document.createElement("div");
    item.className = "history-item";
    item.innerHTML = `
      <img class="history-thumb" src="${movie.thumbnail}" alt="${movie.title}">
      <div class="history-info">
        <h3>${movie.title}</h3>
        <div class="progress-bar">
          <div class="progress" style="width: ${movie.progress}%;"></div>
        </div>
        <small>Đã xem ${movie.progress}%</small>
      </div>
    `;
    container.appendChild(item);
  });
}
//load trang
document.addEventListener("DOMContentLoaded", () => {
  renderHistory();
});
//xem tiep
// Ví dụ: khi người dùng xem được 40% phim ID=2
saveHistory({
  id: 2,
  title: "Doctor Strange",
  thumbnail: "https://example.com/doctor-strange.jpg",
  progress: 40
});
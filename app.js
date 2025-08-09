const arrows = document.querySelectorAll(".arrow");
const movieLists = document.querySelectorAll(".movie-list");

arrows.forEach((arrow, i) => {
  const itemNumber = movieLists[i].querySelectorAll("img").length;
  let clickCounter = 0;
  arrow.addEventListener("click", () => {
    const ratio = Math.floor(window.innerWidth / 270);
    clickCounter++;
    if (itemNumber - (4 + clickCounter) + (4 - ratio) >= 0) {
      movieLists[i].style.transform = `translateX(${movieLists[i].computedStyleMap().get("transform")[0].x.value - 300
        }px)`;
    } else {
      movieLists[i].style.transform = "translateX(0)";
      clickCounter = 0;
    }
  });

  console.log(Math.floor(window.innerWidth / 270));
});

//TOGGLE

const ball = document.querySelector(".toggle-ball");
const items = document.querySelectorAll(
  ".container,.movie-list-title,.navbar-container,.sidebar,.left-menu-icon,.toggle"
);

ball.addEventListener("click", () => {
  items.forEach((item) => {
    item.classList.toggle("active");
  });
  ball.classList.toggle("active");
});
//video autoplay
document.addEventListener('click', function () {
  const video = document.getElementById('myVideo');
  video.volume = 1.0; // đảm bảo có âm thanh
  video.play();
}, { once: true }); // chỉ chạy 1 lần sau click đầu tiên
// Mở popup tìm kiếm
document.querySelector(".fa-search").addEventListener("click", () => {
  document.querySelector(".search-popup").classList.toggle("active");
});

// Bookmark click
let bookmarkCount = 0;
document.querySelector(".fa-bookmark").addEventListener("click", (e) => {
  bookmarkCount++;
  document.querySelector(".bookmark-badge").innerText = bookmarkCount;
  e.target.classList.toggle("active");
});

// Scroll to top khi click Home
document.querySelector(".fa-home").addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: 'smooth', transition: 'all 0.3s ease' });
});

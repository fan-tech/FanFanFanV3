document.querySelector(".menu-toggle").addEventListener("click", function () {
  this.classList.toggle("open");
  document.querySelector("nav ul").classList.toggle("open");
});

document.querySelectorAll("nav ul li a").forEach(function (link) {
  link.addEventListener("click", function () {
    // メニューがタップされたら、三本線に戻る
    document.querySelector(".menu-toggle").classList.remove("open");
    document.querySelector("nav ul").classList.remove("open");
  });
});

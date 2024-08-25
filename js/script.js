document.getElementById("menu-toggle").addEventListener("click", function () {
  this.classList.toggle("open");
  document.getElementById("menu").classList.toggle("open");
});

// メニュー内のリンクがクリックされたときにメニューを閉じる
document.querySelectorAll("nav ul li a").forEach(function (link) {
  link.addEventListener("click", function () {
    document.getElementById("menu-toggle").classList.remove("open");
    document.getElementById("menu").classList.remove("open");
  });
});

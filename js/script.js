document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.getElementById("menu-toggle");
  const menu = document.getElementById("menu");
  const topLink = document.querySelector('a[href="#top"]');

  // ハンバーガーメニューの開閉
  menuToggle.addEventListener("click", function () {
    menu.classList.toggle("open");
    menuToggle.classList.toggle("open");
  });

  // メニューリンクをクリックしたときにメニューを閉じる
  menu.querySelectorAll("a").forEach(function (link) {
    link.addEventListener("click", function () {
      menu.classList.remove("open");
      menuToggle.classList.remove("open");
    });
  });

  // topリンクをクリックしたときにメニューを閉じる
  topLink.addEventListener("click", function () {
    menu.classList.remove("open");
    menuToggle.classList.remove("open");
  });
});

//
//
//
document.addEventListener("DOMContentLoaded", function () {
  const faders = document.querySelectorAll(".fade-in");

  const appearOptions = {
    threshold: 0.1, // 10%が表示されたときにアニメーション開始
  };

  const appearOnScroll = new IntersectionObserver(function (
    entries,
    appearOnScroll
  ) {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) {
        return;
      } else {
        entry.target.classList.add("show");
        appearOnScroll.unobserve(entry.target);
      }
    });
  },
  appearOptions);

  faders.forEach((fader) => {
    appearOnScroll.observe(fader);
  });
});

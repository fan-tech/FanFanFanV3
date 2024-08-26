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

  document.addEventListener("DOMContentLoaded", () => {
const elements = document.querySelectorAll(".headline, .sub-headline, .space, .sub-section");

  // 初期スタイル設定
  elements.forEach(el => {
    el.style.opacity = "0";
    el.style.transform = "translateX(50px)"; // 右から
    el.style.transition = "opacity 0.8s ease-out, transform 0.8s ease-out";
  });

  // IntersectionObserverで画面内に入ったら実行
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1";
        entry.target.style.transform = "translateX(0)";
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  elements.forEach(el => observer.observe(el));
});
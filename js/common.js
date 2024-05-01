document.addEventListener("DOMContentLoaded", () => {
  const barsBtn = document.querySelector(".menu");
  const sidebar = document.querySelector(".sidebar");

  barsBtn.addEventListener("click", function () {
    toggleClass(sidebar, "action");
  });

  // 클래스 토글 기능
  const toggleClass = (el, className) => {
    el.classList.contains(className)
      ? sidebar.classList.remove(className)
      : sidebar.classList.add(className);
  };
});

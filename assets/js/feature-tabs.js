 const tabs = document.querySelectorAll(".qb-carousel__tab");
  const texts = document.querySelectorAll(".qb-carousel__text");
  const images = document.querySelectorAll(".qb-carousel__image");
  let currentIndex = 0;
  let autoSwitch;

  function activateTab(index) {
    tabs.forEach(t => t.classList.remove("active"));
    texts.forEach(txt => txt.classList.remove("active"));
    images.forEach(img => img.classList.remove("active"));

    tabs[index].classList.add("active");
    texts[index].classList.add("active");
    images[index].classList.add("active");

    currentIndex = index;
  }

  // Click event
  tabs.forEach((tab, index) => {
    tab.addEventListener("click", () => {
      activateTab(index);
      resetAutoSwitch();
    });
  });

  // Auto switch every 10s
  function autoSlide() {
    let nextIndex = (currentIndex + 1) % tabs.length;
    activateTab(nextIndex);
  }

  function resetAutoSwitch() {
    clearInterval(autoSwitch);
    autoSwitch = setInterval(autoSlide, 10000);
  }

  // Start auto switching
  resetAutoSwitch();
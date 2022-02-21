// 等待效果
let wbLoading = document.querySelector('.wb-loading');
if (wbLoading) {
  for(let wbloadingI = 0; wbloadingI < 5; wbloadingI ++) {
    let wbloadingDiv = document.createElement("div");
    wbloadingDiv.setAttribute('class', 'dot');
    wbLoading.append(wbloadingDiv);
  }
}
// 3d-loading
let wb3Dloading = document.querySelector(".wb-3d-loading");
if (wb3Dloading) {
  let letters = wb3Dloading.textContent.split("");
  wb3Dloading.textContent = "";
  letters.forEach((letter, i) => {
    let span = document.createElement("span");
    span.textContent = letter;
    span.style.animationDelay = `${i / 10}s`;
    wb3Dloading.append(span);
  });
}
// 雪降落效果
let wbSnow = document.querySelector('.wb-snow');
if (wbSnow) {
  for(let wbSnowI = 0; wbSnowI < 90; wbSnowI ++) {
    let wbSnowDiv = document.createElement("div");
    wbSnowDiv.setAttribute('class', 'snow');
    wbSnow.append(wbSnowDiv);
  }
}
// 文字效果
let wblandInTexts = document.querySelectorAll(".wb-landIn");
if (wblandInTexts) {
  wblandInTexts.forEach(landInText => {
    let letters = landInText.textContent.split("");
    landInText.textContent = "";
    letters.forEach((letter, i) => {
      let span = document.createElement("span");
      span.textContent = letter;
      span.style.animationDelay = `${i * 0.05}s`;
      landInText.append(span);
    });
  });
}
// menu
let wbMenuLinks = document.querySelectorAll(".wb-menu li a");
if (wbMenuLinks) {
  wbMenuLinks.forEach(link => {
    let letters = link.textContent.split("");
    link.textContent = "";
    letters.forEach((letter, i) => {
      let span = document.createElement("span");
      span.textContent = letter;
      span.style.transitionDelay = `${i / 20}s`;
      span.dataset.text = letter;
      link.append(span);
    });
  });
}
// nav
let navtab = document.querySelector("nav.wb-navtab");
let navtabItems = document.querySelectorAll("li.wb-navtab-item");
if (navtab && navtabItems) {
  navtabItems.forEach((navtabItem, activeIndex) =>
    navtabItem.addEventListener("click", () => {
      navtabItems.forEach(navtabItem => navtabItem.classList.remove("active"));
      navtabItem.classList.add("active");
      navtab.style.setProperty(
        "--active-index",
        `${activeIndex}`
      );
    })
  );
}


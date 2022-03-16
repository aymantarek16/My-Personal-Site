/* ========================== Java Script Code ========================== */

/* ========================== Typing animation ========================== */
var typed = new Typed(".typing", {
  strings: ["Front End", "Web Developer"],
  typeSpeed: 60,
  BackSpeed: 60,
  loop: true,
});

/* ========================== Aside ========================== */
const nav = document.querySelector(".nav"),
  navList = nav.querySelectorAll("li"),
  allSection = document.querySelectorAll(".section");

for (let i = 0; i < navList.length; i++) {
  const a = navList[i].querySelector("a");
  a.addEventListener("click", function () {
    removeBackSection();

    for (let j = 0; j < navList.length; j++) {
      if (navList[j].querySelector("a").classList.contains("active")) {
        addBackSection(j);
      }
      navList[j].querySelector("a").classList.remove("active");
    }
    this.classList.add("active");
    showSection(this);
    if (window.innerWidth < 1200) {
      asideSectionTogglerBtn();
    }
    stopProgAnimate()
  });
}
function removeBackSection() {
  for (let i = 0; i < allSection.length; i++) {
    allSection[i].classList.remove("back-section");
  }
}
function addBackSection(num) {
  allSection[num].classList.add("back-section");
}
function showSection(element) {
  for (let i = 0; i < allSection.length; i++) {
    allSection[i].classList.remove("active");
  }
  const target = element.getAttribute("href").split("#")[1];
  document.querySelector("#" + target).classList.add("active");
}
function updateNav(element) {
  for (let i = 0; i < navList.length; i++) {
    navList[i].querySelector("a").classList.remove("active");
    const target = element.getAttribute("href").split("#")[1];
    if (
      target ===
      navList[i].querySelector("a").getAttribute("href").split("#")[1]
    ) {
      navList[i].querySelector("a").classList.add("active");
    }
  }
}
document.querySelector(".hire-me").addEventListener("click", function () {
  const sectionIndex = this.getAttribute("data-section-index");
  showSection(this);
  updateNav(this);
  removeBackSection();
  addBackSection(sectionIndex);
});
const navTogglerBtn = document.querySelector(".nav-toggler"),
  aside = document.querySelector(".aside");
navTogglerBtn.addEventListener("click", () => {
  asideSectionTogglerBtn();
});

function asideSectionTogglerBtn() {
  aside.classList.toggle("open");
  navTogglerBtn.classList.toggle("open");
  for (let i = 0; i < allSection.length; i++) {
    allSection[i].classList.toggle("open");
  }
}

/* ========================== Add Progress Animation ========================== */

let skillsLink = document.querySelector(".sk");
let progress = document.querySelectorAll(".progress-bar");

skillsLink.addEventListener("click", () => {
  openProgAnimat();
});

function openProgAnimat() {
  progress.forEach((eo) => {
    eo.style.width = eo.dataset.width;

  });
}

function stopProgAnimate(){
  progress.forEach((eo) => {
    eo.style.width =  "0";
  });
}

/* ========================== Jquery Code ========================== */

// Loading Page Befor Load Main Page
$(window).on("load", function () {
  $(".loader").fadeOut("2000");
  $(".content").fadeIn("2000");
});

/*==================== MENU SHOW Y HIDDEN ====================*/
const navMenu = document.getElementById("nav-menu"),
  navToggle = document.getElementById("nav-toggle"),
  navClose = document.getElementById("nav-close");

/*===== MENU SHOW =====*/
/* Validate if constant exists */
if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
  });
}

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
}

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll(".nav-link");

function linkAction() {
  const navMenu = document.getElementById("nav-menu");
  //Quando clicarmos no navLink, iremos remover a classe show-menu
  navMenu.classList.remove("show-menu");
}
navLink.forEach((n) => n.addEventListener("click", linkAction));

/*==================== ACCORDION SKILLS ====================*/
const skillsContent = document.getElementsByClassName("skills_content"),
  skillsHeader = document.querySelectorAll(".skills_header");

function toggleSkills() {
  let itemClass = this.parentNode.className;

  for (i = 0; i < skillsContent.length; i++) {
    skillsContent[i].className = "skills_content skills_close";
  }
  if (itemClass === "skills_content skills_close") {
    this.parentNode.className = "skills_content skills_open";
  }
}

skillsHeader.forEach((el) => {
  el.addEventListener("click", toggleSkills);
});

/*==================== QUALIFICATION TABS ====================*/
const tabs = document.querySelectorAll("[data-target]"),
  tabContents = document.querySelectorAll("[data-content]");

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    const target = document.querySelector(tab.dataset.target);

    tabContents.forEach((tabContent) => {
      tabContent.classList.remove("qualification_active");
    });
    target.classList.add("qualification_active");

    tabs.forEach((tab) => {
      tab.classList.remove("qualification_active");
    });
    tab.classList.add("qualification_active");
  });
});

/*==================== SERVICES MODAL ====================*/

const modalViews = document.querySelectorAll(".services_modal"),
  modalBtns = document.querySelectorAll(".services_button"),
  modalCloses = document.querySelectorAll(".services_modal-close");

let modal = function (modalClick) {
  modalViews[modalClick].classList.add("active-modal");
};

modalBtns.forEach((modalBtn, i) => {
  modalBtn.addEventListener("click", () => {
    modal(i);
  });
});

modalCloses.forEach((modalClose) => {
  modalClose.addEventListener("click", () => {
    modalViews.forEach((modalView) => {
      modalView.classList.remove("active-modal");
    });
  });
});

//Sair pressionando a tecla ESC
document.onkeydown = function (e) {
  if (e.key === "Escape") {
    fecharModal();
    console.log("fechou Modal com ESC");
  }
};

//Função de fechar o modal
function fecharModal() {
  modalViews.forEach((modalView) => {
    modalView.classList.remove("active-modal");
  });
}
//Função para sair clicando fora do modal
modalViews.forEach((modalView) => {
  modalView.addEventListener("click", function (e) {
    if (e.target == this)
      fecharModal(), console.log("fechou modal com Clique fora.");
  });
});

/*==================== PORTFOLIO SWIPER  ====================*/
let swiperPortfolio = new Swiper(".portfolio_container", {
  cssMode: true,
  loop: true,

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll("section[id]");

function scrollActive() {
  const scrollY = window.pageYOffset;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 50;
    sectionId = current.getAttribute("id");

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document
        .querySelector(".nav_menu a[href*=" + sectionId + "]")
        .classList.add("active-link");
    } else {
      document
        .querySelector(".nav_menu a[href*=" + sectionId + "]")
        .classList.remove("active-link");
    }
  });
}
window.addEventListener("scroll", scrollActive);

/*==================== CHANGE BACKGROUND HEADER ====================*/
function scrollHeader() {
  const nav = document.getElementById("header");
  // Quando o scroll é maior que 200 viewport height, adiciona a classe scroll-header na tag header
  if (this.scrollY >= 80) nav.classList.add("scroll-header");
  else nav.classList.remove("scroll-header");
}
window.addEventListener("scroll", scrollHeader);

/*==================== SHOW SCROLL UP ====================*/
function scrollUp() {
  const scrollUp = document.getElementById("scroll-up");
  // quando o scroll é maior que 560 viewport height, adiciona a classe show-scroll
  if (this.scrollY >= 560) scrollUp.classList.add("show-scroll");
  else scrollUp.classList.remove("show-scroll");
}
window.addEventListener("scroll", scrollUp);

/*==================== DARK LIGHT THEME ====================*/
const themeButton = document.getElementById("theme-button");
const darkTheme = "dark-theme";
const iconTheme = "uil-sun";

const img_home = document.getElementById("imgHome");
const imgDark = "assets/img/smartphoneDark.png";

const imageTheme = document.getElementById("imgTheme");
const darkImage = "assets/img/web-browser-white.png";
const lightImage = "assets/img/web-browser.png";

// Caso o usuário ja tenha selecionado anteriormente manter as mesma preferência
const selectedTheme = localStorage.getItem("selected-theme");
const selectedIcon = localStorage.getItem("selected-icon");
const selectedImage = localStorage.getItem("selected-image");

// Obtendo o tema atual validando a classe dark-theme
const getCurrentTheme = () =>
  document.body.classList.contains(darkTheme) ? "dark" : "light";
const getCurrentIcon = () =>
  themeButton.classList.contains(iconTheme) ? "uil-moon" : "uil-sun";

// Validando a preferencia do usuário caso ele ja tenha selecionado anteriormente
if (selectedTheme) {
  // Caso a validação for cumprida, faremos uma pergunta para saber se ativamos ou desativamos o dark-theme
  document.body.classList[selectedTheme === "dark" ? "add" : "remove"](
    darkTheme
  );

  changeImage();

  themeButton.classList[selectedIcon === "uil-moon" ? "add" : "remove"](
    iconTheme
  );
}

//Trocando de imagem de acordo com o tema
function changeImage() {
  const imageTheme = document.getElementById("imgTheme");
  const img_home = document.getElementById("imgHome");

  if (document.body.classList.contains(darkTheme)) {
    imageTheme.setAttribute("src", "assets/img/web-browser-white.png");
    img_home.setAttribute("src", "assets/img/smartphoneDark.png");
  } else if (document.body.classList.contains(darkTheme) === false) {
    imageTheme.setAttribute("src", "assets/img/web-browser.png");

    img_home.setAttribute("src", "assets/img/smartphoneLight.png");
  }
}

// Ativar / Desativar o tema manualmente com o botão
themeButton.addEventListener("click", () => {
  //adicionar ou remover o dark / icon theme
  document.body.classList.toggle(darkTheme);
  themeButton.classList.toggle(iconTheme);
  changeImage();
  // Salvando a preferencia do usuário
  localStorage.setItem("selected-image", changeImage());
  localStorage.setItem("selected-theme", getCurrentTheme());
  localStorage.setItem("selected-icon", getCurrentIcon());
});

//Efeito digitação
const typing = document.querySelector(".typing");

const messages = ["Estou a procura de novos desafios!"];

let messageIndex = 0;
let characterIndex = 0;
let currentMessage = "";
let currentCharacters = "";

function type() {
  if (messageIndex === messages.length) {
    messageIndex = 0;
  }

  currentMessage = messages[messageIndex];
  currentCharacters = currentMessage.slice(0, characterIndex++);
  typing.textContent = currentCharacters;

  if (currentCharacters.length === currentMessage.length) {
    messageIndex++;
    characterIndex = 0;
  }
}
setInterval(type, 120);

// MAIN - contacts section - close button
const contacts = document.querySelector(".contacts");
const contactsBtn = document.getElementById("contacts__close");
const headerMenu = document.querySelector(".header-menu ");

function closeSidebar() {
  contacts.classList.add("contacts__hidden");
  // headerMenu.css({
  //   left: "50%",
  //   transform: "translate(-50%)",
  // });
  // - НЕ РАБОТАЕТ
}

document.addEventListener(
  "DOMContentLoaded",
  contacts.classList.remove("contacts__hidden")
);

contactsBtn.addEventListener("click", closeSidebar);

// MAIN - gallery section - add/filter data functions
const galleryCards = document.querySelector(".gallery__cards");

const galleryData = [
  {
    link: "./assets/images/gallery-1.jpg",
    category: "визаж",
  },
  {
    link: "./assets/images/gallery-2.jpg",
    category: "визаж",
  },
  {
    link: "./assets/images/gallery-3.jpg",
    category: "маникюр",
  },
  {
    link: "./assets/images/gallery-4.jpg",
    category: "визаж",
  },
  {
    link: "./assets/images/gallery-5.jpg",
    category: "парикмахерские услуги",
  },
  {
    link: "./assets/images/gallery-6.jpg",
    category: "визаж",
  },
  {
    link: "./assets/images/gallery-7.jpg",
    category: "маникюр",
  },
  {
    link: "./assets/images/gallery-8.jpg",
    category: "парикмахерские услуги",
  },
  {
    link: "./assets/images/gallery-9.jpg",
    category: "визаж",
  },
  {
    link: "./assets/images/gallery-3.jpg",
    category: "маникюр",
  },
  {
    link: "./assets/images/gallery-5.jpg",
    category: "парикмахерские услуги",
  },
];

function filterData(array, key) {
  galleryCards.innerHTML = "";
  return (array = array.filter((card) => card.category === `${key}`));
}

function createCard(card) {
  const galleryCard = document.createElement("div");
  galleryCard.classList.add(".gallery__card");
  galleryCards.append(galleryCard);

  const cardImage = document.createElement("img");
  cardImage.classList.add(".gallery__card-image");
  cardImage.src = card.link;
  cardImage.setAttribute("alt", "card.category");
  galleryCard.append(cardImage);
}

function fullGalleryData() {
  galleryCards.innerHTML = "";
  let galleryFullData = galleryData.slice(0, 9);
  for (let i = 0; i < galleryFullData.length; i++) {
    createCard(galleryFullData[i]);
  }
}

// Gallery full content
document.addEventListener("DOMContentLoaded", fullGalleryData);

const btnShowAll = document.getElementById("gallery_show-all");
btnShowAll.onclick = function () {
  galleryCards.innerHTML = "";
  galleryData.forEach(function (card) {
    createCard(card);
  });
};

// Gallery filtered content
const btnFilterOne = document.getElementById("gallery_filter-1");
const btnFilterTwo = document.getElementById("gallery_filter-2");
const btnFilterThree = document.getElementById("gallery_filter-3");

btnFilterOne.onclick = function () {
  let galleryDataFiltered = JSON.parse(JSON.stringify(galleryData));
  galleryDataFiltered = filterData(
    galleryDataFiltered,
    "парикмахерские услуги"
  );
  galleryDataFiltered.forEach(function (card) {
    createCard(card);
  });
};

btnFilterTwo.onclick = function () {
  let galleryDataFiltered = JSON.parse(JSON.stringify(galleryData));
  galleryDataFiltered = filterData(galleryDataFiltered, "маникюр");
  galleryDataFiltered.forEach(function (card) {
    createCard(card);
  });
};

btnFilterThree.onclick = function () {
  let galleryDataFiltered = JSON.parse(JSON.stringify(galleryData));
  galleryDataFiltered = filterData(galleryDataFiltered, "визаж");
  galleryDataFiltered.forEach(function (card) {
    createCard(card);
  });
};

// HEADER-NAV - social hover
const socialLink = document.querySelector(".header-menu__socials-link");
const socialStrokeOne = document.querySelector(".social-svg__stroke-1");
const socialStrokeTwo = document.querySelector(".social-svg__stroke-2");
const socialFill = document.querySelector(".social-svg__fill");

socialLink.addEventListener("mouseover", function () {
  socialStrokeOne.style.stroke = "#cdaa7d";
  socialStrokeTwo.style.stroke = "#cdaa7d";
  socialFill.style.fill = "#cdaa7d";
});

socialLink.addEventListener("mouseout", function () {
  socialStrokeOne.style.stroke = "white";
  socialStrokeTwo.style.stroke = "white";
  socialFill.style.fill = "white";
});

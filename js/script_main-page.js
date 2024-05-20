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
];

function galleryFilter(filter) {
  const galleryDataFiltered = galleryData;
  galleryDataFiltered.filter((card) => card.category === filter);

  return galleryDataFiltered;
}

console.log(galleryFilter());

const galleryCards = document.querySelector(".gallery__cards");

galleryData.forEach(function (card) {
  const galleryCard = document.createElement("div");
  galleryCard.classList.add(".gallery__card");
  galleryCards.append(galleryCard);

  const cardImage = document.createElement("img");
  cardImage.classList.add(".gallery__card-image");
  cardImage.src = card.link;
  cardImage.setAttribute("alt", "card.category");
  galleryCard.append(cardImage);
});

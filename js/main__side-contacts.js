// MAIN - contacts section - close button
const contacts = document.querySelector(".contacts");
const contactsBtn = document.getElementById("contacts__close");
const headerMenu = document.querySelector(".header-menu ");

document.addEventListener(
  "DOMContentLoaded",
  contacts.classList.remove("contacts__hidden")
);

function closeSidebar() {
  contacts.classList.add("contacts__hidden");

  // headerMenu.style.left = "50%";
  // headerMenu.style.transform = "translateX(-50%)";
  // Figma option 2: center header menu after close contacts
}

contactsBtn.addEventListener("click", closeSidebar);

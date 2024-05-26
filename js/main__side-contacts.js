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
  // headerMenu.css({
  //   left: "50%",
  //   transform: "translate(-50%)",
  // });
  // - НЕ РАБОТАЕТ
}

contactsBtn.addEventListener("click", closeSidebar);

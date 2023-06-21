let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");
const form = document.querySelector("form");
const emailInput = document.getElementById("email");
const numberInput = document.getElementById("number");
const emailError = document.querySelector("#email + .error-msg");
const numberError = document.querySelector("#number + .error-msg");

menuIcon.onclick = () => {
  menuIcon.classList.toggle("bx-x");
  navbar.classList.toggle("active");
};

let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav a");

window.onscroll = () => {
  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      navLinks.forEach((links) => {
        links.classList.remove("active");
        document
          .querySelector("header nav a[href*=" + id + "]")
          .classList.add("active");
      });
    }
  });

  let header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 100);

  menuIcon.classList.remove("bx-x");
  navbar.classList.remove("active");
};

const validateEmail = () => {
  const emailValue = emailInput.value.trim();
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (emailValue === "") {
    emailError.style.display = "block";
    emailInput.classList.add("invalid");
    return false;
  } else if (!emailPattern.test(emailValue)) {
    emailError.style.display = "block";
    emailInput.classList.add("invalid");
    return false;
  } else {
    emailError.style.display = "none";
    emailInput.classList.remove("invalid");
    return true;
  }
};

const validatePhoneNumber = () => {
  const numberValue = numberInput.value.trim();
  const numberPattern = /^\d{10}$/;

  if (numberValue === "") {
    numberError.style.display = "block";
    numberInput.classList.add("invalid");
    return false;
  } else if (!numberPattern.test(numberValue)) {
    numberError.style.display = "block";
    numberInput.classList.add("invalid");
    return false;
  } else {
    numberError.style.display = "none";
    numberInput.classList.remove("invalid");
    return true;
  }
};

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const isEmailValid = validateEmail();
  const isPhoneNumberValid = validatePhoneNumber();

  if (isEmailValid && isPhoneNumberValid) {
    window.location.reload();
  }
});

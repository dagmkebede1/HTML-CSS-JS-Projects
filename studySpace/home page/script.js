const activePage = window.location.pathname;
const navLiinks = document
  .querySelectorAll(".side-container a")
  .forEach((link) => {
    if (link.href.includes(`${activePage}`)) {
      link.classList.add("active");
    }
  });

const lightOne = document.querySelector(".grey");
const darkOne = document.querySelector(".dark");
const pinkOne = document.querySelector(".pink");
const sideBar = document.querySelector(".side-bar");
const navigation = document.querySelector(".navigation");
const main = document.querySelector(".main");

const currentTheme = localStorage.getItem("theme");
lightOne.addEventListener("click", () => {
  if (currentTheme != ".grey") sideBar.className = "side-bar";
  navigation.className = "navigation";
  main.className = "main";
  localStorage.setItem("theme", lightOne);
});
pinkOne.addEventListener("click", () => {
  sideBar.className = "side-bar themepink";
  navigation.className = "navigation themepink";
  main.className = "main themepink";
  localStorage.setItem("theme", pinkOne);
});
darkOne.addEventListener("click", () => {
  sideBar.className = "side-bar themedark";
  navigation.className = "navigation themedark";
  main.className = "main themedark";
  localStorage.setItem("theme", darkOne);
});

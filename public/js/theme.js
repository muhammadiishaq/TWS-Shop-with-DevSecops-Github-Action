function toggleTheme() {

const body = document.body;

if (body.classList.contains("dark")) {

body.classList.remove("dark");
localStorage.setItem("theme","light");

} else {

body.classList.add("dark");
localStorage.setItem("theme","dark");

}

}

window.onload = function () {

const savedTheme = localStorage.getItem("theme");

if(savedTheme === "dark"){
document.body.classList.add("dark");
}

};
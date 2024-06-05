const search = document.querySelector(".search")
const input = document.querySelector(".input")
const btn = document.querySelector(".btn")

btn.addEventListener("click", () => {
    search.classList.toggle("active"); //açıksa kapar, kapalıysa açar
    input.focus();
    input.value="";
})
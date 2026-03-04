document.addEventListener("DOMContentLoaded", () => {

const observer = new IntersectionObserver(entries => {
entries.forEach(entry => {
if (entry.isIntersecting) {
entry.target.classList.add("visible")
}
})
},{threshold:0.12})

document.querySelectorAll(".fade").forEach(el => observer.observe(el))

const menuBtn = document.getElementById("menu-btn")
const mobileNav = document.getElementById("mobile-nav")

if(menuBtn && mobileNav){

menuBtn.addEventListener("click", ()=>{

const open = mobileNav.style.display === "flex"

mobileNav.style.display = open ? "none" : "flex"

menuBtn.textContent = open ? "☰" : "✕"

})

}

const currentPage = window.location.pathname.split("/").pop() || "index.html"

document.querySelectorAll(".nav-links a, .mobile-nav a").forEach(link=>{

const href = link.getAttribute("href")

if(href === currentPage){

link.classList.add("active")

}

})

})

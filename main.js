const menuBtn = document.querySelector(".menu-btn");
const closeBtn= document.querySelector(".close-btn");
const mobileNav = document.querySelector(".mobile-nav");

const mobileNavLinks = document.querySelector(".mobile-nav-a");

//mobile nav

menuBtn.addEventListener("click", function () {
    mobileNav.classList.add("active");
    closeBtn.style.display = "block";
    menuBtn.style.display = "none";
})

//close btn

closeBtn.addEventListener("click", function () {
    mobileNav.classList.remove("active");
    closeBtn.style.display = "none";
    menuBtn.style.display = "block";
})

//mobile Nav Menu Links

mobileNavLinks.forEach(link => (link.addEventListener("click",
    function () {
        mobileNav.classList.remove("active");
        closeBtn.style.display = "none";
        menuBtn.style.display = "block";
    })))
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", function() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
})

document.querySelectorAll(".nav-link").forEach(n => n.
addEventListener("click", function() {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}))

var mess = "we are creatives"
i = 0

timer = setInterval(function () {
    if (i >= mess.length)
    {
        i = 0
        document.getElementById("typing").textContent = ""
    }
    document.getElementById("typing").textContent += mess[i];
    i = i + 1;
}, 300)


var typing = document.getElementById("typing")
var mess = "we are creatives"
var color = document.querySelector('nav-links')
i = 0

timer = setInterval(function () {
    if (i >= mess.length)
    {
        i = 0
        typing.textContent = ''
    }
    typing.textContent += mess[i] 
    i += 1
}, 300)


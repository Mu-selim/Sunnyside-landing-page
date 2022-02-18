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


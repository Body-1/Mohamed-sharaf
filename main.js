// Toggle Navbar Icon
let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menuIcon.onclick = () => {
    menuIcon.classList.toggle("fa-xmark")
    navbar.classList.toggle("active")
};

// Scroll Sections
let sections = document.querySelectorAll("section");

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 200;
        let height = sec.offsetHeight;
        let id = sec.getAttribute("id");

        if (top >= offset && top < offset + height) {
            // active section for animation on scroll
            sec.classList.add("show-animate");
        }
        // if want to use animation that repeats on scroll use this
        // else {
        //     sec.classList.remove("show-animate");
        // }
    });

    // Remove Toggle icon And Navbar When Click Navbar Links (Scroll)
    menuIcon.classList.remove("fa-xmark")
    navbar.classList.remove("active")

    // Skills Section On Scroll

    let skillsSec = document.querySelector(".skills");
    let progressSpans = document.querySelectorAll(".the-progress span");

    if (window.scrollY >= skillsSec.offsetTop - 100) {
        setTimeout(() => {
            progressSpans.forEach((progressSpan) => {
                progressSpan.style.width = progressSpan.dataset.width;
            })
        }, 2000);
    }
}

let footerIconTop = document.querySelector(".footer-iconTop");
    
footerIconTop.onclick = function () {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
    })
}

function changeImage() {
    let img = document.getElementById("myImage");
    let select = document.getElementById("mySelect");

    img.src = select.value;
}
let mainNavLinks = document.querySelectorAll("nav ul li a");

let lastId;
let cur = [];

window.addEventListener("scroll", event => {
    let fromTop = window.scrollY;
	console.log("rohan")
    mainNavLinks.forEach(link => {
        let section = document.querySelector(link.hash);
        if (section.offsetTop <= fromTop + 1 && section.offsetTop + section.offsetHeight > fromTop + 1 )  {
            mainNavLinks.forEach(function(linktoremove){
                linktoremove.classList.remove("currect");
            });
            link.classList.add("currect");
        }
    });
});
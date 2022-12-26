var searchBar = document.getElementsByClassName("searchBar")[0];
var searchButton = document.getElementById("NavSearch");
var SearchBarVisible = false;

searchButton.addEventListener("click", function() {
    if (!SearchBarVisible) {
        searchBar.style.transform = "translateY(80px)";
        SearchBarVisible = true;
    } else {
        searchBar.style.transform = "translateY(0px)";
        SearchBarVisible = false;
    }
});

var menuCollapser = document.getElementById('nav__mobile__bars');
var menuCollapsed = false;
var nav__links = document.getElementsByClassName("nav__links")[0];
var nav__buttons = document.getElementsByClassName("nav__buttons")[0];
var for__mobile = document.getElementById("for__mobile"); 
var nav__bar = document.getElementsByClassName("nav__bar")[0];


menuCollapser.addEventListener("click", function() {
    if (!menuCollapsed) {
        nav__links.style.display = "flex";
        for__mobile.style.marginTop = "330px";
        nav__buttons.style.display = "flex";
        menuCollapsed = true;
    } else {
        nav__links.style.display = "none";
        for__mobile.style.marginTop = "0";
        nav__buttons.style.display = "none";
        menuCollapsed = false;
    }
});


window.addEventListener("scroll", function () {
    if (this.window.scrollY > 250) {
        this.document.getElementsByClassName("nav__bar")[0].style.background = "#fff";
        this.document.getElementsByClassName("nav__bar")[0].style.boxShadow = "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px";
        // box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    } else {
        this.document.getElementsByClassName("nav__bar")[0].style.background = "transparent";
        this.document.getElementsByClassName("nav__bar")[0].style.boxShadow = "none";
    }
});
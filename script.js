window.addEventListener("load", sidenVises);

function sidenVises() {
    console.log("sidenVises");

    //burgermenu
    document.querySelector("#menuknap").addEventListener("click", toggleMenu);
}

function toggleMenu() {
    console.log("toggleMenu");
    document.querySelector("#menu").classList.toggle("hidden");
    document.querySelector(".social_media").classList.add("hidden");

    let erSkjult = document.querySelector("#menu").classList.contains("hidden");


    if (erSkjult == true) {
        document.querySelector("#menuknap").classList.toggle("change");
    } else {
        document.querySelector("#menuknap").classList.toggle("change");
    }
}

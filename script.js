// Contador de clics en un botón
let numButtonClicks = 0;
function buttonClicked() {
    numButtonClicks += 1;
    document.getElementById("mainDiv").textContent = "Button Clicked times: " + numButtonClicks;
}

let currentIndex = 0;
const images = [
    {
        src:  "images/Autoretrato_caricatura.png",
        text: "Autorretrato estilizado"
    },
    {
        src:  "images/que-es-un-disenador.png",
        text: "Pieza informativa"
    },
    {
        src:  "images/Antipublicidad_Dep_Com.png",
        text: "Cartel Anti-Publicidad"
    },
    {
        src:  "images/FIS-Animaci%C3%B3n-en-los-ochenta-01-01.jpg",
        text: "Poster Promocional Animación en los ochentas FIS18vo"
    },
    {
        src:  "images/FIS-Una-Mirada-al-pasado-01-01.jpg" ,
        text: "Poster Promocional Cine puertorriqueño FIS18vo"
    },
    {
        src: "images/Harvest_phantom.png",
        text: "Revista Tipografica"
    },
    {
        src: "images/Chango.jpg",
        text: "Fotografía de naturaleza / vida salvaje"
    }
];

function openModal(index) {
    currentIndex = index;
    const modal = document.getElementById("imageModal");
    const modalImage = document.getElementById("modalImage");
    const modalText = document.getElementById("modalText");

    modalImage.src = images[currentIndex].src;
    modalText.innerHTML = images[currentIndex].text;
    modal.style.display = "flex";
}

function closeModal() {
    const modal = document.getElementById("imageModal");
    modal.style.display = "none";
}

function changeImage(direction) {
    currentIndex += direction;

    if (currentIndex < 0) currentIndex = images.length - 1;
    if (currentIndex >= images.length) currentIndex = 0;

    const modalImage = document.getElementById("modalImage");
    const modalText = document.getElementById("modalText");

    modalImage.src = images[currentIndex].src;
    modalText.innerHTML = images[currentIndex].text;
}

// Animación de entrada

document.addEventListener("DOMContentLoaded", () => {

    const cards = document.querySelectorAll(".brand-card, .info-card");

    cards.forEach((card, index) => {

        card.style.opacity = "0";
        card.style.transform = "translateY(50px)";

        setTimeout(() => {

            card.style.transition = "all 0.8s ease";
            card.style.opacity = "1";
            card.style.transform = "translateY(0)";

        }, index * 300);

    });

});

// Hover Premium

const buttons = document.querySelectorAll(".btn");

buttons.forEach(btn => {

    btn.addEventListener("mouseenter", () => {

        btn.style.transform = "translateX(8px)";

    });

    btn.addEventListener("mouseleave", () => {

        btn.style.transform = "translateX(0px)";

    });

});

// Redes Sociales

const socialIcons = document.querySelectorAll(".social a");

socialIcons.forEach(icon => {

    icon.addEventListener("mouseenter", () => {

        icon.style.transform = "scale(1.2)";
        icon.style.transition = "0.3s";

    });

    icon.addEventListener("mouseleave", () => {

        icon.style.transform = "scale(1)";

    });

});

// Mensaje de Bienvenida

setTimeout(() => {

    console.log("Bienvenido a Elegancia & Moda");

}, 1000);

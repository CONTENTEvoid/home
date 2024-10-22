form.addEventListener("submit", function(event) {
    event.preventDefault();
    
    const nome = document.getElementById("nome").value.trim();
    const email = document.getElementById("email").value.trim();
    const mensagem = document.getElementById("mensagem").value.trim();

    if (nome === "" || email === "" || mensagem === "") {
        alert("Por favor, preencha todos os campos antes de enviar.");
    } else {
        alert("Mensagem enviada com sucesso! Agradecemos o seu contato.");
        form.reset();
    }
});

// Slider e outras animações
let slideIndex = 0;
function showSlides() {
    const slides = document.getElementsByClassName("slide");
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1 }
    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 5000);
}
showSlides();

window.changeSlide = function(n) {
    slideIndex += n;
    const slides = document.getElementsByClassName("slide");
    if (slideIndex > slides.length) { slideIndex = 1 }
    if (slideIndex < 1) { slideIndex = slides.length }
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex - 1].style.display = "block";
};

// Efeito de Fade In
document.body.style.opacity = 0;
document.body.style.transition = "opacity 1.5s ease";
window.addEventListener("load", function() {
    document.body.style.opacity = 1;
});

// Efeito de Digitação no Título
const typedText = document.querySelector(".typed-text");
if (typedText) {
    const textArray = typedText.getAttribute("data-text").split(",");
    let arrayIndex = 0;
    let charIndex = 0;
    function type() {
        if (charIndex < textArray[arrayIndex].length) {
            typedText.textContent += textArray[arrayIndex].charAt(charIndex);
            charIndex++;
            setTimeout(type, 150);
        } else {
            setTimeout(erase, 2000);
        }
    }
    function erase() {
        if (charIndex > 0) {
            typedText.textContent = textArray[arrayIndex].substring(0, charIndex - 1);
            charIndex--;
            setTimeout(erase, 100);
        } else {
            arrayIndex++;
            if (arrayIndex >= textArray.length) arrayIndex = 0;
            setTimeout(type, 1500);
        }
    }
    type();
}

// Efeito de Carrossel Automático
const carrosselItems = document.querySelectorAll(".carrossel-item");
let carrosselIndex = 0;
function showCarrosselItem() {
    carrosselItems.forEach(item => item.classList.remove("active"));
    carrosselItems[carrosselIndex].classList.add("active");
    carrosselIndex++;
    if (carrosselIndex >= carrosselItems.length) {
        carrosselIndex = 0;
    }
    setTimeout(showCarrosselItem, 3000);
}
if (carrosselItems.length > 0) {
    showCarrosselItem();
}

// Efeito de Parallax em imagens de fundo
window.addEventListener("scroll", function() {
    const parallaxElements = document.querySelectorAll(".parallax");
    parallaxElements.forEach(element => {
        let speed = element.getAttribute("data-speed");
        element.style.transform = `translateY(${window.scrollY * speed}px)`;
    });
});

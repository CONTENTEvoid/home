document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("contato-form");

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
        if (slides.length === 0) {
            console.error("Nenhum slide encontrado.");
            return;
        }
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
        if (slides.length === 0) {
            console.error("Nenhum slide encontrado.");
            return;
        }
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

    // Outros efeitos e animações...
});

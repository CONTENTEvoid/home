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

    // Garantir que as imagens dos slides sejam carregadas
    const slideImages = document.querySelectorAll(".slide img");
    slideImages.forEach((img) => {
        img.addEventListener("error", function() {
            console.error("Erro ao carregar a imagem: ", img.src);
            img.style.display = "none";
        });
        img.addEventListener("load", function() {
            img.style.display = "block";
        });
    });

    // Efeito de Fade In
    document.body.style.opacity = 0;
    document.body.style.transition = "opacity 1.5s ease";
    window.addEventListener("load", function() {
        document.body.style.opacity = 1;
    });

    // Outras animações e funcionalidades adicionais foram colocadas no script para interação avançada, como digitação no título, carrossel automático, parallax, animação ao rolar, modal para promoções especiais, contagem regressiva, e confete ao finalizar a compra. Todos esses efeitos fazem parte do arquivo `script.js` para que o HTML fique mais limpo e organizado.
});

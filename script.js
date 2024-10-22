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

    // Animação ao Rolar
    const elements = document.querySelectorAll(".reveal");
    
    function revealOnScroll() {
        const windowHeight = window.innerHeight;
        const revealPoint = 150;

        elements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;

            if (elementTop < windowHeight - revealPoint) {
                element.classList.add("active");
            }
        });
    }

    window.addEventListener("scroll", revealOnScroll);

    // Slider
    let slideIndex = 0;
    showSlides();

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

    // Carregamento de Página com Fade In
    document.body.style.opacity = 0;
    document.body.style.transition = "opacity 1.5s ease";
    window.addEventListener("load", function() {
        document.body.style.opacity = 1;
    });

    // Efeito de Parallax em Imagens de Fundo
    window.addEventListener("scroll", function() {
        const parallaxElements = document.querySelectorAll(".parallax");
        parallaxElements.forEach(element => {
            let speed = element.getAttribute("data-speed");
            element.style.transform = `translateY(${window.scrollY * speed}px)`;
        });
    });

    revealOnScroll();
});

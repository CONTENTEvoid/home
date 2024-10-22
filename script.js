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
        setTimeout(showSlides, 5000); // Muda a cada 5 segundos
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

    // Animações de Hover e Transições
    const buttons = document.querySelectorAll("button");

    buttons.forEach(button => {
        button.addEventListener("mouseover", function() {
            button.style.transition = "all 0.3s ease";
            button.style.transform = "translateY(-5px)";
        });

        button.addEventListener("mouseout", function() {
            button.style.transform = "translateY(0)";
        });
    });

    // Efeito de Zoom em Imagens no Slider
    const sliderImages = document.querySelectorAll(".slider-container img");

    sliderImages.forEach(image => {
        image.addEventListener("mouseover", function() {
            image.style.transition = "transform 0.5s ease";
            image.style.transform = "scale(1.05)";
        });

        image.addEventListener("mouseout", function() {
            image.style.transform = "scale(1)";
        });
    });

    // Carregamento de Página com Fade In
    document.body.style.opacity = 0;
    document.body.style.transition = "opacity 1.5s ease";
    window.addEventListener("load", function() {
        document.body.style.opacity = 1;
    });
});

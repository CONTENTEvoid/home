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
});

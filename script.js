document.addEventListener("DOMContentLoaded", function() {
    const infoButton = document.createElement("button");
    infoButton.textContent = "Clique para mais informações";
    infoButton.style.padding = "10px 20px";
    infoButton.style.fontSize = "1em";
    infoButton.style.marginTop = "20px";

    document.body.appendChild(infoButton);

    infoButton.addEventListener("click", function() {
        alert("Este site é um projeto acadêmico de demonstração de TV por IP, feito exclusivamente para a escola.");
    });
});

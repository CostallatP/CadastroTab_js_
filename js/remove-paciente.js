// remove-paciente.js
var tabela = document.querySelector("#tabela-pacientes");
tabela.addEventListener("dblclick", function() {
    event.target.parentNode.remove();
});
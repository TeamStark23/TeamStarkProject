function formatarCPF(event) {
    let cpf = event.target.value;
    cpf = cpf.replace(/\D/g, '');
    cpf = cpf.replace(/(\d{3})(\d)/, "$1.$2");
    cpf = cpf.replace(/(\d{3})(\d)/, "$1.$2");
    cpf = cpf.replace(/(\d{3})(\d{1,2})$/, "$1-$2");
    event.target.value = cpf;
  };

  function formatarDataNascimento(event) {
// Obtém o elemento de entrada (input) e o valor atual digitado nele
const input = event.target;
let value = input.value;

// Verifica se a tecla pressionada é um número
const charCode = event.which ? event.which : event.keyCode;
if (charCode < 48 || charCode > 57) {
  // Se não for um número, cancela o evento de tecla (não insere o caractere)
  event.preventDefault();
  return;
}

// Formatação: 'DD/MM/AAAA'
if (value.length === 2 || value.length === 5) {
  value += '/';
}
// Atualiza o valor no campo de data de nascimento
input.value = value;
}

document.getElementById("cadastroForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Impede o envio do formulário
  
    // Obter os valores dos campos do formulário
    let firstName = document.getElementById("inputFirstName").value;
    let lastName = document.getElementById("inputLastName").value;
    let cpf = document.getElementById("cpf").value;
    let registro = document.getElementById("Registro").value;
    let email = document.getElementById("inputEmailAddress").value;
    let phone = document.getElementById("inputPhone").value;
  
    // Criar uma nova linha na tabela
    let tabela = document.getElementById("listaUsuarios");
    let novaLinha = tabela.insertRow();
  
    // Inserir células na nova linha
    let celulaNome = novaLinha.insertCell();
    celulaNome.textContent = firstName;
  
    let celulaSobrenome = novaLinha.insertCell();
    celulaSobrenome.textContent = lastName;
  
    let celulaCPF = novaLinha.insertCell();
    celulaCPF.textContent = cpf;
  
    let celulaRegistro = novaLinha.insertCell();
    celulaRegistro.textContent = registro;
  
    let celulaEmail = novaLinha.insertCell();
    celulaEmail.textContent = email;
  
    let celulaTelefone = novaLinha.insertCell();
    celulaTelefone.textContent = phone;
  
    // Limpar os campos do formulário
    document.getElementById("cadastroForm").reset();
  });
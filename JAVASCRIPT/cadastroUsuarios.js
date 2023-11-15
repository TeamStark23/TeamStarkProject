function formatarCPF(cpf) {
  cpf = cpf.replace(/\D/g, '');
  cpf = cpf.replace(/(\d{3})(\d)/, "$1.$2");
  cpf = cpf.replace(/(\d{3})(\d)/, "$1.$2");
  cpf = cpf.replace(/(\d{3})(\d{1,2})$/, "$1-$2");
  return cpf;
}

function formatarDataNascimento(data) {
  data = data.replace(/\D/g, '');
  data = data.replace(/(\d{2})(\d)/, "$1/$2");
  data = data.replace(/(\d{2})(\d)/, "$1/$2");
  return data;
}

function formatarTelefone(telefone) {
  telefone = telefone.replace(/\D/g, '');
  telefone = telefone.replace(/(\d{2})(\d{4,5})(\d{4})/, "($1) $2-$3");
  return telefone;
}
function obterDataAtual() {
  const dataAtual = new Date();

  const dia = String(dataAtual.getDate()).padStart(2, '0');
  const mes = String(dataAtual.getMonth() + 1).padStart(2, '0'); // Mês é baseado em zero
  const ano = dataAtual.getFullYear();

  const dataFormatada = `${dia}/${mes}/${ano}`;

  return dataFormatada;
}
// Função para criar o botão de excluir
function criarBotaoExcluir() {
  let botao = document.createElement("button");
  botao.textContent = "X";
  botao.className = "btn btn-warning";
  botao.addEventListener("click", function () {
    excluirLinha(this);
  });
  return botao;
}

// Função para excluir a linha após confirmar a senha
function excluirLinha(botaoExcluir) {
  let linha = botaoExcluir.parentNode.parentNode;
  let senha = prompt("Digite sua senha para confirmar a exclusão:");

  // Aqui, você deve verificar a senha. Isso é apenas um exemplo básico.
  if (senha === "admin123") {
    linha.remove();
  } else {
    alert("Senha incorreta. Exclusão cancelada.");
  }
}

document.getElementById("cadastroForm").addEventListener("submit", function (event) {
  event.preventDefault(); // Impede o envio do formulário

  // Obter os valores dos campos do formulário
  let firstName = document.getElementById("inputFirstName").value;
  let lastName = document.getElementById("inputLastName").value;
  let cpf = document.getElementById("cpf").value;
  let registro = document.getElementById("Registro").value;
  let email = document.getElementById("inputEmailAddress").value;
  let phone = document.getElementById("inputPhone").value;

  // Formatar os dados
  cpf = formatarCPF(cpf);
  const dataAtual = obterDataAtual();
  registro = formatarDataNascimento(dataAtual);
  phone = formatarTelefone(phone);

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

  // Adicionar o botão de excluir à nova linha
  let celulaExcluir = novaLinha.insertCell();
  celulaExcluir.appendChild(criarBotaoExcluir());

  // Limpar os campos do formulário
  document.getElementById("cadastroForm").reset();
});
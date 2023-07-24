function validateForm(event) {
  event.preventDefault(); // Evita o envio do formulário

  // Obter os valores digitados pelo usuário
  var login = document.getElementById('login').value;
  var senha = document.getElementById('senha').value;

  // Verificar se o login e a senha correspondem aos valores desejados
  var loginCorreto = 'admin';
  var senhaCorreta = 'admin123';

  if (login === loginCorreto && senha === senhaCorreta) {
    // Redirecionar para a página inicial (homepage)
    window.location.href = 'homePage.html';
  } else {
    alert('Login ou senha incorretos!');
  }
}
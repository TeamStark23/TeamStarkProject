
    function saveChanges() {
        // Recuperar os valores inseridos pelo usu�rio
        let firstName = document.getElementById('inputFirstName').value;
        let lastName = document.getElementById('inputLastName').value;
        let cpf = document.getElementById('inputOrgName').value;
        let birthday = document.getElementById('inputBirthday').value;
        let email = document.getElementById('inputEmailAddress').value;
        let phoneNumber = document.getElementById('inputPhone').value;
        let address = document.getElementById('inputLocation').value;
        let password = document.getElementById('inputPassword').value;
        let confirmPassword = document.getElementById('inputConfirmPassword').value;

    
        alert("Alterações salvas com sucesso!");
    }

    function formatarCPF(event) {
        let cpf = event.target.value;
        cpf = cpf.replace(/\D/g, '');
        cpf = cpf.replace(/(\d{3})(\d)/, "$1.$2");
        cpf = cpf.replace(/(\d{3})(\d)/, "$1.$2");
        cpf = cpf.replace(/(\d{3})(\d{1,2})$/, "$1-$2");
        event.target.value = cpf;
      }
      function formatardata(event) {
        let data = event.target.value;
        data =  data.replace(/\D/g, '');
        data =  data.replace(/(\d{2})(\d)/, "$1/$2");
        data =  data.replace(/(\d{2})(\d)/, "$1/$2");
       // data =  data.replace(/(\d{2})(\d{2})(\d{2})$/, );
        data =  data.replace(/(\d{4})(\d{3})(\d{3})(\d{3})$/);;
        
        event.target.value =  data;
      }
      function formatarTelefone(event) {
        let telefone = event.target.value;
        telefone = telefone.replace(/\D/g, ''); // Remove todos os caracteres não numéricos
    
        if (telefone.length <= 2) {
          telefone = telefone.replace(/^(\d{0,2})/, '($1'); // Insere '(' após os dois primeiros dígitos
        } else if (telefone.length <= 6) {
          telefone = telefone.replace(/^(\d{0,2})(\d{0,4})/, '($1) $2'); // Insere '()' e espaço após o DDD
        } else if (telefone.length <= 11) {
          telefone = telefone.replace(/^(\d{0,2})(\d{0,1})(\d{0,4})(\d{0,4})/, '($1) $2-$3-$4'); // Insere '-' após o primeiro grupo de 4 dígitos
        } else {
          telefone = telefone.replace(/^(\d{0,2})(\d{0,1})(\d{0,4})(\d{0,4})(\d{0,4}).*/, '($1) $2-$3-$4'); // Limita a 14 dígitos
        }
    
        event.target.value = telefone;
      }
  ////////////////////////////////////////////////////////////////////////////////////////////////

  document.addEventListener("DOMContentLoaded", function () {
    const buttonEditar = document.getElementById("btnEdit");
    const inputs = document.querySelectorAll("input");
    buttonEditar.addEventListener("click", function () {
      inputs.forEach(function (input) {
        input.disabled = !input.disabled;
      });
    });
  });
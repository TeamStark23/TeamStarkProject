function handleImageUpload() {
    let input = event.target.previousElementSibling;
    let profileImages = document.getElementsByClassName('profile-image');

    input.click(); // Simulate a click on the file input element

    input.addEventListener('change', function() {
      let reader = new FileReader();
      reader.onload = function(event) {
        for (let i = 0; i < profileImages.length; i++) {
          profileImages[i].src = event.target.result;
        }
      };
      reader.readAsDataURL(input.files[0]);
    });
  }

  $(document).ready(function() {
    $('button[type="submit"]').on('click', function() {
      let imageFile = $('.image-upload')[0].files[0];
      if (imageFile) {
        let formData = new FormData();
        formData.append('image', imageFile);

        $.ajax({
          url: '/salvar-imagem', // Endpoint do servidor para salvar a imagem
          type: 'POST',
          data: formData,
          contentType: false,
          processData: false,
          success: function(response) {
            // Lógica de manipulação da resposta do servidor após salvar a imagem
            console.log('Imagem salva com sucesso!');
          },
          error: function(error) {
            // Lógica de tratamento de erros
            console.error('Erro ao salvar a imagem:', error);
          }
        });
      }
    });
  });
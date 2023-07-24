let vagasStatus = {};
let tipoVeiculo = null;
let ocupacaoVaga = null;
let vaga = null;

function selectCar() {
  resetTipoVeiculo();
  tipoVeiculo = 'carro';
  ocupacaoVaga = 2;
  dataHora =  obterDataHoraAtual();
}

function selectMoto() {
  resetTipoVeiculo();
  tipoVeiculo = 'moto';
  ocupacaoVaga = 1;
  dataHora =  obterDataHoraAtual();
}

function reserveVaga(numero) {
  let vagaStatus = vagasStatus[numero];
  if (vagaStatus) {
    if (tipoVeiculo === 'moto' && vagaStatus.tipoVeiculo === 'moto') {
      if (vagaStatus.segundaSelecao) {
        let confirmacao = confirm("Deseja reservar a vaga? Já há uma moto nesta vaga!");
        if (confirmacao) {
          vagaStatus.ocupacaoVaga = 2;
        }
      } else {
        vagaStatus.segundaSelecao = true;
      }
    } else {
      alert("Essa vaga já está ocupada!");
    }
  } else {
    let confirmacao = confirm(`Deseja reservar a vaga?`);
    if (confirmacao) {
      let codigo = gerarCodigo();
      vagasStatus[numero] = {
        tipoVeiculo: tipoVeiculo,
        ocupacaoVaga: ocupacaoVaga,
        vaga:`${numero}`,
        codigo: codigo,
        dataHora: dataHora
      };
    }
  }
  atualizarVagas();
}

function gerarCodigo() {
  let caracteres = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '!', '@', '#', '$'];
  let codigo = [];
  let caracteresLength = caracteres.length;

  for (let i = 0; i < 9; i++) {
    let indice = Math.floor(Math.random() * caracteresLength);
    codigo.push(caracteres[indice]);
  }

  return codigo.join('');
}

function obterDataHoraAtual() {
  let dataHoraAtual = new Date();
  let dia = ("0" + dataHoraAtual.getDate()).slice(-2);
  let mes = ("0" + (dataHoraAtual.getMonth() + 1)).slice(-2);
  let ano = dataHoraAtual.getFullYear();
  let horas = ("0" + dataHoraAtual.getHours()).slice(-2);
  let minutos = ("0" + dataHoraAtual.getMinutes()).slice(-2);
  let segundos = ("0" + dataHoraAtual.getSeconds()).slice(-2);
  let dataHoraFormatada = dia + "/" + mes + "/" + ano + " " + horas + ":" + minutos + ":" + segundos;

  return dataHoraFormatada;
}

function atualizarVagas() {
  let vagas = document.getElementsByClassName("vaga");
  
  for (let i = 0; i < vagas.length; i++) {
    let vaga = vagas[i];
    let numeroVaga = i + 1;
    let vagaStatus = vagasStatus[numeroVaga];

    if (vagaStatus) {
      if (vagaStatus.tipoVeiculo === 'moto') {
        vaga.style.backgroundColor = vagaStatus.ocupacaoVaga === 1 ? 'orange' : 'red';
      } else if (vagaStatus.tipoVeiculo === 'carro') {
        vaga.style.backgroundColor = 'red';
      }
    } else {
      vaga.style.backgroundColor = 'green';
    }
  }

  let vagasOcupadas = Object.keys(vagasStatus).length;
  let vagasLivres = vagas.length - vagasOcupadas;

  document.getElementById("vagasOcupadas").textContent = `Ocupadas: ${vagasOcupadas}`;
  document.getElementById("vagasLivres").textContent = `Livres: ${vagasLivres}`;
}

function resetTipoVeiculo() {
  tipoVeiculo = null;
  ocupacaoVaga = null;
  dataHora = null;
}

atualizarVagas();


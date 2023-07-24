// Grafico de Barra
let valoresAleatoriosA = Math.floor(Math.random() * 200) + 200;
let valoresAleatoriosB = Math.floor(Math.random() * 1000) + 1000;
let valoresAleatoriosC = Math.floor(Math.random() * 1500) + 10000;
let pDia = 10;

let painel = [];
let dados1 = [];
let dados2 = [];

function criarGrafico(painel, dados1, dados2) {
  let ctx = document.getElementById("Canvas").getContext("2d");

  new Chart(ctx, {
    type: "bar",
    data: {
      labels: painel,
      datasets: [
        {
          label: "carro",
          data: dados1,
          backgroundColor: 'rgb(196, 160, 0, 0.5)',
          borderColor: 'rgb(255, 195, 0)',
          color: 'rgba(255, 255, 255,)',
          borderWidth: 1
        },
        {
          label: "motos",
          data: dados2,
          backgroundColor: 'rgb(195, 195, 195, 0.5)',
          borderColor: 'rgb(255, 255, 255)',
          color: 'rgba(255, 255, 255, 1)',
          borderWidth: 1
        }
      ]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true,
          stepSize: 10,
          grid: {
            color: 'rgba(255, 255, 255, 0.5)'
          },
          ticks: {
            color: 'rgba(255, 255, 255, 1)' // Cor dos valores do eixo y (branco)
         }
        },
        x: {
          ticks: {
              color: 'rgba(255, 255, 255, 1)' // Cor dos valores do eixo x (branco)
          }
      }     
      },
      plugins: {
        legend: {
            labels: {
                color: 'rgba(255, 255, 255, 1)' // Cor das legendas (branco)
            }
        }
    }
    }
  });
}


function atualizarGrafico(painel, dados1, dados2) {
  let chart = Chart.getChart("Canvas");

  chart.data.labels = painel;
  chart.data.datasets[0].data = dados1;
  chart.data.datasets[1].data = dados2;

  chart.update();
}

document.getElementById("botao1").addEventListener("click", function () {
  let novosDados1 = [Math.round(valoresAleatoriosA*0.9 ), Math.round(valoresAleatoriosA*1.3) , Math.round(valoresAleatoriosA*1.5)];
  let novosDados2 = [Math.round(valoresAleatoriosA*0.4 ) ,Math.round(valoresAleatoriosA*0.6 ) , Math.round(valoresAleatoriosA*0.8)];
  painel = ["Manhã", "Tarde", "Noite"];
  atualizarGrafico(painel, novosDados1, novosDados2, pDia);
  
  
});

document.getElementById("botao2").addEventListener("click", function () {
  let novosDados1 = [Math.round(valoresAleatoriosB*1.795 ),Math.round(valoresAleatoriosB*1.356 ),Math.round(valoresAleatoriosB*1.578 ),Math.round(valoresAleatoriosB*1.8 )];
  let novosDados2 = [Math.round(valoresAleatoriosB*0.875*1.1 ),Math.round(valoresAleatoriosB*0.675 ),Math.round(valoresAleatoriosB*0.848 ),Math.round(valoresAleatoriosB*0.987 )];
  painel = ["primeira-Semana", "segunda-Semana", "terceira-Semana", "Quarta-Semana"];
  atualizarGrafico(painel, novosDados1, novosDados2);

});

document.getElementById("botao3").addEventListener("click", function () {
  let novosDados1 = [Math.round(valoresAleatoriosC*1.254 ), Math.round(valoresAleatoriosC*1.495 ), Math.round(valoresAleatoriosC*1.595 )];
  let novosDados2 = [Math.round(valoresAleatoriosC*0.395 ), Math.round(valoresAleatoriosC*0.525 ), Math.round(valoresAleatoriosC*0.723 )];
  painel = ["Janeiro", "Fevereiro", "Março"];
 
  atualizarGrafico(painel, novosDados1, novosDados2);
  
});

criarGrafico(painel, dados1, dados2);

// Grafico Pizza
let labels = ["vagas livres", "vagas ocupadas"];

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

let data1 = [getRandomInt(0, 10), getRandomInt(2, 10)];
let data2 = [getRandomInt(0, 10), getRandomInt(2, 10)];
let data3 = [getRandomInt(0, 10), getRandomInt(2, 10)];
let data4 = [getRandomInt(0, 10), getRandomInt(2, 10)];
let data5 = [getRandomInt(0, 10), getRandomInt(2, 10)];
let data6 = [getRandomInt(0, 10), getRandomInt(2, 10)];
let data7 = [getRandomInt(0, 10), getRandomInt(2, 10)];
let data8 = [getRandomInt(0, 10), getRandomInt(2, 10)];
let data9 = [getRandomInt(0, 10), getRandomInt(2, 10)];
let data10 = [getRandomInt(0, 10), getRandomInt(2,10)];

// Normalizando para garantir que a soma dos valores em cada array seja 10
let normalizeArray = (arr) => {
  let total = arr.reduce((sum, value) => sum + value, 0);
  let multiplier = 100 / total;
  return arr.map((value) => Math.round(value * multiplier));
};

data1 = normalizeArray(data1);
data2 = normalizeArray(data2);
data3 = normalizeArray(data3);
data4 = normalizeArray(data4);
data5 = normalizeArray(data5);
data6 = normalizeArray(data6);
data7 = normalizeArray(data7);
data8 = normalizeArray(data8);
data9 = normalizeArray(data9);
data10 = normalizeArray(data10);

function criarGraficoPizza(containerId, canvasId, labels, data) {
  let canvas = document.getElementById(canvasId);
  let ctx = canvas.getContext("2d");

  new Chart(ctx, {
    type: "pie",
    data: {
      labels: labels,
      datasets: [{
        data: data,
        backgroundColor: ["rgb(196, 160, 0, 0.5)", "rgb(195, 195, 195, 0.5)"]
        
      }]
    },
    options: {
      plugins: {
        legend: {
          align: "start",
          color: "rgb(196, 160, 0, 0.5)"
        },
        tooltip: {
          callbacks: {
            label: function (context) {
              let label = context.label || "";

              if (label) {
                label += ": ";
              }

              let value = context.formattedValue;
              value = value.replace(/%/g, ""); // Remove o '%' do valor
              value = parseFloat(value).toFixed(0); // Formata para duas casas decimais
              value += "%"; // Adiciona o '%' novamente

              return label + value;
            }
          }
        }
      }
    }
  });
}

criarGraficoPizza("ctnPizza", "chart1", labels, data1);
criarGraficoPizza("ctnPizza", "chart2", labels, data2);
criarGraficoPizza("ctnPizza", "chart3", labels, data3);
criarGraficoPizza("ctnPizza", "chart4", labels, data4);
criarGraficoPizza("ctnPizza", "chart5", labels, data5);
criarGraficoPizza("ctnPizza", "chart6", labels, data6);
criarGraficoPizza("ctnPizza", "chart7", labels, data7);
criarGraficoPizza("ctnPizza", "chart8", labels, data8);
criarGraficoPizza("ctnPizza", "chart9", labels, data9);
criarGraficoPizza("ctnPizza", "chart10", labels, data10);

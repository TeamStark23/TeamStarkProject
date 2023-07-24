let quantidadeCarros = Math.floor(Math.random() * 700) + 1;
let quantidadeMotos = Math.floor(Math.random() * 200) + 1;

let quantidadeCarrosDois = Math.floor(Math.random() * 23000 + 500) + 1;
let quantidadeMotosDois = Math.floor(Math.random() * 12000 + 500) + 1;

document.getElementById('carros').innerText = quantidadeCarros;
document.getElementById('motos').innerText = quantidadeMotos;

document.getElementById('carrosDois').innerText = quantidadeCarrosDois;
document.getElementById('motosDois').innerText = quantidadeMotosDois;


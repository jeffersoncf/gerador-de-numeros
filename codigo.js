function random() {
    let valorMinimo = parseInt(document.getElementById('valorMinimo').value);
    let valorMaximo = parseInt(document.getElementById('valorMaximo').value);
    
    document.getElementById('numero').innerText = Math.floor(Math.random() * (valorMaximo - valorMinimo) ) + valorMinimo;
}
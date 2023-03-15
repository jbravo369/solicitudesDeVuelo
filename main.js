

function mostrarValor() {

  localStorage.setItem('nSol', document.getElementById('nSol').value);

  window.location.href = 'asignacion_vuelo.html';

}

window.addEventListener('load', function() {

  const nSol = localStorage.getItem('nSol');

  if (nSol) {
    document.getElementById('solicitud').value = nSol;
  }

});


function borrarValor(){

  localStorage.clear();
}








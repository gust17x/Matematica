var continuarExecucao = true;

function funcaoA() {
  var contador = 0;
  
  var intervalo = setInterval(function() {
    contador++;
    console.log('Executando função A: ' + contador);
    
    if (!continuarExecucao) {
      clearInterval(intervalo);
      console.log('Função A interrompida.');
    }
  }, 1000);
}

function funcaoB() {
  console.log('Executando função B');
  continuarExecucao = false;
}

funcaoA();  // Inicia a execução da função A
funcaoB();  // Interrompe a execução da função A

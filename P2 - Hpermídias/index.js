window.addEventListener('load', function(){
  var botao = document.getElementById('botao').addEventListener('click', validar);
});
function validar(){
  var letra = "^[ a-zA-Z ]*$"
	var numero = "^[0-9]*$";

  nome = document.getElementById('nome').value;

  var contagem = 0;

  if(nome == ""){
    alert("Nome deve ser preenchido");
      contagem++;
  }
  if(nome.match(letra) == null){
  	alert("O campo nome deve conter apenas letras");
    contagem++;
  }

  email = document.getElementById('email').value;
  email2 = document.getElementById('email2').value;

  var RegExpEmail = /^\w*(\.\w*)?@[a-z].[a-z]+(\.[a-z]+)?$/;

  if(email.search(RegExpEmail) !=-1){
    alert('Email Validado')
  }
  else{
    alert('Email Inválido')
    contagem++;
  }

  if(email != email2){
    alert("E-mail e Confirmar E-mail não podem ser diferentes");
    contagem++;
  }
  if(contagem == 0){
    calcular();
  }
  else{
    alert('Corrija seus dados!');
  }
}

function calcular(){

  var entrada = new Date(document.getElementById('data-entrada').value);
  var saida = new Date(document.getElementById('data-saida').value);
  var aux_entrada = entrada.getTime();
  var aux_saida = saida.getTime();

  aux_entrada = aux_entrada / (1000 * 3600 * 24);
  aux_saida = aux_saida / (1000 * 3600 * 24);

  var dias = 0;
  dias = aux_saida - aux_entrada;

  var hospede =  document.getElementById("hospede");
  var geral = ((hospede.value - 4) * 49) + 239.9;
  var quarto =  document.getElementById("quarto");
  var total = 0;

  if ((hospede.value > 4)&(dias >= 1)){
      hospede = (((hospede.value - 4) * 49) + 239.9) * dias;
      alert("O número de hóspedes é maior que quatro pessoas. Foi inserido um adicional a diária de R$60,00 reais por pessoa excedente no quarto." + "\n" + "Total da diária: R$" + hospede);
  }
  if((hospede.value >= 1)&(hospede.value <= 4)&(quarto.value >= 1)){
      total = geral + (quarto.value * 239.9) * dias;
      alert("Total da hospedagem: R$" + total);
  }


}

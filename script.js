const email = document.querySelector('#email');
const senha = document.querySelector('#senha');
const botao = document.querySelector('#botao');

function teste() {
  if (email.value === 'tryber@teste.com' && senha.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
}
botao.addEventListener('click', teste);

const botao2 = document.querySelector('#submit-btn');
const checkbox = document.querySelector('#agreement');

function ativarbotao() {
  botao2.disabled = !checkbox.checked;
  // if(checkbox.checked === true){
  //   botao2.disabled = botao2.enabled;
}

checkbox.addEventListener('change', ativarbotao);

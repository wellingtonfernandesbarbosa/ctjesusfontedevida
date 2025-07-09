console.log('Hello World! This is the main.js file of your project.');

// Seleciona todos os botões dentro da div com a classe contact-info
const contactButtons = document.querySelectorAll('.contact-info button');

// Função para vibrar o dispositivo
function darFeedbackHaptico() {
  if ('vibrate' in navigator) {
    navigator.vibrate(50); // vibra por 50ms
  }
}

// Adiciona o evento de clique a cada botão
contactButtons.forEach(button => {
  button.addEventListener('click', () => {
    darFeedbackHaptico();
  });
});

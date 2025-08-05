// --- Feedback háptico ---
function darFeedbackHaptico() {
  if ("vibrate" in navigator) {
    navigator.vibrate(50); // vibra por 50ms
  }
}

// Aplica o feedback háptico a todos os botões da página
document.querySelectorAll("button").forEach((button) => {
  button.addEventListener("click", () => {
    darFeedbackHaptico();
  });
});

// --- Função para copiar o código Pix ---
function copiarCodigoPix() {
  const textarea = document.getElementById("pix-code");

  if (!textarea) return;

  textarea.select();
  textarea.setSelectionRange(0, 99999); // para mobile
  document.execCommand("copy");

  navigator.clipboard
    .writeText(textarea.value)
    .then(() => {
      darFeedbackHaptico();
      const botao = document.getElementById("copy-pix-button");
      botao.textContent = "✅ Copiado!";
      setTimeout(() => (botao.textContent = "Copiar Pix"), 1500);
    })
    .catch(() => alert("Código copiado, mas a API moderna falhou."));
}


// Adiciona o evento ao botão copiar Pix
document.addEventListener("DOMContentLoaded", () => {
  const botaoCopiarPix = document.getElementById("copy-pix-button");
  if (botaoCopiarPix) {
    botaoCopiarPix.addEventListener("click", copiarCodigoPix);
  }
});

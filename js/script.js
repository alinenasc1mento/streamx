function toggleMenu() {
  var menuPerfil = document.getElementById("menuPerfil");
  menuPerfil.style.display = menuPerfil.style.display === "block" ? "none" : "block";
}




// Capturar elementos
const abrirPopupBtn = document.getElementById("abrirPopup");
const popup = document.getElementById("popup");
const fecharPopupBtn = document.getElementById("fecharPopup");

// Função para abrir o popup
abrirPopupBtn.addEventListener("click", () => {
  popup.style.display = "block";
});

// Função para fechar o popup
fecharPopupBtn.addEventListener("click", () => {
  popup.style.display = "none";
});


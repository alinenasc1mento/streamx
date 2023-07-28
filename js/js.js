 
const abrirPopupBtn = document.getElementById("abrirPopup");
const popup = document.getElementById("popup");
const fecharPopupBtn = document.getElementById("fecharPopup");

 
abrirPopupBtn.addEventListener("click", () => {
  popup.style.display = "block";
});

 
fecharPopupBtn.addEventListener("click", () => {
  popup.style.display = "none";
});

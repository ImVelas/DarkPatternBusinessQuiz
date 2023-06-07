window.addEventListener("load", function () {
  var cookiePopup = document.getElementById("popup");
  var cookiePopupOverlay = document.getElementById("Overlay");
  var cookieAcceptButton = document.getElementById("cookieAcceptButton");
  var cookieDenyButton = document.getElementById("cookieDenyButton");

  cookiePopup.style.display = "block";
  cookiePopupOverlay.style.display = "block";

  cookieAcceptButton.addEventListener("click", function () {
    cookiePopup.style.display = "none";
    cookiePopupOverlay.style.display = "none";
  });
  cookieDenyButton.addEventListener("click", function () {
    cookiePopupOverlay.style.display = "none";
    cookiePopup.style.display = "none";
  });
});

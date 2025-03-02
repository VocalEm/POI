document.addEventListener("DOMContentLoaded", function () {
  // Obtener el contenedor del chat
  let chat = document.getElementById("chat");

  // Función para desplazar el chat hasta el final
  function scrollToBottom() {
    if (chat) {
      chat.scrollTop = chat.scrollHeight;
    }
  }

  // Desplazar el chat hasta el final cuando se cargue la página
  window.onload = scrollToBottom;

  // Obtener las flechas y el contenedor de stickers
  const leftArrow = document.getElementById("left-arrow");
  const rightArrow = document.getElementById("right-arrow");
  const stickers = document.querySelectorAll(".informacion_sticker img");
  let currentIndex = 0;

  // Función para actualizar la visibilidad de los stickers
  function updateStickers() {
    stickers.forEach((sticker, index) => {
      if (index === currentIndex) {
        sticker.classList.add("visible");
        sticker.classList.remove("hidden");
      } else {
        sticker.classList.add("hidden");
        sticker.classList.remove("visible");
      }
    });
  }

  // Inicializar la visibilidad de los stickers
  updateStickers();

  // Event listener para la flecha izquierda
  if (leftArrow) {
    leftArrow.addEventListener("click", function () {
      if (currentIndex > 0) {
        currentIndex--;
        updateStickers();
      }
    });
  }

  // Event listener para la flecha derecha
  if (rightArrow) {
    rightArrow.addEventListener("click", function () {
      if (currentIndex < stickers.length - 1) {
        currentIndex++;
        updateStickers();
      }
    });
  }
});

document.addEventListener("DOMContentLoaded", function () {
  function esperarCampoBusca(callback) {
    const check = setInterval(() => {
      const container = document.querySelector(
        '[data-hover-element="header_search"], .header_search'
      );
      if (container) {
        clearInterval(check);
        callback(container);
      }
    }, 300);
  }

  esperarCampoBusca((container) => {
    const typingLine = document.createElement("div");
    typingLine.id = "rushb-typing";
    typingLine.style.cssText = `
      text-align: center;
      font-family: 'Rubik', sans-serif;
      font-size: 15px;
      font-weight: 600;
      color: #f97316;
      text-shadow: 0 0 8px rgba(249,115,22,0.8);
      margin-top: 12px;
      letter-spacing: 0.5px;
      min-height: 26px;
      transition: opacity 0.4s ease-in-out;
    `;
    container.parentElement.insertAdjacentElement("afterend", typingLine);

    const frases = [
      "A maior loja de camisetas de CS2 do Brasil! 🧢",
      "Promoções de lançamento disponíveis 💥",
      "Coleção Mirage e Dust2 já no ar 🔥",
      "RushB Store — Vista seu jogo! ⚡",
    ];

    let i = 0,
      j = 0,
      cursor = true,
      intervaloCursor;

    function atualizarTexto() {
      typingLine.textContent = frases[i].substring(0, j) + (cursor ? "|" : "");
    }

    function iniciarCursor() {
      clearInterval(intervaloCursor);
      intervaloCursor = setInterval(() => {
        cursor = !cursor;
        atualizarTexto();
      }, 400);
    }

    function digitarFrase() {
      if (j < frases[i].length) {
        j++;
        atualizarTexto();
        setTimeout(digitarFrase, 30);
      } else {
        setTimeout(() => {
          typingLine.style.opacity = "0";
          clearInterval(intervaloCursor);
          setTimeout(() => {
            i++;
            if (i < frases.length) {
              j = 0;
              typingLine.style.opacity = "1";
              cursor = true;
              atualizarTexto();
              iniciarCursor();
              digitarFrase();
            } else {
              typingLine.style.opacity = "1";
              typingLine.textContent = frases[frases.length - 1];
              setTimeout(() => {
                typingLine.style.opacity = "0";
              }, 2000);
            }
          }, 600);
        }, 1400);
      }
    }

    setTimeout(() => {
      iniciarCursor();
      digitarFrase();
    }, 800);
  });
});

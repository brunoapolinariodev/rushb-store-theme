<script>
document.addEventListener("DOMContentLoaded", function () {   // abre #1
  function esperarCampoBusca(callback) {                      // abre #2
    const check = setInterval(() => {                         // abre #3
      const container = document.querySelector(...);
      if (container) {
        clearInterval(check);
        callback(container);
      }                                                       // fecha if
    }, 300);                                                  // fecha setInterval #3
  }                                                           // fecha function #2

  esperarCampoBusca((container) => {                          // abre #4
    const typingLine = document.createElement("div");
    // ...
    function atualizarTexto() { ... }                         // abre/fecha interno
    function iniciarCursor() { ... }                          // abre/fecha interno
    function digitarFrase() {                                 // abre #5
      if (j < frases[i].length) {
        // ...
      } else {
        setTimeout(() => {                                    // abre #6
          typingLine.style.opacity = "0";
          clearInterval(intervaloCursor);
          setTimeout(() => {                                  // abre #7
            i++;
            if (i < frases.length) {
              // ...
            } else {
              // ...
              setTimeout(() => {                              // abre #8
                typingLine.style.opacity = "0";
              }, 2000);                                       // fecha #8
            }                                                 // fecha else
          }, 600);                                            // fecha #7
        }, 1400);                                             // fecha #6
      }                                                       // fecha if
    }                                                         // fecha function #5

    setTimeout(() => {                                        // abre #9
      iniciarCursor();
      digitarFrase();
    }, 800);                                                  // fecha #9
  });                                                         // fecha esperarCampoBusca #4
});                                                           // fecha addEventListener #1
 </script>
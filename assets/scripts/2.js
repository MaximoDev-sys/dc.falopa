
    document.addEventListener("contextmenu", function(e) {
      e.preventDefault();
      mostrarElectricidad(e.pageX, e.pageY);
    });

    function mostrarElectricidad(x, y) {
      const efecto = document.createElement('div');
      efecto.className = 'electric-effect';
      efecto.style.left = (x - 40) + 'px';
      efecto.style.top = (y - 40) + 'px';
      document.body.appendChild(efecto);

      setTimeout(() => {
        efecto.remove();
      }, 500);
    }
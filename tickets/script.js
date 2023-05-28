
  function calcularResultado() {
    // Obtener los valores ingresados por el usuario
    var cantidadEntradas = parseInt(document.getElementById('cantidadEntradas').value);
    var categoria = document.getElementById('categoria').value;
    
    // Calcular el precio sin descuento
    var precioSinDescuento = cantidadEntradas * 200;
    
    // Aplicar descuentos según la categoría
    var descuento = 0;
    
    if (categoria === 'Estudiante') {
      descuento = 0.8;
    } else if (categoria === 'Trainee') {
      descuento = 0.5;
    } else if (categoria === 'Junior') {
      descuento = 0.15;
    }
    
    var precioConDescuento = precioSinDescuento * (1 - descuento);
    
    // Mostrar el resultado en el elemento con id "resultado"
    document.getElementById('resultado').innerHTML = 'Total a pagar: $' + precioConDescuento.toFixed(2);
  }
  function borrarCampos() {
    // Restablecer los valores de los campos del formulario
    document.getElementById('nombre').value = '';
    document.getElementById('apellido').value = '';
    document.getElementById('correo').value = '';
    document.getElementById('cantidadEntradas').value = '';
    document.getElementById('categoria').value = 'Estudiante';
    
    // Restablecer el resultado a su valor predeterminado
    document.getElementById('resultado').innerHTML = 'El valor total es: $0.00';
  }
 
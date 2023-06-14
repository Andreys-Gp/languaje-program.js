// called when page loads; sets up event handlers
window.onload = function() {
    var computeButton = document.getElementById("calculac2f");
    computeButton.onclick = c2f;
  };
  
  function c2f() {
    var celsius = document.getElementById("celsius").value;   
  
    var answer = document.getElementById("answer");
  
    var fahr = celsius*9./5. + 32.;   
  
    var estado;
    
    if (fahr < 41. )
       estado = "hace fr&iacute;o.";
    else if (fahr > 77. )
       estado = " hace calor.";
    else 
       estado = " la temperatura es normal.";
  
    answer.innerHTML = "La temperatura en grados Fahrenheit es de " + fahr.toFixed(2) + " grados, " + estado;
  }
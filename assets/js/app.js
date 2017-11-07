function add (){
  var comments= document.getElementById('comment').value;// con esto estamos incluyendo el valor de ingreso dentro de nuestra textarea


  var cont= document.getElementById('cont');

  document.getElementById('comment').value = ""; // con esto se limpia el cuadro de texto para volver a escribir//
  var NewComments= document.createElement('div');// aca se almacena los textos//


  var paragraph= document.createElement('p');
  var nodoText=document.createTextNode(comments);
  //creamos la familia, asiganamos padres los hijos para la intercción.
  paragraph.appendChild(nodoText);
  NewComments.appendChild(paragraph);
  cont.appendChild(NewComments);
  //creando el contador de caracteres

    }
    var button = document.getElementById('btn');
    button.disabled=true;

function disab(element){
  if(element === ''){
    button.disabled = true;
  }else {
    button.disabled = false;
  }
  var valor=document.getElementById('conteo');
  var max=140;
  var text=document.getElementById('comment').value;
  var long=text.length;
  valor.innerHTML=max-long;
}

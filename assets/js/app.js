function add (){
  var comments= document.getElementById('comment').value;// con esto estamos incluyendo el valor de ingreso dentro de nuestra textarea
  var comment=document.getElementById('comment');

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
  var valor=document.getElementById('conteo');//creando el contador
  var max=140;//el contadr empieza en
  var text=document.getElementById('comment').value;
  var long=text.length;// se asocia el contador versus el largo de las letras
  valor.innerHTML=max-long;//con esto ingresamos al HTML para modificar el contenido de el elememnto p que congtiene el nuemro del contador
  autosize(element);
}
function autosize (el){//esta funcion sire para que mi caja de texto crezca en base a los caracteres ingresados
  setTimeout(function(){
    el.style.cssText= 'heigth:auto;padding:0';
    el.style.cssText='heigth:'+ el.scrollHeight + 'px';
  },0);
}
var textarea = document.querySelector('textarea');

textarea.addEventListener('keydown', autosize);

function autosize(){
  var el = this;
  setTimeout(function(){
    el.style.cssText = 'height:auto; padding:0';
    el.style.cssText = 'height:' + el.scrollHeight + 'px';
  },0);
}

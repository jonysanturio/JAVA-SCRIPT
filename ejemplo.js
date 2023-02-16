let boton = document.getElementById('sumar');
let repuesta = document.getElementById('repuesta');

boton.addEventListener('click',hacerSuma);

function hacerSuma(){
    let n1=parseFloat(document.getElementById('n1').value);
    let n2=parseFloat(document.getElementById('n2').value);
    let s=n1+n2;
    repuesta.innerHTML=`La Suma Es ${s}`;
    if (s %2==0) {
        alert ("El numero es par");
    } else {
        alert("El numuero es impar");
    }

}

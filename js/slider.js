//slider---------------------------------------

let imagenactual = 0;


const slider = (datos,index, aviso) =>{


    if(imagenactual >= 3){

        imagenactual = 0

    }

    if(imagenactual < 0){

        imagenactual = 2 

    }


let imagen = document.getElementById(`imagen_${datos.posting_id}`).src = `imagenes/aviso${aviso}/${imagenactual}.jpg`;

let indice = document.getElementById(`indice_${datos.posting_id}`).innerHTML = `${imagenactual + 1 } / 3`

};

//aviso1

slider(aviso1,imagenactual,1);

document.getElementById(`atras_${aviso1.posting_id}`).addEventListener('click', () => {
slider(aviso1,--imagenactual,1);
});

document.getElementById(`adelante_${aviso1.posting_id}`).addEventListener('click', () => {
slider(aviso1,++imagenactual,1);
});


//aviso2

slider(aviso2,imagenactual,2);

document.getElementById(`atras_${aviso2.posting_id}`).addEventListener('click', () => {
slider(aviso2,--imagenactual,2);
});

document.getElementById(`adelante_${aviso2.posting_id}`).addEventListener('click', () => {
slider(aviso2,++imagenactual,2);
});

//aviso3

slider(aviso3,imagenactual,3);

document.getElementById(`atras_${aviso3.posting_id}`).addEventListener('click', () => {
slider(aviso3,--imagenactual,3);
});

document.getElementById(`adelante_${aviso3.posting_id}`).addEventListener('click', () => {
slider(aviso3,++imagenactual,3);
});
//filtros------------------------------------------------

//tipo de operacion----------------------------------------------
const cajaAviso1 = document.getElementById(`${aviso1.posting_id}`);
const cajaAviso2 = document.getElementById(`${aviso2.posting_id}`);
const cajaAviso3 = document.getElementById(`${aviso3.posting_id}`);

const compra = document.getElementById('filtroCompra');
const alquilar = document.getElementById('filtroAlquilar');
const temporal = document.getElementById('filtroTemporal');

const validarTipoOperacion = () =>{

    if(document.getElementById("comprar").checked == true){

        cajaAviso1.style.display= 'none';
        cajaAviso2.style.display= 'flex';
        cajaAviso3.style.display= 'none';

        compra.classList.remove('oculto'); 
        alquilar.classList.add('oculto'); 
        temporal.classList.add('oculto');
        direccionFiltro.classList.add('oculto');
    }

    if(document.getElementById("alquilar").checked == true){

        cajaAviso2.style.display= 'none';
        cajaAviso1.style.display= 'flex';
        cajaAviso3.style.display= 'none';
 
        compra.classList.add('oculto'); 
        alquilar.classList.remove('oculto'); 
        temporal.classList.add('oculto');
        direccionFiltro.classList.add('oculto');
    }

    if(document.getElementById("temporal").checked == true){

        cajaAviso2.style.display= 'none';
        cajaAviso3.style.display= 'flex';
        cajaAviso1.style.display= 'none';

        compra.classList.add('oculto'); 
        alquilar.classList.add('oculto'); 
        temporal.classList.remove('oculto');
        direccionFiltro.classList.add('oculto');

    }

    if(document.getElementById("todos").checked == true){

        cajaAviso1.style.display= 'flex';
        cajaAviso2.style.display= 'flex';
        cajaAviso3.style.display= 'flex';
        
        compra.classList.add('oculto'); 
        alquilar.classList.add('oculto'); 
        temporal.classList.add('oculto');
        direccionFiltro.classList.add('oculto');
    }

}

//Buscar por direccion-----------------------------

let direccionFiltro = document.getElementById('direccionFiltro');

const validarDireccion = ()=>{

let buscador = document.getElementById('buscador').value;

if(buscador == aviso1.address || buscador == aviso1.zone || buscador == aviso1.city){

    document.getElementById('buscador').value = "";
    document.getElementById("todos").checked = true
    cajaAviso2.style.display= 'none';
    cajaAviso1.style.display= 'flex';
    cajaAviso3.style.display= 'none';

    compra.classList.add('oculto'); 
    alquilar.classList.add('oculto'); 
    temporal.classList.add('oculto');

    direccionFiltro.classList.remove('oculto');
    document.getElementById('direccionFiltro').innerHTML = buscador;
    
}

if(buscador == aviso2.address || buscador == aviso2.zone || buscador == aviso2.city){

    document.getElementById('buscador').value = "";
    document.getElementById("todos").checked = true;
    cajaAviso2.style.display= 'flex';
    cajaAviso1.style.display= 'none';
    cajaAviso3.style.display= 'none';

    compra.classList.add('oculto'); 
    alquilar.classList.add('oculto'); 
    temporal.classList.add('oculto');

    direccionFiltro.classList.remove('oculto');
    document.getElementById('direccionFiltro').innerHTML = buscador;

}

if(buscador == aviso3.address || buscador == aviso3.zone || buscador == aviso3.city){

    document.getElementById('buscador').value = "";
    document.getElementById("todos").checked = true;
    cajaAviso2.style.display= 'none';
    cajaAviso1.style.display= 'none';
    cajaAviso3.style.display= 'flex'; 
 
    compra.classList.add('oculto'); 
    alquilar.classList.add('oculto'); 
    temporal.classList.add('oculto');

    direccionFiltro.classList.remove('oculto');
    document.getElementById('direccionFiltro').innerHTML = buscador;
}

if(buscador == aviso2.city || buscador == aviso3.city){

    document.getElementById('buscador').value = "";
    document.getElementById("todos").checked = true;
    cajaAviso2.style.display= 'none';
    cajaAviso1.style.display= 'flex';
    cajaAviso3.style.display= 'flex'; 

    compra.classList.add('oculto'); 
    alquilar.classList.add('oculto'); 
    temporal.classList.add('oculto');

    direccionFiltro.classList.remove('oculto');
    document.getElementById('direccionFiltro').innerHTML = buscador;
}

if(buscador == aviso2.city ){

    document.getElementById('buscador').value = "";
    document.getElementById("todos").checked = true;
    cajaAviso2.style.display= 'flex';
    cajaAviso1.style.display= 'none';
    cajaAviso3.style.display= 'none'; 

    compra.classList.add('oculto'); 
    alquilar.classList.add('oculto'); 
    temporal.classList.add('oculto');

    direccionFiltro.classList.remove('oculto');
    document.getElementById('direccionFiltro').innerHTML = buscador;
}


return false
};

const quitarFiltros = ()=>{

    document.getElementById('buscador').value = "";
    document.getElementById("todos").checked = true;
    cajaAviso2.style.display= 'flex';
    cajaAviso1.style.display= 'flex';
    cajaAviso3.style.display= 'flex'; 

    compra.classList.add('oculto'); 
    alquilar.classList.add('oculto'); 
    temporal.classList.add('oculto');
    direccionFiltro.classList.add('oculto');


}
//Avisos

const avisos =[];

//guardar la informacion de los avisos en objetos---------------------------------------

const crearAviso = (posting_id,address,zone,city,operation_type,price_amount,price_currency,expenses_amount,expenses_currency,operation_type_id, 
                    operation_type_name,publication_plan,publish_date,status, label,title,posting_picture,posting_slug,posting_description)=>{
         
                
                avisos.push(posting_id);
            
            return{
                 posting_id,address,zone,city,operation_type,price_amount, price_currency, 
                 expenses_amount, expenses_currency,operation_type_id, operation_type_name, 
                 publication_plan,publish_date,status, label,title,posting_picture,
                 posting_slug, posting_description

                }
}

const aviso1 = crearAviso(   
    "44557981","Guido 1800","Recoleta","Capital Federal",1,"13500","ARS","3500","ARS",1,"Alquiler","SIMPLE",
    "23/01/2020","AVAILABLE","Disponible","Guido y Callao, 2amb coc y lav todo luz 50m impec amob categoría ",
    "imagenes/aviso1/0.jpg","guido-y-callao-2amb-coc-y-lav-todo-luz-50m-impec-44557981",
    "Sed in felis nec lorem imperdiet euismod. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Suspendisse lectus mi, imperdiet et venenatis pulvinar, mattis id orci. In ut aliquam orci. Cras vitae risus posuere, ullamcorper erat vitae, tempor libero. Nulla placerat euismod lectus et maximus. Duis non magna mattis, mattis neque eu, dictum dui. Aliquam aliquam fermentum purus quis placerat. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vestibulum sit amet ligula odio. Integer id tempor ipsum. Phasellus maximus quam felis, id vulputate massa ullamcorper id."
);

const aviso2 = crearAviso(
    "44554144","San Lorenzo 1300","Güemes","Mar Del Plata",2,"110500","USD","3000", "ARS",
    2, "Venta","SUPERHIGHLIGHTED","18/07/2019","AVAILABLE","Disponible",
    "Dueño San Lorenzo/Güemes. LC  2 d, a balcón terraza a jardín. A nvo. cochera",
    "imagenes/aviso2/0.jpg",
    "dueno-san-lorenzo-guemes.-lc-2-d-a-balcon-terraz-44554144",
    "Fusce nec pretium elit. Nullam commodo ornare massa, eget viverra erat vestibulum nec. Integer convallis est nec ex pharetra, non fermentum elit commodo. Maecenas eget ante vitae lorem interdum viverra. Aenean nisl erat, eleifend in tortor quis, ornare ultricies libero. Ut at egestas orci. Quisque laoreet ut diam quis molestie. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed scelerisque metus a libero feugiat, et lacinia odio tristique."
);

const aviso3 = crearAviso(
    "44186948","Juncal 3000","Barrio Norte","Capital Federal",3,"22500","ARS",'0','0',3,"Alquiler Temporal","HIGHLIGHTED",
    "02/12/2019","RESERVED","Reservado","Juncal/Coronel Díaz. Al frente, 63m, gran balcón terraza. Todo luz",
    "imagenes/aviso3/0.jpg",
    "juncal-coronel-diaz.-al-frente-63m-gran-balcon-t-44186948",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus a neque non magna scelerisque imperdiet sed ac magna. Mauris enim lectus, varius at quam a, venenatis condimentum ante. Morbi mattis velit vel dictum varius. Suspendisse tempor velit ac rhoncus vehicula. Aenean elementum dolor purus, et mattis arcu consectetur a. Sed dictum felis id molestie accumsan. Aliquam sit amet diam feugiat, tincidunt sem vehicula, dignissim augue. Integer gravida sapien erat, in faucibus ligula cursus non. Aliquam vestibulum est nibh, vitae vehicula ipsum facilisis quis. Pellentesque ac tempus metus, non posuere dolor."
);

//-----------------------------------------------------------------------------------------------------


//crear caja de avisos--------------------------------

const CajadeAvisos = (datos) =>{

    const contenedor = document.getElementById('avisoContenedor');

    //crear el contenedor del aviso
    const caja = document.createElement('div');

    if(datos.publication_plan == 'SIMPLE'){

        caja.setAttribute('class', `aviso Simple`);
        caja.setAttribute('id',`${datos.posting_id}`);
        contenedor.appendChild(caja);
    }

    if(datos.publication_plan == 'SUPERHIGHLIGHTED'){

        caja.setAttribute('class', `aviso Superdestacado`);
        caja.setAttribute('id',`${datos.posting_id}`);
        contenedor.appendChild(caja);
    }

    if(datos.publication_plan == 'HIGHLIGHTED'){

        caja.setAttribute('class', `aviso Destacado`);
        caja.setAttribute('id',`${datos.posting_id}`);
        contenedor.appendChild(caja);
    }

    //se divide el contenedor en 2 elementos
    const galeria = document.createElement('div');
    galeria.setAttribute('class', 'galeria');

    const contenido = document.createElement('div');
    contenido.setAttribute('class', 'contenido');

    caja.appendChild(galeria);
    caja.appendChild(contenido);

    //se divide el la galeria en 2 elementos
    const imagengaleria = document.createElement('div');
    imagengaleria.setAttribute('class', 'imagengaleria');

    const img  = document.createElement('img');
    img.setAttribute('class','imagen');
    img.setAttribute('src',` ${datos.posting_picture}`);
    imagengaleria.appendChild(img);
    
    const costos = document.createElement('div');
    costos.setAttribute('class', 'costos');

    galeria.appendChild(imagengaleria);
    galeria.appendChild(costos);


    //se agregan los elementos sobre la imagen

    //los adornos
    const adornos = document.createElement('div');
    adornos.setAttribute('class', 'adornos');

        //tipo de plan del aviso
        const plan = document.createElement('p');

    if(datos.publication_plan == 'SIMPLE'){

        const planTexto = document.createTextNode(`Simple`)
        plan.appendChild(planTexto);
        adornos.appendChild(plan);
    }

    if(datos.publication_plan == 'SUPERHIGHLIGHTED'){

        const planTexto = document.createTextNode(`Super destacado`)
        plan.appendChild(planTexto);
        adornos.appendChild(plan);
    }

    if(datos.publication_plan == 'HIGHLIGHTED'){

        const planTexto = document.createTextNode(`Destacado`)
        plan.appendChild(planTexto);
        adornos.appendChild(plan);
    }

        //corazon
        const corazon = document.createElement('i');
        corazon.setAttribute('class', 'fas fa-heart corazon');
        corazon.setAttribute('id', `corazon_${datos.posting_id}`);
        corazon.setAttribute('onclick', `likes(${datos.posting_id})`);
        adornos.appendChild(corazon);

    //flechas
    const flechas = document.createElement('div');
    flechas.setAttribute('class', 'flechas');

    const flecha1 = document.createElement('i');
    flecha1.setAttribute('class', 'fas fa-chevron-left atras');
    flecha1.setAttribute('id', 'atras');
    flechas.appendChild(flecha1);

    const flecha2 = document.createElement('i');
    flecha2.setAttribute('class', 'fas fa-chevron-right adelante');
    flecha2.setAttribute('id', 'adelante');
    flechas.appendChild(flecha2);



    //contador
    const contador = document.createElement('div');
    contador.setAttribute('class', 'contador');

        //se agrega el logo de la camara
        const camara = document.createElement('i');
        camara.setAttribute('class', 'fas fa-camera');
        contador.appendChild(camara);

        //se agrega el indice y la cantidad de imagenes
        const indice = document.createElement('p');
        indice.setAttribute('class', 'indice');
        indice.setAttribute('id', 'indice');
        const indiceTexto = document.createTextNode(`1 / 3`)
        indice.appendChild(indiceTexto);
        contador.appendChild(indice);


            imagengaleria.appendChild(adornos);
            imagengaleria.appendChild(flechas);
            imagengaleria.appendChild(contador);


        //se le agrega informacion a elemento de costos

        const precio = document.createElement('div');
        precio.setAttribute('class', 'precio');

        //Agregar puntos de millares al precio
        let valorInmueble = datos.price_amount.replace(/\./g,'');
        valorInmueble = valorInmueble.toString().split('').reverse().join('').replace(/(?=\d*\.?)(\d{3})/g,'$1.');
        let valorFinal = valorInmueble.split('').reverse().join('').replace(/^[\.]/,'');

        const precioTexto = document.createTextNode(`$ ${valorFinal}`);
        
        precio.appendChild(precioTexto);

    
        const expensas = document.createElement('div');
        expensas.setAttribute('class', 'expensas');
        const expensasTexto = document.createTextNode(`$ ${datos.expenses_amount} Expensas`)
        expensas.appendChild(expensasTexto);

        costos.appendChild(precio);
        costos.appendChild(expensas);

    //se crea el conenido el aviso

        //titulo
        const titulo = document.createElement('div');
        titulo.setAttribute('class', 'titulo');
        const tituloTexto = document.createElement('p');
        tituloTexto.setAttribute('class', 'tituloTexto');
        const tituloContenido = document.createTextNode(`${datos.title}`);
        tituloTexto.appendChild(tituloContenido);
        titulo.appendChild(tituloTexto);
        contenido.appendChild(titulo);



        //ubicacion
        const ubicacion = document.createElement('div');
        ubicacion.setAttribute('class', 'ubicacion');
        const ubicacionTexto = document.createElement('p');
        ubicacionTexto.setAttribute('class', 'ubicacionTexto');
        const ubicacionContenido = document.createTextNode(`${datos.address}, ${datos.zone}, ${datos.city}`);
        ubicacionTexto.appendChild(ubicacionContenido);
        ubicacion.appendChild(ubicacionTexto);
        contenido.appendChild(ubicacion);


        //descripcion
        const descripcion = document.createElement('div');
        descripcion.setAttribute('class', 'descripcion');
        const descripcionTexto = document.createElement('p');
        descripcionTexto.setAttribute('class', 'descripcionTexto');
        const descripcionContenido = document.createTextNode(`${datos.posting_description}`);
        descripcionTexto.appendChild(descripcionContenido);
        descripcion.appendChild(descripcionTexto);
        contenido.appendChild(descripcion);

        //footer
        const footer = document.createElement('div');
        footer.setAttribute('class', 'footer');

            //fecha de publicado
            const fechaPublicado = document.createElement('p');
            fechaPublicado.setAttribute('class', 'fechaPublicado');

            const historia = document.createElement('i');
            historia.setAttribute('class', 'fas fa-history');
            fechaPublicado.appendChild(historia);

            const fechaContenido = document.createTextNode(`Publicado el ${datos.publish_date}`);
            fechaPublicado.appendChild(fechaContenido);

            footer.appendChild(fechaPublicado);

            //Boton de contactar
            const contactar = document.createElement('p');
            contactar.setAttribute('class', 'contactar');
            contactar.setAttribute('id', 'contactar');

            const contactarContenido = document.createTextNode(`Contactar`);
            contactar.appendChild(contactarContenido);

            footer.appendChild(contactar);

            contenido.appendChild(footer);

}

CajadeAvisos(aviso2);
CajadeAvisos(aviso3);
CajadeAvisos(aviso1);

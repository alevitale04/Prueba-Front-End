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
    img.setAttribute('id',`imagen_${datos.posting_id}`);
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
    flecha1.setAttribute('id', `atras_${datos.posting_id}`);
    flechas.appendChild(flecha1);

    const flecha2 = document.createElement('i');
    flecha2.setAttribute('class', 'fas fa-chevron-right adelante');
    flecha2.setAttribute('id', `adelante_${datos.posting_id}`);
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
        indice.setAttribute('id',`indice_${datos.posting_id}`);
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

            //calcular dias trascurridos desde su publicacion

                     const tiempoPublicado = (datos) =>{

                            let fecha = datos;
                            fecha = new Date(fecha);
                
                            const fechaactual = new Date();  
                            const inicio =  new Date(fecha).getTime();
                            const final =  new Date(fechaactual).getTime();
                            const diferencia = final - inicio;
                            return parseInt((diferencia/(1000*60*60*24)));
                    };

            const fechaContenido = document.createTextNode(`Publicado hace ${tiempoPublicado(datos.publish_date)} dias`);
            fechaPublicado.appendChild(fechaContenido);
            footer.appendChild(fechaPublicado);

            //Boton de contactar
            const contactar = document.createElement('p');
            contactar.setAttribute('class', 'contactar');
            contactar.setAttribute('id', 'contactar');
            contactar.setAttribute('onclick', 'contactarAviso()');

            const contactarContenido = document.createTextNode(`Contactar`);
            contactar.appendChild(contactarContenido);
            footer.appendChild(contactar);
            contenido.appendChild(footer);

}

CajadeAvisos(aviso2);
CajadeAvisos(aviso3);
CajadeAvisos(aviso1);
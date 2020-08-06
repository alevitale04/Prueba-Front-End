//Likes--------------------------------------------------------------

if(localStorage.aviso1 == 1){

    let corazon = document.getElementById(`corazon_${aviso1.posting_id}`)
    corazon.style.color= 'red';    
}

if(localStorage.aviso2 == 1){

    let corazon = document.getElementById(`corazon_${aviso2.posting_id}`)
    corazon.style.color= 'red';    
}

if(localStorage.aviso3 == 1){

    let corazon = document.getElementById(`corazon_${aviso3.posting_id}`)
    corazon.style.color= 'red';    
}



function likes(datos){ 

const corazon = document.getElementById(`corazon_${datos}`);

if(datos == aviso1.posting_id){

    if(localStorage.aviso1 == 0 || localStorage.aviso1 == undefined){

        localStorage.setItem('aviso1', 1);
        console.log(localStorage.aviso1);
        corazon.style.color= 'red';

    }else{

        localStorage.aviso1 = 0;
        console.log(localStorage.aviso1);
        corazon.style.color= 'white';
        return
    }

}

if(datos == aviso2.posting_id){

    if(localStorage.aviso2 == 0 || localStorage.aviso2 == undefined){

        localStorage.setItem('aviso2', 1);
        console.log(localStorage.aviso2);
        corazon.style.color= 'red';

    }else{

        localStorage.aviso2 = 0;
        console.log(localStorage.aviso2);
        corazon.style.color= 'white';
        return
    }

}

if(datos == aviso3.posting_id){

    if(localStorage.aviso3 == 0 || localStorage.aviso3 == undefined){

        localStorage.setItem('aviso3', 1);
        console.log(localStorage.aviso3);
        corazon.style.color= 'red';

    }else{

        localStorage.aviso3 = 0;
        console.log(localStorage.aviso3);
        corazon.style.color= 'white';
        return
    }

}

}
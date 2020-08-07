//Formulario de contacto
const formulario = document.getElementById('formulario'); 
const fondoOscuro = document.getElementById('dark');

const contactarAviso = () =>{
   
   fondoOscuro.classList.remove('oculto');
   formulario.classList.remove('oculto');

};

const validarNombre = () =>{

   let nombre = document.getElementById('nombre').value;
   let formNombre = document.getElementById('nombre');
   let error = document.getElementById('errorTextonombre');


       //expReg -> exprecion regular
       let expRegN = /^[A-Za-z]*( [A-Za-z]+)*$/;
       let validado = expRegN.test(nombre);

   if(validado!==true || nombre.length > 20 || nombre == ''){

   formNombre.style.borderBottom='2px solid rgb(255, 0, 0)';
   error.classList.remove('oculto');
   return false

   }else{

   formNombre.style.borderBottom='1px solid #ddd';
   error.classList.add('oculto');
   return true
   }
};

const validarNumber = () =>{

   let number = document.getElementById('number').value;
   let formNumber = document.getElementById('number');
   let error = document.getElementById('errorTextonumber');


       //expReg -> exprecion regular
         let expRegN = /^0*?[1-9]\d*$/;
         let validado = expRegN.test(number);

   if(validado!==true || number === 0 || number == ""){

   formNumber.style.borderBottom='2px solid rgb(255, 0, 0)';
   error.classList.remove('oculto');
   return false

   }else{

   formNumber.style.borderBottom='1px solid #ddd';
   error.classList.add('oculto');
   return true

   }
};

const validarEmail = () =>{

   let email = document.getElementById('email').value;
   let formEmail = document.getElementById('email');
   let error = document.getElementById('errorTextoemail');

   //expReg -> exprecion regular
   let expReg = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
   let validado = expReg.test(email);

   if(validado!==true || email == ""){

   formEmail.style.borderBottom='2px solid rgb(255, 0, 0)';
   error.classList.remove('oculto');
   return false

   }else{

   formEmail.style.borderBottom='1px solid #ddd';
   error.classList.add('oculto');
   return true
   }

};

const devolucion = document.getElementById('devolucion');
const duplicidad = document.getElementById('duplicidad');
const enviado = document.getElementById('enviado');
 
 const validarFormulario = () =>{
 
 if(validarNombre() == false || validarNumber() == false || validarEmail() == false){
 
    validarNombre();
    validarNumber();
    validarEmail();
 
    return false
 
 }
 
 if(validarNombre() !== false || validarNumber() !== false || validarEmail() !== false){  
 
    formulario.classList.add('oculto');
 
    setTimeout(()=>{

     devolucion.classList.remove('oculto');

    //  console.log(localStorage.mail);
     console.log(document.getElementById('email').value);

     if(localStorage.mail == document.getElementById('email').value){

        document.getElementById('usuario').innerHTML = localStorage.nombre;
        
        duplicidad.classList.remove('oculto');
        enviado.classList.add('oculto');
        console.log('Te contactaste de nuevo');
        return
     }

     localStorage.setItem('mail', document.getElementById('email').value);
     localStorage.setItem('nombre', document.getElementById('nombre').value);
     console.log(localStorage.mail);
        
     duplicidad.classList.add('oculto');
     enviado.classList.remove('oculto');
 
 },400);
 
    return false
    
 }}

 const cerrarDevolucion = ()=>{
   
    devolucion.classList.add('oculto');
    fondoOscuro.classList.add('oculto');
 
    document.getElementById('nombre').value ='';
    document.getElementById('number').value ='';
    document.getElementById('email').value  ='';
 
 }
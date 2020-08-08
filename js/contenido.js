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
    "2020/01/23","AVAILABLE","Disponible","Guido y Callao, 2amb coc y lav todo luz 50m impec amob categoría ",
    "imagenes/aviso1/0.jpg","guido-y-callao-2amb-coc-y-lav-todo-luz-50m-impec-44557981",
    "Sed in felis nec lorem imperdiet euismod. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Suspendisse lectus mi, imperdiet et venenatis pulvinar, mattis id orci. In ut aliquam orci. Cras vitae risus posuere, ullamcorper erat vitae, tempor libero. Nulla placerat euismod lectus et maximus. Duis non magna mattis, mattis neque eu, dictum dui. Aliquam aliquam fermentum purus quis placerat. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vestibulum sit amet ligula odio. Integer id tempor ipsum. Phasellus maximus quam felis, id vulputate massa ullamcorper id."
);

const aviso2 = crearAviso(
    "44554144","San Lorenzo 1300","Güemes","Mar Del Plata",2,"110500","USD","3000", "ARS",
    2, "Venta","SUPERHIGHLIGHTED","2019/07/18","AVAILABLE","Disponible",
    "Dueño San Lorenzo/Güemes. LC  2 d, a balcón terraza a jardín. A nvo. cochera",
    "imagenes/aviso2/0.jpg",
    "dueno-san-lorenzo-guemes.-lc-2-d-a-balcon-terraz-44554144",
    "Fusce nec pretium elit. Nullam commodo ornare massa, eget viverra erat vestibulum nec. Integer convallis est nec ex pharetra, non fermentum elit commodo. Maecenas eget ante vitae lorem interdum viverra. Aenean nisl erat, eleifend in tortor quis, ornare ultricies libero. Ut at egestas orci. Quisque laoreet ut diam quis molestie. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed scelerisque metus a libero feugiat, et lacinia odio tristique."
);

const aviso3 = crearAviso(
    "44186948","Juncal 3000","Barrio Norte","Capital Federal",3,"22500","ARS",'0','0',3,"Alquiler Temporal","HIGHLIGHTED",
    "2019/12/02","RESERVED","Reservado","Juncal/Coronel Díaz. Al frente, 63m, gran balcón terraza. Todo luz",
    "imagenes/aviso3/0.jpg",
    "juncal-coronel-diaz.-al-frente-63m-gran-balcon-t-44186948",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus a neque non magna scelerisque imperdiet sed ac magna. Mauris enim lectus, varius at quam a, venenatis condimentum ante. Morbi mattis velit vel dictum varius. Suspendisse tempor velit ac rhoncus vehicula. Aenean elementum dolor purus, et mattis arcu consectetur a. Sed dictum felis id molestie accumsan. Aliquam sit amet diam feugiat, tincidunt sem vehicula, dignissim augue. Integer gravida sapien erat, in faucibus ligula cursus non. Aliquam vestibulum est nibh, vitae vehicula ipsum facilisis quis. Pellentesque ac tempus metus, non posuere dolor."
);
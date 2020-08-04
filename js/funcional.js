const crearAviso = (posting_id,address,zone,city,operation_type,price_amount,price_currency,expenses_amount,expenses_currency,operation_type_id, operation_type_name,publication_plan,publish_date,status, label,title,posting_picture,posting_slug,posting_description)=>{

    return{
            posting_id,
            address,
            zone,
            city,
            operation_type,
            price_amount, price_currency, 
            expenses_amount, expenses_currency,
            operation_type_id, operation_type_name, 
            publication_plan,
            publish_date,
            status, label,
            title,
            posting_picture,
            posting_slug,
            posting_description
    }
}

const aviso1 = crearAviso(   
    "44557981",
    "Guido 1800","Recoleta","Capital Federal",
    1,
    13500,"ARS",
    3500,"ARS",
    1,"Alquiler",
    "SIMPLE",
    "23/01/2020",
    "AVAILABLE","Disponible",
    "Guido y Callao, 2amb coc y lav todo luz 50m impec amob categoría ",
    "https://preprostatic.zonapropcdn.com/avisos/1/00/44/55/79/81/360x266/1693121343.jpg",
    "guido-y-callao-2amb-coc-y-lav-todo-luz-50m-impec-44557981",
    "Sed in felis nec lorem imperdiet euismod. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Suspendisse lectus mi, imperdiet et venenatis pulvinar, mattis id orci. In ut aliquam orci. Cras vitae risus posuere, ullamcorper erat vitae, tempor libero. Nulla placerat euismod lectus et maximus. Duis non magna mattis, mattis neque eu, dictum dui. Aliquam aliquam fermentum purus quis placerat. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vestibulum sit amet ligula odio. Integer id tempor ipsum. Phasellus maximus quam felis, id vulputate massa ullamcorper id."
);

const aviso2 = crearAviso(
    "44554144",
    "San Lorenzo 1300","Güemes","Mar del Plata",
    2,
    110500,"USD",
    3000, "ARS",
    2, "Venta",
    "SUPERHIGHLIGHTED",
    "18/07/2019",
    "AVAILABLE","Disponible",
    "Dueño San Lorenzo/Güemes. LC  2 d, a balcón terraza a jardín. A nvo. cochera",
    "https://preprostatic.zonapropcdn.com/avisos/1/00/44/55/41/44/360x266/1693069558.jpg",
    "dueno-san-lorenzo-guemes.-lc-2-d-a-balcon-terraz-44554144",
    "Fusce nec pretium elit. Nullam commodo ornare massa, eget viverra erat vestibulum nec. Integer convallis est nec ex pharetra, non fermentum elit commodo. Maecenas eget ante vitae lorem interdum viverra. Aenean nisl erat, eleifend in tortor quis, ornare ultricies libero. Ut at egestas orci. Quisque laoreet ut diam quis molestie. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed scelerisque metus a libero feugiat, et lacinia odio tristique."
);

const aviso3 = crearAviso(
    "44186948",
    "Juncal 3000","Barrio Norte","Capital Federal",
    3,
    22500,"ARS",
    null,null,
    3,"Alquiler Temporal",
    "HIGHLIGHTED",
    "02/12/2019",
    "RESERVED","Reservado",
    "Juncal/Coronel Díaz. Al frente, 63m, gran balcón terraza. Todo luz",
    "https://preprostatic.zonapropcdn.com/avisos/1/00/44/18/69/48/360x266/1688441607.jpg",
    "juncal-coronel-diaz.-al-frente-63m-gran-balcon-t-44186948",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus a neque non magna scelerisque imperdiet sed ac magna. Mauris enim lectus, varius at quam a, venenatis condimentum ante. Morbi mattis velit vel dictum varius. Suspendisse tempor velit ac rhoncus vehicula. Aenean elementum dolor purus, et mattis arcu consectetur a. Sed dictum felis id molestie accumsan. Aliquam sit amet diam feugiat, tincidunt sem vehicula, dignissim augue. Integer gravida sapien erat, in faucibus ligula cursus non. Aliquam vestibulum est nibh, vitae vehicula ipsum facilisis quis. Pellentesque ac tempus metus, non posuere dolor."
);

console.log(aviso1.expenses_amount);
console.log(aviso2.expenses_amount);
console.log(aviso3.expenses_amount);




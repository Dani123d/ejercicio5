const Pizzas = [
    provenzal =  {id: 1, nombre: "Provenzal", ingredientes: "Tomate, Cebolla, Provenzal, Queso, Orégano, Romero, Masa, Aceite, Ajo, Perejil", precio: "$1.000", img: './img/provenzal.jpg', tag1: "Sabrosa" , calorias: "500" , time: "30 min" , estrellas: "5"},
    napolitana =  {id: 2, nombre: "Napolitana", ingredientes: "Tomate, Jamón, Queso, Masa, Aceite, Ajo, Perejil", precio: "$1.100", img: './img/napolitana.jpg', tag1: "Rojiza", calorias: "700", time: "30 min", estrellas: "5"},
    anana =  {id: 3, nombre: "Anana", ingredientes: "Tomate, Ananá, Queso, Masa, Aceite, Ajo, Perejil", precio: "$1.200", img: './img/anana.jpg', tag1: "Citrica", calorias: "400", time: "30 min", estrellas: "5"},
    cuatroQuesos =  {id: 4, nombre: "Cuatro Quesos", ingredientes: "Tomate,  Queso Mozzarella, Queso Parmesano, Queso Gruyere, Queso Crema,Masa,Aceite,Ajo,Perejil", precio: "$1.400", img: './img/4 quesos.jpg', tag1: "La quesuda", calorias: "1100", time: "30 min", estrellas: "5"},
    veggie =  {id: 5, nombre: "Veggie", ingredientes: "Tomate, Queso Vegano, Masa de Harina Integral, Aceite", precio: "$1.300", img: './img/veggie.jpg', tag1: "Plantitas", calorias: "100", time: "30 min", estrellas: "5"},
    jamonYQueso = {id: 6, nombre: "Jamon y Huevo", ingredientes: "Tomate, Jamón, Huevo duro,Queso, Masa, Aceite, Ajo, Aceituna", precio: "$1.300", img: './img/jamon y huevo.jpg', tag1: "Las manos", calorias: "700", time: "30 min", estrellas: "5"},
]




// const getValueInput = () =>{
//     let inputValue1 = document.querySelector(".pizzac").value; 
     
//     Pizzas.map(function(idP){
//         if(idP.id == inputValue1){
            
//     document.querySelector("#nombrePizza").innerHTML = `El nombre de la pizza es: ${idP.nombre}`;
//     document.querySelector("#precioPizza").innerHTML = `Su costo es de: ${idP.precio}`;

//         } 
//     })
    

// }

localStorage.setItem( "nombre0",JSON.stringify(provenzal));
localStorage.setItem( "nombre1",JSON.stringify(napolitana));
localStorage.setItem( "nombre2",JSON.stringify(anana));
localStorage.setItem( "nombre3",JSON.stringify(cuatroQuesos));
localStorage.setItem( "nombre4",JSON.stringify(veggie));
localStorage.setItem( "nombre5",JSON.stringify(jamonYQueso));


const productoContenedor = document.getElementById('productos')

    const getValueInput = () =>{
        let inputValue1 = document.querySelector(".pizzac").value; 
         
        
        Pizzas.map(function(idP){
            if(idP.nombre == inputValue1){

                

                const articulo = document.createElement('article');

                articulo.innerHTML = `
                <figure class="pizza">
                    <div class="pizza__hero">
                      <img id="imagen">
                    </div>
                    <div class="pizza__content">
                      <div class="pizza__title">
                        <h1 class="pizza__heading"></h1>
                        <div class="pizza__tag pizza__tag--1"></div>
                      </div>
                      <p class="pizza__description"></p>
                      <div class="pizza__details">
                        <p class="pizza__detail"><span class="emoji">🍕</span>850 kcal</p>
                        <p class="pizza__detail"><span class="emoji">⏱</span>30 min</p>
                        <p class="pizza__detail"><span class="emoji">⭐️</span>4.7 / 5</p>
                      </div>
                    </div>
                    <div class="pizza__price"></div>
                  </figure>
                `;
                
                productoContenedor.appendChild(articulo)

                document.querySelector(".pizza__heading").innerHTML = `${idP.nombre}`;
                document.querySelector(".pizza__price").innerHTML = `${idP.precio}`;
                document.querySelector(".pizza__tag--1").innerHTML = `${idP.tag1}`;
                document.querySelector(".pizza__description").innerHTML = `${idP.ingredientes}`;
                document.getElementById("imagen").src=`${idP.img}`;
                
            }
            
            
            
    
            })
        
    
    }

/* ========================================= */
/* SOLARHUB - JAVASCRIPT */
/* ========================================= */

/* Información de los planetas */

const planetas = {

    mercurio:{

        nombre:"Mercurio",

        caracteristicas:"Es el planeta más cercano al Sol y el más pequeño del Sistema Solar.",

        distancia:"57.9 millones de km",

        temperatura:"167 °C",

        tamaño:"4,879 km",

        curioso:"Un día en Mercurio dura más que un año."

    },

    venus:{

        nombre:"Venus",

        caracteristicas:"Es el planeta más caliente y gira en sentido contrario a la mayoría de los planetas.",

        distancia:"108 millones de km",

        temperatura:"464 °C",

        tamaño:"12,104 km",

        curioso:"Su temperatura puede derretir plomo."

    },

    tierra:{

        nombre:"Tierra",

        caracteristicas:"Es el único planeta conocido que alberga vida.",

        distancia:"149.6 millones de km",

        temperatura:"15 °C",

        tamaño:"12,742 km",

        curioso:"El 71% de su superficie está cubierta por agua."

    },

    marte:{

        nombre:"Marte",

        caracteristicas:"Es conocido como el planeta rojo.",

        distancia:"228 millones de km",

        temperatura:"-63 °C",

        tamaño:"6,779 km",

        curioso:"Tiene el volcán más grande del Sistema Solar."

    },

    jupiter:{

        nombre:"Júpiter",

        caracteristicas:"Es el planeta más grande del Sistema Solar.",

        distancia:"778 millones de km",

        temperatura:"-110 °C",

        tamaño:"139,820 km",

        curioso:"Podrían caber más de 1300 Tierras dentro de él."

    },

    saturno:{

        nombre:"Saturno",

        caracteristicas:"Es famoso por sus impresionantes anillos.",

        distancia:"1,429 millones de km",

        temperatura:"-140 °C",

        tamaño:"116,460 km",

        curioso:"Sus anillos están formados por hielo y roca."

    },

    urano:{

        nombre:"Urano",

        caracteristicas:"Gira prácticamente acostado.",

        distancia:"2,871 millones de km",

        temperatura:"-195 °C",

        tamaño:"50,724 km",

        curioso:"Su eje está inclinado casi 98 grados."

    },

    neptuno:{

        nombre:"Neptuno",

        caracteristicas:"Es el planeta más lejano del Sol.",

        distancia:"4,495 millones de km",

        temperatura:"-200 °C",

        tamaño:"49,244 km",

        curioso:"Tiene los vientos más rápidos del Sistema Solar."

    }

};

/* Seleccionamos elementos */

const botones = document.querySelectorAll(".boton-planeta");

const modal = document.getElementById("modal");

const cerrar = document.getElementById("cerrar");

const informacion = document.getElementById("informacion-planeta");

/* ========================================= */
/* MODAL DE PLANETAS */
/* ========================================= */

botones.forEach(boton=>{

    boton.addEventListener("click",()=>{

        const planeta = boton.dataset.planeta;

        const datos = planetas[planeta];

        informacion.innerHTML=`

        <h2>${datos.nombre}</h2>

        <br>

        <p><strong>Características:</strong><br>${datos.caracteristicas}</p>

        <br>

        <p><strong>Distancia al Sol:</strong> ${datos.distancia}</p>

        <p><strong>Temperatura:</strong> ${datos.temperatura}</p>

        <p><strong>Tamaño:</strong> ${datos.tamaño}</p>

        <br>

        <p><strong>Dato curioso:</strong><br>${datos.curioso}</p>

        `;

        modal.style.display="block";

    });

});

cerrar.onclick=function(){

    modal.style.display="none";

}

window.onclick=function(e){

    if(e.target==modal){

        modal.style.display="none";

    }

}

/* ========================================= */
/* CURIOSIDADES ALEATORIAS */
/* ========================================= */

const curiosidades = [

    "☀️ La luz del Sol tarda aproximadamente 8 minutos y 20 segundos en llegar a la Tierra.",

    "🪐 Saturno podría flotar en agua porque su densidad es menor que la del agua.",

    "🌍 La Tierra es el único planeta conocido que tiene vida.",

    "🔴 Marte tiene el volcán más grande del Sistema Solar: el Monte Olimpo.",

    "🌀 Júpiter posee una tormenta gigante llamada Gran Mancha Roja que existe desde hace cientos de años.",

    "🌡️ Venus es el planeta más caliente del Sistema Solar, incluso más que Mercurio.",

    "🌙 La Luna se aleja de la Tierra aproximadamente 3.8 centímetros cada año.",

    "💨 Neptuno tiene vientos que pueden superar los 2,000 km/h.",

    "☿ Un día en Mercurio dura más que un año.",

    "🛰️ Júpiter tiene más de 90 lunas conocidas."

];

const botonCuriosidad = document.getElementById("btnCuriosidad");

const textoCuriosidad = document.getElementById("datoCurioso");

botonCuriosidad.addEventListener("click", ()=>{

    const numero = Math.floor(Math.random() * curiosidades.length);

    textoCuriosidad.textContent = curiosidades[numero];

});


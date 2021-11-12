const items = [
    'img/01.jpg',
    'img/02.jpg',
    'img/03.jpg',
    'img/04.jpg',
    'img/05.jpg'
];

const title = [
    'Svezia',
    'Svizzera',
    'Gran Bretagna',
    'Germania',
    'Paradise'
]

const text = [
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
    'Lorem ipsum',
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
    'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
]

const right = document.getElementById("slide");
const left = document.getElementById("left-side");


let rightImg = '';
let leftImg = '';

for (k = 0; k < items.length; k++) {
    
    leftImg += 
    `<div class = "l-item " >
        <img src="${items[k]}" alt = "slider">
        <div class = "text" > 
            <h3>${title[k]}</h3>
            <p>${text[k]}</p>
        </div>
    </div> `;

    rightImg += 
    `<div class = "d-item" >
        <img src="${items[k]}" alt = "slider">
    </div> `;
    
}

left.innerHTML = leftImg;
right.innerHTML = rightImg;

// inizializzo le variabili
let elements = document.getElementsByClassName("l-item");
let elementsRight = document.getElementsByClassName("d-item");
const up = document.getElementById("arrow-up");
const down = document.getElementById("arrow-down");

// i è un contatore 
i = 0;

// creo il caso base 
elements[i].classList.add("active");
elementsRight[i].classList.add("d-selected");

// freccetta su 
up.addEventListener("click", function() {
    if (i > 0) {

        // immagini di sinistra 
        elements[i].classList.remove("active");
        elements[i-1].classList.add("active");

        // immagini di destra 
        elementsRight[i].classList.remove("d-selected");
        elementsRight[i-1].classList.add("d-selected");
        i-=1
    }
    
    else if (i == 0) {

        // immagini di sinistra 
        elements[i].classList.remove("active");
        elements[items.length-1].classList.add("active");

        // immagini di destra 
        elementsRight[i].classList.remove("d-selected");
        elementsRight[items.length-1].classList.add("d-selected");
        i = items.length-1;
    }

}) 

// freccetta giù 
down.addEventListener("click", function() {
    if (i < items.length-1) {

        // immagini di sinistra 
        elements[i].classList.remove("active");
        elements[i+1].classList.add("active");

        // immagini di destra 
        elementsRight[i].classList.remove("d-selected");
        elementsRight[i+1].classList.add("d-selected");
        i+=1;
    }

    else if (i == items.length-1) {
        
        // immagini di sinistra 
        elements[i].classList.remove("active");
        elements[0].classList.add("active");
        
        // immagini di destra 
        elementsRight[i].classList.remove("d-selected");
        elementsRight[0].classList.add("d-selected");
        i = 0;
    }

})
console.log(i);



for (let z = 0; z < elementsRight.length; z++) {
    elementsRight[z].addEventListener("click", function() {
        console.log(z);
        elements[i].classList.remove("active");
        elementsRight[i].classList.remove("d-selected");
        i = z;
        elements[i].classList.add("active");
        elementsRight[i].classList.add("d-selected");

        

    
    });


} 



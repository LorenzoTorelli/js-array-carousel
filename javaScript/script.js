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

for (i = 0; i < items.length; i++) {
    
    leftImg += 
    `<div class = "l-item inactive" >
        <img src="${items[i]}" alt = "slider">
        <div class = "text" > 
            <h3>${title[i]}</h3>
            <p>${text[i]}</p>
        </div>
    </div> `;

    rightImg += 
    `<div class = "d-item" >
        <img src="${items[i]}" alt = "slider">
        
    </div> `;
    
}

console.log(rightImg)

left.innerHTML = leftImg;
right.innerHTML = rightImg;


let elements = document.getElementsByClassName("l-item");
console.log(elements)
elements[0].classList.remove("inactive");

const up = document.getElementById("arrow-up");
const down = document.getElementById("arrow-down");

i = 0;
up.addEventListener("click", function() {
    if (i > 0) {
        elements[i].classList.add("inactive");
        elements[i-1].classList.remove("inactive");
        i-=1
    }
    
    else if (i == 0) {
        elements[i].classList.add("inactive");
        elements[items.length].classList.remove("inactive");
        i = items.length;
    }

}) 


down.addEventListener("click", function() {
    if (i < 4) {
        elements[i].classList.add("inactive");
        elements[i+1].classList.remove("inactive");
        i+=1;
    }

    else if (i == 4) {
        elements[i].classList.add("inactive");
        elements[0].classList.remove("inactive");
        i = 0;
    }

})

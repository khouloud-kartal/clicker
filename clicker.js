const image = document.getElementById('image');
let clickNum = document.getElementById('clickNum');
let title = document.getElementById('title');


const store = document.querySelector('.store');

// clickNum.innerText = 0


//add a click in our local storage each time we click on our flower
image.addEventListener("click", (e)=>{
    clickNum.innerText++; 
    localStorage.setItem('clickNum', clickNum.innerText);
})




// let store1Int = parseInt(localStorage.getItem('white flower'));
let store2Int = parseInt(localStorage.getItem('yellow flower'));
let store3Int = parseInt(localStorage.getItem('pink flower'));
let store4Int = parseInt(localStorage.getItem('red flower'));

let storeInt = parseInt(localStorage.getItem('clickNum'));


//display what we have in our local storage when the page is reloaded
clickNum.innerText = localStorage.getItem('clickNum')

//////////////////////////////////////store1/////////////////////////////////////////////


const store1Btn = document.getElementById('store1Btn')
store.appendChild(store1Btn)

localStorage.getItem("white flower");
let store1Int = parseInt(localStorage.getItem('white flower'));

// localStorage.setItem("white flower", title.innerText)

//function to change the price
function changePrice1(){
    
    if(clickNum.innerText >= store1Int){
        clickNum.innerText = clickNum.innerText - store1Int
        localStorage.setItem('clickNum', clickNum.innerText);
        
        store1Int *= 1.6
        
        store1Int = Math.round(store1Int)
        
        localStorage.setItem('white flower', store1Int);
        title.innerText = localStorage.getItem('white flower')
        
    }
    else {
        alert("attention")
    }
    
}

store1Btn.addEventListener("click", changePrice1)

title.innerText = localStorage.getItem('white flower')
localStorage.setItem("white flower", title.innerText)

//////////////////////////////////////////////store2//////////////////////////////////

// //create and display the store number one
// const store2 = document.createElement('h3')
// store.appendChild(store2)

// const store2Btn = document.createElement('button')
// store.appendChild(store2Btn)
// store2Btn.setAttribute("name", "store2")
// store2Btn.setAttribute("class", "store2")
// store2Btn.setAttribute("id", "store2")

// store2.innerText = 15
// store2Btn.innerText = 'yellow flower'
// store2.innerText = localStorage.getItem('yellow flower')

// store2Btn.addEventListener("click", changePrice2)


// //function to change the price
// function changePrice2(){
//     localStorage.setItem('yellow flower', '15');


//     if(clickNum.innerText >= store1Int){
//         clickNum.innerText = clickNum.innerText - store1Int
//         localStorage.setItem('clickNum', clickNum.innerText);
        
//         store2Int *= 1.2

//         store2Int = Math.round(store2Int)

//         localStorage.setItem('yellow flower', store2Int);
//         store2.innerText = localStorage.getItem('yellow flower')

//     }else{
//         alert('You do not have enough click')
//     }
    
// }

// setInterval(() =>{
//     localStorage.getItem('clickNum');
//     localStorage.getItem('white flower')

// }, 1000);
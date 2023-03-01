const image = document.getElementById('image');
let clickNum = document.getElementById('clickNum');
let title1 = document.getElementById('title1');
let title2 = document.getElementById('title2');
let title3 = document.getElementById('title3');

const store1 = document.querySelector('.store1');
const store2 = document.querySelector('.store2');
const store3 = document.querySelector('.store3');

// clickNum.innerText = 0


//add a click in our local storage each time we click on our flower

//if our storage is null give it the title in our html value
if(localStorage.getItem('clickNum') === null){

    localStorage.setItem('clickNum', clickNum.innerText)

    image.addEventListener("click", (e)=>{
        clickNum.innerText++; 
        localStorage.setItem('clickNum', clickNum.innerText);
    })
}else{


    image.addEventListener("click", (e)=>{
        clickNum.innerText++; 
        localStorage.setItem('clickNum', clickNum.innerText);
    })

}



clickNum.innerText = localStorage.getItem('clickNum')


// let store1Int = parseInt(localStorage.getItem('white flower'));
// let store3Int = parseInt(localStorage.getItem('pink flower'));
// let store4Int = parseInt(localStorage.getItem('red flower'));

let storeInt = parseInt(localStorage.getItem('clickNum'));


//display what we have in our local storage when the page is reloaded


//////////////////////////////////////store1/////////////////////////////////////////////


const store1Btn = document.getElementById('store1Btn')
store1.appendChild(store1Btn)

let store1Int = parseInt(localStorage.getItem('white flower'));


if(localStorage.getItem('white flower') === null){

    localStorage.setItem('white flower', title1.innerText)

   

    store1Btn.addEventListener("click", changePrice1)  

    
}else{

    title1.innerText = localStorage.getItem('white flower')

    store1Btn.addEventListener("click", changePrice1)  

}

//function to change the price
function changePrice1(){

    title1.innerText = localStorage.getItem('white flower')
    let store1Int = parseInt(localStorage.getItem('white flower'));
    

    console.log(store1Int)

    if(clickNum.innerText >= store1Int){
        
        setInterval(myTimer, 10000);
        
        clickNum.innerText = clickNum.innerText - store1Int
        localStorage.setItem('clickNum', clickNum.innerText);
        
        store1Int *= 1.6
        
        store1Int = Math.round(store1Int)
        
        localStorage.setItem('white flower', store1Int);
        title1.innerText = localStorage.getItem('white flower')
        
    }
    else {
        alert("you do not have enough clicks")
    }
    
}



//////////////////////////////////////////////store2//////////////////////////////////

const store2Btn = document.getElementById('store2Btn')
store2.appendChild(store2Btn)

let store2Int = parseInt(localStorage.getItem('pink flower'));


if(localStorage.getItem('pink flower') === null){

    localStorage.setItem('pink flower', title2.innerText)

   

    store2Btn.addEventListener("click", changePrice2)  

    
}else{

    title2.innerText = localStorage.getItem('pink flower')

    store2Btn.addEventListener("click", changePrice2)  

}

//function to change the price
function changePrice2(){

    title2.innerText = localStorage.getItem('pink flower')
    let store2Int = parseInt(localStorage.getItem('pink flower'));
    

    // console.log(store1Int)

    if(clickNum.innerText >= store2Int){

        setInterval(myTimer, 5000);
        
        clickNum.innerText = clickNum.innerText - store2Int
        localStorage.setItem('clickNum', clickNum.innerText);
        
        store2Int *= 1.6
        
        store2Int = Math.round(store2Int)
        
        localStorage.setItem('pink flower', store2Int);
        title2.innerText = localStorage.getItem('pink flower')
        
    }
    else {
        alert("you do not have enough clicks")
    }
    
}




//////////////////////////////////////////////store3//////////////////////////////////

const store3Btn = document.getElementById('store3Btn')
store3.appendChild(store3Btn)

let store3Int = parseInt(localStorage.getItem('red flower'));


if(localStorage.getItem('red flower') === null){

    localStorage.setItem('red flower', title3.innerText)

    store3Btn.addEventListener("click", changePrice3)  

    
}else{

    title3.innerText = localStorage.getItem('red flower')

    store3Btn.addEventListener("click", changePrice3)  

}

//function to change the price
function changePrice3(){

    title3.innerText = localStorage.getItem('red flower')
    let store3Int = parseInt(localStorage.getItem('red flower'));

    // console.log(store1Int)

    if(clickNum.innerText >= store3Int){

        setInterval(myTimer, 1000);
        
        clickNum.innerText = clickNum.innerText - store3Int
        localStorage.setItem('clickNum', clickNum.innerText);
        
        store3Int *= 1.6
        
        store3Int = Math.round(store3Int)
        
        localStorage.setItem('red flower', store3Int);
        title3.innerText = localStorage.getItem('red flower')
        
    }
    else {
        alert("you do not have enough clicks")
    }
    
}








function myTimer() {
    clickNum.innerText++; 
    localStorage.setItem('clickNum', clickNum.innerText);
}

const image = document.getElementById('image');
const clickNum = document.getElementById('clickNum');



image.addEventListener("click", (e)=>{
    innerText = 0
    seconds = clickNum.innerText++; 
    localStorage.setItem('clickNum', seconds);
})

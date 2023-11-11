let a =document.getElementById('link')
a.addEventListener('click',(e)=>{
    e.preventDefault()
    alert('Link Has Been Pressed')
    
})


let b=document.getElementById('pic')
b.addEventListener('click',(e)=>{
    e.preventDefault()
    alert('Mobile Has Been Purchased')
    
})


function dlt(button) {
    var row = button.parentNode.parentNode;
    row.parentNode.removeChild(row);
}


function replacepic(){
    document.getElementById('picture').src="./download.jpeg"
}

function restorepic(){
    document.getElementById('picture').src="photo-1598327105666-5b89351aff97.avif"
}

let counter=0
function Increase(){
   counter+=1
   document.getElementById('counter').innerHTML=counter

   
}

function decrease(){
    if(counter>0){
        counter-=1
        let button =document.getElementById('counter')
        button.innerHTML=counter
    }
    else{
        document.getElementById('counter').ariaDisabled=true
        alert('you cannot decreament unless it is greater than 0.')
    }
    
}

function reset(){

    counter=0
    document.getElementById('counter').innerHTML=counter
}


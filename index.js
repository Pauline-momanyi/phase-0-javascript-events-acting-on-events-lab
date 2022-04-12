// Your code here
const dodger = document.getElementById("dodger");
dodger.style.backgroundColor = "#000000";
dodger.style.backgroundColor = "#FF69B4";
dodger.style.bottom = "100px";
dodger.style.bottom = "0px";

// document.addEventListener('keydown', function(event){
//     if (event.key === 'ArrowLeft'){
//         const leftNumbers = dodger.style.left.replace("px", "");
//         const left = parseInt(leftNumbers,10)
//         dodger.style.left = `${left-40}px`
//         if (left>1){
//         dodger.style.left = `${left-40}px`
//         }
//     }
// });


function moveDodgerLeft(){
    const leftNumbers = dodger.style.left.replace("px", "");
    const left = parseInt(leftNumbers,10)
        //dodger.style.left = `${left-1}px`
    if (left>0){
        dodger.style.left = `${left-1}px`
    }
}

document.addEventListener('keydown', function(event){
    if (event.key === 'ArrowLeft'){ moveDodgerLeft()
}
})


function moveDodgerRight(){
    const leftNumbers = dodger.style.left.replace("px", "");
    const left = parseInt(leftNumbers,10)
        
    if (left<400){
        dodger.style.left = `${left+1}px`
    }
}

document.addEventListener('keydown',function(event){
    if(event.key === 'ArrowRight'){
        moveDodgerRight()
    }
})
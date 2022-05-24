const ADD = "add";
const DIVIDE = "divide";
const SUBTRACT = "subtract";
const MULTIPLY = "multiply";
var currentOperation = null;
var total = 0;

var display = document.querySelector('.display');


function clearDisplay(){
    display.innerHTML = "";
    total =0;
}


function inputNum(n){
    display.innerHTML=display.innerHTML+n;
    console.log(n);
}

function selectOperation(val){
    currentOperation = val;
    if(display.innerHTML){
        total = parseFloat(display.innerHTML);
        display.innerHTML=""
    }
    
}


function findResult(){
    var currentVal =  parseFloat(display.innerHTML);
    if (currentOperation == ADD) {
        total+=currentVal;    
    } else if(currentOperation==SUBTRACT){
        total-=currentVal;
    }else if(currentOperation == MULTIPLY){
        total*=currentVal;
    }else if(currentOperation == DIVIDE){
        total/=currentVal;
    }else{
        display.innerHTML="err";
    }

    display.innerHTML=total;
    
}
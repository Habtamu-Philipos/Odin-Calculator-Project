//variables
let num1 = '';
let num2 = '';
let oprt ='';
let result ='';
let decimalAllowed = true;
let operators = document.querySelectorAll('.operator')
let numValue = document.querySelectorAll('.num');
let equalSign = document.querySelector('.btn-num-20');
let clearBtn = document.querySelector('.btn-num-1');
let backSpace = document.querySelector('.btn-num-21');
let percentage = document.querySelector('.btn-num-3');
let decimalPlace = document.querySelector('.btn-num-17');
let ngtvPstv = document.querySelector('.btn-num-2');


let displayBoard = document.getElementById('displayBoard')
displayBoard.innerText= 0;

//functions

function addition(a,b){
    if (result == ''){
        result = + a + + b
        return result ;
    }else{
        result = + a + + b;
        return result ;
    }
};


function subtraction(a,b){
    result = a - b
    return result; 
}

function multiplication(a,b){
    result = Number(a * b).toFixed(3) 
    
    return result ;   
}

function division(a,b){
    if (b != 0) {
        result = Number(a / b).toFixed(3) ;
        return result ;
    }
    return 'Error' 
}

numValue.forEach(num => num.addEventListener('click', function(){
    if (oprt === ''){
        num1 += num.innerText;
        displayBoard.innerText = num1;
       console.log(num1);   
    }else{
        num2 += num.innerText;
        displayBoard.innerText = num2;
        console.log(num2);
    }
}))


operators.forEach(operator => operator.addEventListener('click', function(){
    
    oprt = operator.innerText;
    calculate()
    decimalAllowed = true;
    console.log(oprt)
}));


function operate(oprt,num1,num2){
    if(oprt == '*'){
        multiplication(num1,num2)
    } else if (oprt == '/'){
        division(num1,num2)
    }else if (oprt == '+'){
        addition(num1,num2)
    }else{
        subtraction(num1,num2) 
    }
}


function calculate(){
    if(result != ''){
        num1 = result;
        operate(oprt,num1,num2);
        displayBoard.innerText = result;
     //   num1 = ''; num2 = '';      
    }
    else if(num1 != '' && num2 != ''){
        operate(oprt,num1,num2);
        displayBoard.innerText = result;
        num1 = '' ; num2 = '';
    }
}

equalSign.addEventListener('click',function(){
   if((num1 != '' && oprt != '') && num2 == '') {
        return displayBoard.innerText = 'Error';
    }
    calculate();     
})

clearBtn.addEventListener('click',function(){
    displayBoard.innerText = 0;
    num1 = ''; num2 = ''; result= ''; oprt = '';
    decimalAllowed = true;
})

backSpace.addEventListener('click',function(){
    if (num2 != ''){
        num2 = num2.toString().slice(0,-1);
        displayBoard.innerText = num2;
        if(num2 == ''){
            displayBoard.innerText = 0;
        }
    }else{
        if(displayBoard.innerText != ''){
            num1 = num1.toString().slice(0, -1);
            displayBoard.innerText = num1;
            if(num1 == ''){
                displayBoard.innerText = 0;
            }
            console.log(num1)
        }
    }
})

percentage.addEventListener('click',function(){
    if(num2 != ''){
        num2 /= 100;
        displayBoard.innerText = num2;
    }else{
        num1 /= 100;
        displayBoard.innerText = num1;
    }
})

decimalPlace.addEventListener('click',function(){
    if (decimalAllowed == true){
        if(num2 != ''){
            num2 += '.';
            displayBoard.innerText = num2;
        }else{
            num1 += '.';
            displayBoard.innerText = num1;
        }
        decimalAllowed = false;
    }
})

ngtvPstv.addEventListener('click',function(){
    if(num2 != ''){
        num2 = '-' + num2;
        displayBoard.innerText = num2;
    }else if(result != ''){
        result = '-' + result;
        displayBoard.innerText = result;
    }
    else{
        num1 = '-' + num1;
        displayBoard.innerText = num1;
    }
})
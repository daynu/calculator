let main = document.getElementById('main');
let numbers = document.querySelectorAll(".number");
let current = document.getElementById('current');
let operations = document.querySelectorAll('.operations')
let equals = document.getElementById("equals")
let backspace = document.getElementById('backspace');
let clear = document.getElementById('clear');
let numberArray = [];
let result = 0;
let lastOperation = '';


function add(a, b)
{
    return a + b;
}


function subtract(a, b)
{
    return a - b;
}

function multiply(a, b)
{
    return a * b;
}

function divide(a, b)
{
    return a / b;
}

function operate(a, b, operation)
{
    switch(operation)
    {
        case '+':
                return add(a, b);
                break;
        case '-':
             return subtract(a, b);
             break;
        case 'x':
                return multiply(a, b);
                break;
        case '÷':
                return divide(a, b);  
                break;
    }
}

numbers.forEach(function(number)
{
    number.addEventListener('click', function()
    {
        
        current.innerText += number.value;
    })
}
)



function compute(operation)
{
    if(current.innerHTML != '')
            {
                if(numberArray[0]== null)
                {
                    numberArray[0] = parseFloat(current.innerHTML);
                    current.innerHTML = '';
                }
                else
                {
                    numberArray[1] = parseFloat(current.innerHTML);
                    current.innerHTML = '';
                }
              
                if(numberArray[0] != null && numberArray[1] != null)
                    {
                        result = operate(numberArray[0], numberArray[1], operation)
                        current.innerHTML = '';
                        numberArray[0] = result;
                        console.log(numberArray);
                        main.innerText = result;
                    }
            }
}



operations.forEach(function(operation)
{
    operation.addEventListener('click', ()=>
        {   
            operations.forEach(function(operation)
                {
                    operation.style.backgroundColor = 'black'
                    operation.style.color = 'white';
                })
            operation.style.backgroundColor = 'white';
            operation.style.color = 'black';
            lastOperation = operation.value;
            if(current.innerHTML != '')
            {
                if(numberArray[0]== null)
                {
                    numberArray[0] = parseFloat(current.innerHTML);
                    current.innerHTML = '';
                }
                else
                {
                    numberArray[1] = parseFloat(current.innerHTML);
                    current.innerHTML = '';
                }
              
                if(numberArray[0] != null && numberArray[1] != null)
                    {
                        result = operate(numberArray[0], numberArray[1], operation.value)
                        current.innerHTML = '';
                        numberArray[0] = result;
                        console.log(numberArray);
                        main.innerText = result;
                    }
            }
             
            
    })
}
)


function equalsWrite()
{
    if(current.innerHTML != '')
            {
                if(numberArray[0]== null)
                {
                    numberArray[0] = parseFloat(current.innerHTML);
                    current.innerHTML = '';
                }
                else
                {
                    numberArray[1] = parseFloat(current.innerHTML);
                    current.innerHTML = '';
                }
              
                if(numberArray[0] != null && numberArray[1] != null)
                    {
                        result = operate(numberArray[0], numberArray[1], lastOperation)
                        current.innerHTML = '';
                        numberArray[0] = result;
                        console.log(numberArray);
                        main.innerText = result;
                    }
            }
}



equals.addEventListener('click', ()=>
{
    if(current.innerHTML != '')
            {
                if(numberArray[0]== null)
                {
                    numberArray[0] = parseFloat(current.innerHTML);
                    current.innerHTML = '';
                }
                else
                {
                    numberArray[1] = parseFloat(current.innerHTML);
                    current.innerHTML = '';
                }
              
                if(numberArray[0] != null && numberArray[1] != null)
                    {
                        result = operate(numberArray[0], numberArray[1], lastOperation)
                        current.innerHTML = '';
                        numberArray[0] = result;
                        console.log(numberArray);
                        main.innerText = result;
                    }
            }
})



clear.addEventListener('click', () =>
{
    main.innerText = null;
    current.innerHTML = null;
    numberArray[0] = null;
    numberArray[1] = null;
})


backspace.addEventListener('click', () =>
{   
    console.log("backspace")
    current.innerText = current.innerText.slice(0, -1)
})



function toggleOperationBackground(currentOperation)
{
    operations.forEach(function(operation)
        {   
            operation.style.backgroundColor = 'black';
            operation.style.color = 'white';
            if(operation.value == currentOperation)
            {
                operation.style.backgroundColor = 'white';
                operation.style.color = 'black'
            }
        })
}


let keys = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0']

let operationsKeys = ['+', '-', '*', '/'];

document.addEventListener('keydown', (event)=>
{   
    if(event.key in keys)
    {
    current.innerHTML += event.key;
    }
    else if(event.key == '.')
    {
        current.innerHTML += '.'
    }
    else if (event.key == 'Backspace')
    {
        console.log("backspace")
        current.innerText = current.innerText.slice(0, -1)
    }
    else if(event.key == '+' || event.key == '-')
    {
        lastOperation = event.key;
        toggleOperationBackground(lastOperation)
        compute(event.key)
        
    }
    else if(event.key == '*')
    {
        lastOperation = 'x';
        toggleOperationBackground(lastOperation)
        compute(lastOperation)
        
    }
    else if(event.key == '/')
    {
        lastOperation = '÷';
        toggleOperationBackground(lastOperation)
        compute(lastOperation)
    }   
    else if(event.key == 'Enter')
    {
        equalsWrite();
    }
})


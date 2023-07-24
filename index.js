let screen = document.getElementById('screen');
let numbers = document.querySelectorAll(".number");
let result = 0;
let lastNumber = 0;
console.log(numbers)


numbers.forEach(function(number)
{
    number.addEventListener('click', function()
    {
        
        screen.innerText += number.value;  
        lastNumber = parseFloat(number.value);
    })
}
)

let equals = document.getElementById("equals")
let plus = document.getElementById("plus")

equals.addEventListener('click', () =>
{
    screen.innerText = result;
})

plus.addEventListener('click', () =>
{
    screen.innerText += '+';
    result += lastNumber;
})



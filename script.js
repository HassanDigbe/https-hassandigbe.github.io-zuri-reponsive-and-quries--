//Reading of numbers in the program
const num1=parseFloat(prompt('Enter Num1: '));//convert string to number
//Reading of operators in the program
const operators=prompt('Enter operators to use:(+,-,*,/)');
const num2= parseFloat(prompt('Enter Num2: '));//convert string to number to perform

let result = 0 ;
if(isNaN(num1) || isNaN(num2)){
    alert('wrong input! refresh and try again.');
}else{
    if(operators =='+'){
        result =num1 + num2;
    }else if (operators =='-'){
        result =num1 - num2;
    }else if(operators =='*'){
        result = num1 * num2;
    }else if(operators =='/'){
        result = num1 / num2;
    }
    alert(num1 +''+ operators +''+ num2 + '='+ result)
} 
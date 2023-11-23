


function factorialRecursive(number){
    return number === 0 || number === 1 ? 1 : number * factorialRecursive(number - 1);
}
function factorialNonRecursive(number){
    let result = 1;
        function shine(){
            for (let i = 2; i<= number; i++){
                result *= i;
            }
            return result;
        }
    return number === 0 || number === 1 ? result : shine();
}
const numberFactorial = 5;
console.log(`Factorial Recursive ${numberFactorial} = ${factorialRecursive(numberFactorial)}`);
console.log(`Factorial Non Recursive ${numberFactorial} = ${factorialNonRecursive(numberFactorial)}`);
var name = "Aman";

function addNumbers(num1, num2) {
    console.log("name inside", name);
    var result = num1 + num2;
    function double(num) {
        return num * 2;
    }

    var total = double(result);
    return total;
}

console.log("name outside", name);
var sum = addNumbers(12, 15);
console.log(sum);

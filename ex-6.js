let height = undefined;
let result;

console.log(result); //  Result ควรจะได้ออกมาเป็น “Height is not defined”

function checkHeight(input) {
  return input ?? "Height is not defined";
}

result = checkHeight(height);
console.log(result);

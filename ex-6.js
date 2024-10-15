let height = undefined;

let result = (input) => {
  const heightValue = input?.height ?? "Height is not defined";
  return heightValue;
};
console.log(result(height)); //  Result ควรจะได้ออกมาเป็น “Height is not defined”

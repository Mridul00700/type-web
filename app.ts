function combine(input1: string | number, input2: number | string) {
  let result;

  if (typeof input1 === "number" && typeof input2 === "number") {
    result = input1 + input2;
  } else result = input1.toString() + input2.toString();
  return result;
}

const combinedAges = combine(30, 26);

console.log(combinedAges);

const combinedNames = combine("Mridul", "Mishra");
console.log(combinedNames);

// in this  case union types comes into play.

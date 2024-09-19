function calculate(operation) {
  let binary1 = document.getElementById("binaryInput1").value;
  let binary2 = document.getElementById("binaryInput2").value;

  let num1 = parseInt(binary1, 2);
  let num2 = parseInt(binary2, 2);
  let result;

  switch (operation) {
    case "add":
      result = num1 + num2;
      break;
    case "subtract":
      result = num1 - num2;
      break;
    case "multiply":
      result = num1 * num2;
      break;
    case "divide":
      if (num2 === 0) {
        document.getElementById("result").innerText = "Cannot divide by zero!";
        return;
      }
      result = Math.floor(num1 / num2);
      break;
    case "and":
      result = num1 & num2;
      break;
    case "or":
      result = num1 | num2;
      break;
    case "xor":
      result = num1 ^ num2;
      break;
    case "not":
      result = ~num1 >>> 0;
      break;
    case "leftShift":
      result = num1 << num2;
      break;
    case "rightShift":
      result = num1 >> num2;
      break;

    default:
      result = 0;
  }

  if (operation !== "binaryToDecimal" && operation !== "decimalToBinary") {
    result = result.toString(2);
  }

  document.getElementById("result").innerText = result;
}

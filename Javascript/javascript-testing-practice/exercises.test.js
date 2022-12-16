test('capitalize function that takes a string and returns it with the first character capitalized.', () => {
  const capitalize = (text) => text.charAt(0).toUpperCase();
  expect(capitalize('gustavo')).toBe('G');
});


test('reverseString function that takes a string and returns it reversed.', () => {
  const reverseString = (text) => text.split("").reverse().join("");
  expect(reverseString('gustavo')).toBe('ovatsug');
});

test(`calculator object that contains functions for the basic operations: 
      add, subtract, divide, and multiply. 
      Each of these functions should take two numbers and return the correct calculation.`, () => {
  const add = (x, y) => x + y;
  const subtract = (x, y) => x - y;
  const divide = (x, y) => y == 0 ? 0 : x / y;
  const multiply = (x, y) => x * y;
  const calculator = { add , subtract, divide, multiply };
  
  expect(calculator.add(2,3)).toBe(5);
  expect(calculator.subtract(2,3)).toBe(-1);
  expect(calculator.divide(3,3)).toBe(1);
  expect(calculator.divide(3,-3)).toBe(-1);
  expect(calculator.divide(3,0)).toBe(0);
  expect(calculator.multiply(3,0)).toBe(0);
  expect(calculator.multiply(3,3)).toBe(9);
});


test('caesarCipher function that takes a string and returns it with each character “shifted”', () => {
  const shiftLetter = (letter, shift) => {
    const charCode = letter.charCodeAt();
    let shiftedCharCode = charCode + shift;
    let letterShifted;
    if (charCode >= 97 && charCode <=122) {
      shiftedCharCode = checkCharCode(shiftedCharCode, 122);
    } else if (charCode >= 65 && charCode <= 90) {
      shiftedCharCode = checkCharCode(shiftedCharCode, 90);
    } else {
      shiftedCharCode = charCode;
    }
    return letterShifted = String.fromCharCode(shiftedCharCode);
  }

  const checkCharCode = (charCode, limit) => {
    if (charCode > limit) {
      let shiftedCharCode = charCode - 26;
      return checkCharCode(shiftedCharCode,limit);
    }
    return charCode;
  }

  const caesarCipher = (text, shift) => {
    let array = text.split("");
    let finalText = "";
    for (const e of array){
      finalText = finalText + shiftLetter(e,shift);
    }
    return finalText
  };

  expect(caesarCipher('gustavo',22)).toBe('cqopwrk')
  expect(caesarCipher('testando um texto com virgula, além de acento e pontuação!',22)).toBe('paopwjzk qi patpk yki rencqhw, whéi za wyajpk a lkjpqwçãk!');
  expect(caesarCipher('AGORA TESTANDO COM LETRA MAÍUSCULA!',22)).toBe('wcknw paopwjzk yki hapnw iwíqoyqhw!'.toUpperCase());

});


test('analyzeArray function that takes an array of numbers and returns an object with the following properties: average, min, max, and length.', () => {
  const analyzeArray = (array) => {
    const length = array.length;
    const max = Math.max(...array);
    const min = Math.min(...array);
    const average = array.reduce( (prev, curr) => prev + curr, 0) / length;
    return { average, min, max, length }
  }
  expect(analyzeArray([1,2,3,4,5,6])).toEqual({
    "average": 3.5,
    "length": 6,
    "max": 6,
    "min": 1
  });
  expect(analyzeArray([1,8,3,4,2,6])).toEqual({
    "average": 4,
    "length": 6,
    "max": 8,
    "min": 1
  });
});
// returns true if the provided param is undefined or its not an numb
const checkEmptyAndNonNumber = (param) => {
  if (typeof param === "undefined" || isNaN(param) || !param) {
    return true;
  }
  return false;
};

const calculator = () => {
  let result = 0;

  let myMap = new Map();
  let index = 0;
  const saveOp = (operation, fn, sn, result) => {
    index++;
    const params = {
      operation: operation,
      firstNumber: fn,
      secondNumber: sn,
      currentResult: result,
    };

    return myMap.set(index, params);
  };

  const addValue = (a, b) => {
    if (result == 0) {
      //   if the user provides 2 args, add to result
      if (!checkEmptyAndNonNumber(a) && !checkEmptyAndNonNumber(b)) {
        result = a + b;
        saveOp("adunare", a, b, result);
      } else {
        console.log("invalid inputs");
        result = 0;
      }
    } else {
      if (!checkEmptyAndNonNumber(a) && !checkEmptyAndNonNumber(b)) {
        resetHistory();
        result = /*result +*/ a + b;
        saveOp("adunare", a, b, result);
      } else {
        if (checkEmptyAndNonNumber(a) && !checkEmptyAndNonNumber(b)) {
          result = result + b;
          saveOp("adunare", null, b, result);
          console.log(myMap);
        } else if (!checkEmptyAndNonNumber(a) && checkEmptyAndNonNumber(b)) {
          result = result + a;
          saveOp("adunare", a, null, result);
        }
      }
    }
  };

  const subStractValue = (a, b) => {
    if (result == 0) {
      //   if the use provides 2 args, add to result
      if (!checkEmptyAndNonNumber(a) && !checkEmptyAndNonNumber(b)) {
        result = a - b;
        saveOp("scadere", a, b, result);
      } else {
        console.log("invalid inputs");
        result = 0;
      }
    } else {
      if (!checkEmptyAndNonNumber(a) && !checkEmptyAndNonNumber(b)) {
        resetHistory();
        result = /*result +*/ a - b;
        saveOp("scadere", a, b, result);
      } else {
        if (checkEmptyAndNonNumber(a) && !checkEmptyAndNonNumber(b)) {
          result = result - b;
          saveOp("scadere", null, b, result);
          console.log(myMap);
        } else if (!checkEmptyAndNonNumber(a) && checkEmptyAndNonNumber(b)) {
          result = result - a;
          saveOp("scadere", a, null, result);
        }
      }
    }
  };

  const multiplyValue = (a, b) => {
    if (result == 0) {
      //   if the use provides 2 args, add to result
      if (!checkEmptyAndNonNumber(a) && !checkEmptyAndNonNumber(b)) {
        result = a * b;
        saveOp("inmultire", a, b, result);
      } else {
        console.log("invalid inputs");
        result = 0;
      }
    } else {
      if (!checkEmptyAndNonNumber(a) && !checkEmptyAndNonNumber(b)) {
        resetHistory();
        result = /*result +*/ a * b;
        saveOp("inmultire", a, b, result);
      } else {
        if (checkEmptyAndNonNumber(a) && !checkEmptyAndNonNumber(b)) {
          result = result * b;
          saveOp("inmultire", null, b, result);
          console.log(myMap);
        } else if (!checkEmptyAndNonNumber(a) && checkEmptyAndNonNumber(b)) {
          result = result * a;
          saveOp("inmultire", a, null, result);
        }
      }
    }
  };

  const divideValude = (a, b) => {
    if (result == 0) {
      //   if the use provides 2 args, add to result
      if (
        !checkEmptyAndNonNumber(a) &&
        !checkEmptyAndNonNumber(b) &&
        b != 0
      ) {
        result = a / b;
        saveOp("impartire", a, b, result);
      } else {
        console.log("invalid inputs");
        result = 0;
      }
    } else {
      if (
        !checkEmptyAndNonNumber(a) &&
        !checkEmptyAndNonNumber(b) &&
        b != 0
      ) {
        resetHistory();
        result = /*result +*/ a / b;
        saveOp("impartire", a, b, result);
      } else {
        if (
          checkEmptyAndNonNumber(a) &&
          !checkEmptyAndNonNumber(b) &&
          b != 0
        ) {
          result = result / b;
          saveOp("impartire", null, b, result);
          console.log(myMap);
        } else if (
          !checkEmptyAndNonNumber(a) &&
          checkEmptyAndNonNumber(b) &&
          a != 0
        ) {
          result = result / a;
          saveOp("impartire", a, null, result);
        }
      }
    }
  };

  const getter = () => {
    return result;
  };

  const getHistory = () => {
    for (const [key, value] of myMap) {
      console.log(value);
    }
  };

  const resetHistory = () => {
    saveOp("reset", null, null, null);
  };

  return {
    currentValue: getter,
    addValue: addValue,
    substractValue: subStractValue,
    multiplyValue: multiplyValue,
    divideValude: divideValude,
    getHistory: getHistory,
  };
};

let myCalc = calculator();
myCalc.addValue(null, "null");
myCalc.addValue("undefined", undefined);
myCalc.addValue("null", "undefined");
myCalc.addValue(null, null);
myCalc.addValue("123null", "1undefined");
myCalc.addValue(4.3, 4.2);
myCalc.substractValue(3, 4);
myCalc.substractValue(4);
myCalc.addValue(4);
myCalc.addValue(4);
myCalc.substractValue(6);
myCalc.addValue(3);
myCalc.addValue(5, 5);
myCalc.addValue(10, 20);
myCalc.multiplyValue(2);
myCalc.multiplyValue(2, 2);
myCalc.divideValude(2);
myCalc.multiplyValue(5);
myCalc.multiplyValue(10);
myCalc.multiplyValue(2, 2);
// console.log("getter value: ", myCalc.currentValue());
myCalc.getHistory();

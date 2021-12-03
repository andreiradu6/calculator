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
      //   if the use provides 2 args, add to result
      if (!checkEmptyAndNonNumber(a) && !checkEmptyAndNonNumber(b)) {
        result = parseInt(a) + parseInt(b);
        saveOp("adunare", parseInt(a), parseInt(b), result);
      } else {
        console.log("invalid inputs");
        result = 0;
      }
    } else {
      if (!checkEmptyAndNonNumber(a) && !checkEmptyAndNonNumber(b)) {
        resetHistory();
        result = /*result +*/ parseInt(a) + parseInt(b);
        saveOp("adunare", parseInt(a), parseInt(b), result);
      } else {
        if (checkEmptyAndNonNumber(a) && !checkEmptyAndNonNumber(b)) {
          result = result + parseInt(b);
          saveOp("adunare", null, parseInt(b), result);
          console.log(myMap);
        } else if (!checkEmptyAndNonNumber(a) && checkEmptyAndNonNumber(b)) {
          result = result + parseInt(a);
          saveOp("adunare", parseInt(a), null, result);
        }
      }
    }
  };

  const subStractValue = (a, b) => {
    if (result == 0) {
      //   if the use provides 2 args, add to result
      if (!checkEmptyAndNonNumber(a) && !checkEmptyAndNonNumber(b)) {
        result = parseInt(a) - parseInt(b);
        saveOp("scadere", parseInt(a), parseInt(b), result);
      } else {
        console.log("invalid inputs");
        result = 0;
      }
    } else {
      if (!checkEmptyAndNonNumber(a) && !checkEmptyAndNonNumber(b)) {
        resetHistory();
        result = /*result +*/ parseInt(a) - parseInt(b);
        saveOp("scadere", parseInt(a), parseInt(b), result);
      } else {
        if (checkEmptyAndNonNumber(a) && !checkEmptyAndNonNumber(b)) {
          result = result - parseInt(b);
          saveOp("scadere", null, parseInt(b), result);
          console.log(myMap);
        } else if (!checkEmptyAndNonNumber(a) && checkEmptyAndNonNumber(b)) {
          result = result - parseInt(a);
          saveOp("scadere", parseInt(a), null, result);
        }
      }
    }
  };

  const multiplyValue = (a, b) => {
    if (result == 0) {
      //   if the use provides 2 args, add to result
      if (!checkEmptyAndNonNumber(a) && !checkEmptyAndNonNumber(b)) {
        result = parseInt(a) * parseInt(b);
        saveOp("inmultire", parseInt(a), parseInt(b), result);
      } else {
        console.log("invalid inputs");
        result = 0;
      }
    } else {
      if (!checkEmptyAndNonNumber(a) && !checkEmptyAndNonNumber(b)) {
        resetHistory();
        result = /*result +*/ parseInt(a) * parseInt(b);
        saveOp("inmultire", parseInt(a), parseInt(b), result);
      } else {
        if (checkEmptyAndNonNumber(a) && !checkEmptyAndNonNumber(b)) {
          result = result * parseInt(b);
          saveOp("inmultire", null, parseInt(b), result);
          console.log(myMap);
        } else if (!checkEmptyAndNonNumber(a) && checkEmptyAndNonNumber(b)) {
          result = result * parseInt(a);
          saveOp("inmultire", parseInt(a), null, result);
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
        parseInt(b) != 0
      ) {
        result = parseInt(a) / parseInt(b);
        saveOp("impartire", parseInt(a), parseInt(b), result);
      } else {
        console.log("invalid inputs");
        result = 0;
      }
    } else {
      if (
        !checkEmptyAndNonNumber(a) &&
        !checkEmptyAndNonNumber(b) &&
        parseInt(b) != 0
      ) {
        resetHistory();
        result = /*result +*/ parseInt(a) / parseInt(b);
        saveOp("impartire", parseInt(a), parseInt(b), result);
      } else {
        if (
          checkEmptyAndNonNumber(a) &&
          !checkEmptyAndNonNumber(b) &&
          parseInt(b) != 0
        ) {
          result = result / parseInt(b);
          saveOp("impartire", null, parseInt(b), result);
          console.log(myMap);
        } else if (
          !checkEmptyAndNonNumber(a) &&
          checkEmptyAndNonNumber(b) &&
          parseInt(a) != 0
        ) {
          result = result / parseInt(a);
          saveOp("impartire", parseInt(a), null, result);
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
myCalc.multiplyValue(2,2);
myCalc.addValue(null, "null");
myCalc.addValue("undefined", undefined);
myCalc.addValue("null", "undefined");
myCalc.addValue(null, null);
myCalc.addValue('123null', '1undefined');
console.log("getter value: ", myCalc.currentValue());
myCalc.getHistory();

/**
 * A heap is a tree data structure that keeps to max or min element at the root. So you can have a max-heap or min-heap. Regardless, they have two basic operations: insert and remove.
       
 * 
 * 
 * 
 */

function LCM(a, b) {
  let result = [];

  let i = 2;
  while (a > 1 || b > 1) {
    let isNullReminder = a % i == 0 || b % i == 0;

    if (isNullReminder) {
      a % i == 0 && (a = a / i);
      b % i == 0 && (b = b / i);

      result.push(i);
    } else {
      ++i;
    }
  }

  console.log("result ", result);

  return result;
}

//LCM(3, 4);
LCM(15, 25);

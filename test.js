function ArrayAdditionI(arr) {
  arr.sort((a, b) => b - a);
  let largest = arr[0];

  result = false
  const testAddition = (num, choices) => {
    for (let i = 0; i < choices.length; i++) {
      if (num + choices[i] === largest) {
        result = true;
        return;
      }
      testAddition(num + choices[i], choices.slice(1));
    }
  }
  testAddition(0, arr.slice(1));
  return result;

}
ArrayAdditionI([ 5, 7, 40, 1, 2 ])
ArrayAdditionI([3,5,-1,8,12])
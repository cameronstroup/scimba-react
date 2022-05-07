function printForcast(arr) {
  for (i = 0; i < arr.leangth; i++) {
    console.log(arr[i] + "°C in" + i + "days");
  }
}

let testData1 = [17, 21, 23];
let testData2 = [12, 5, -5, 0, 4];

printForcast([17, 21, 23]);
console.log("hellow");
console.log(printForcast(testData1));

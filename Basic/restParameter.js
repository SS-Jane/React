// REST PARAMETER
function summation1(x, y) {
  return x + y;
};

summation2 = (x, y) => {
  return x + y;
};

summation2 = (x, y, z) => {
    return x + y + z;
  };


// console.log(summation1(10, 20));
// console.log(summation2(10, 30, 40));

summation3 = (...numberArr) => {
    let total = 0;
    for (let number of numberArr) total += number;
    return total
}

summation4 = (...numberArr) => {
    let total = 0;
    for (let i = 0; i < numberArr.length; i++) {
        total += numberArr[i];
        // console.log(number);
        // console.log(totals);
    }
    return total;
}

// console.log(summation3(100,200,300,400));

console.log(summation4(100,200));



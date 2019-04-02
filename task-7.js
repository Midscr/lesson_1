var arr = [1,2,3,4];
var sum = 0;
for (const val of arr) {
  if ((val % 2 === 0)) {
    sum += val;
  }
}
console.log(sum);
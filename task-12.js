var arr = [1,2,3,-5,-2,1,-4];
var arrLength = arr.length;
var sum = 0;
for (let i = 0; i < arrLength; i++) {
  const val = arr[i];
  if (val > 0) {
    sum += val;
  } 
}
console.log(sum);
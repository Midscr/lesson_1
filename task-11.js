var arr = [2, 5, 9, 15, 0, 4];
var arrLength = arr.length;
for (let i = 0; i < arrLength; i++) {
  const val = arr[i];
  if (val > 3 && val < 10) {
    console.log(val);
  } 
}
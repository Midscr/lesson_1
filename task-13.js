var arr = [1, 2, 5, 9, 4, 13, 4, 10];
var arrLength = arr.length;
for (let i = 0; i < arrLength; i++) {
  const val = arr[i];
  if (val === 4) {
    console.log('Есть!');
    break;
  } 
}
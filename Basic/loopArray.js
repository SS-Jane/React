// LOOP ARRAY
// for LOOP , FOREACH ,forof

const data = [10, 20, 30, 40, 50];
console.log("For");
for (let i = 0; i < data.length; i++) {
  console.log(data[i]);
  if (data[i] === 50) {
    data.push(...[60, 70, 80, 90, 100]);
    break;
  }
}
console.log(data);

console.log("ForEach");
data.forEach((e) => {
  if (data[e] === 80) console.log("last 2");
  console.log(e);
});

console.log("ForOf");
for (const e of data) {
  console.log(e);
  if (e === 80) {
    console.log("Stop");
    break;
  }
}

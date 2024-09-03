const newArr = [10,20,30,40];
const data1 =[10,20,...newArr]; //กระจายสมาชิก
const data2 =[1,2];
data2.push(...newArr) //เพิ่มสมาชิก

console.log(data1);
console.log(data2);



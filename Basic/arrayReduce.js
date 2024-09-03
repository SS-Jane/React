//array reduce

const data = [10,20,30,40,50,60,70,80,90,100];

const mapData = data.map( e => 100)

console.log(mapData);

const filterData = data.filter ( e => e>50)

console.log(filterData);

//array.reduce((ค่าที่ถูกประมวลผล,e) => {},ค่าเริ่มต้น)  reduce((x,y)=> {statment},z)  x คือค่าของสมาชิกที่ถูกประมวลผล array y คือสมาชิกใน array z ตือค่าเริ่มต้นของ x 
// reduce จะนำสมาชิกใน array (y) มาบวกแล้วเก็บไว้ในตัวแปร (x) มนแต่ละรอบจบกว่าจะครบจำนวน
let total = 0;
const reduceData = data.reduce( (value,e)=> {
    const total = e+value;
    console.log('value = ' + value);
    console.log('total = ' + total);
    
    return total
},0)

console.log('Total all data =' + reduceData);



const cart = [
    {name:'Cat1',price:2000},
    {name:'Cat2',price:3200},
    {name:'Cat3',price:1500},
    {name:'Cat4',price:4500},
    {name:'Cat5',price:6500},
    {name:'Cat6',price:10000},
    {name:'Cat7',price:8500}
]

// const summation = cart.reduce((value,e)=>{
//     const total = e.price + value;
//     return total
// },0 ) 

// console.log('Total Price = ' + summation);

const summation = cart.reduce((value,e) => e.price + value,0 ) 

console.log('Total cargo = ' + cart.length + ' and ' + 'Total Price = ' + summation);

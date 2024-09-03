// inDexOf({data}) 
// find({data})
// findIndex({data})

const data = [
    10, 20, 30, 40,  50,
    60, 70, 80, 90, 100
  ];

const indexOFData = data.indexOf(50);  // Method IndexOf(x) x คือค่าของสมาชิกใน Array 
console.log(indexOFData); // แสดง Index มามีหรือไม่มี ถ้ามีจะได้ค่า Index ถ้าไม่มีจะได้ค่า -1

const findData = data.find( e => e === 2) 
console.log(findData);  // แสดงค่าที่หาได้ ถ้าหาไม่มีจะได้ค่า undefined

const findIndexOfData = data.findIndex(e => e === 50);
console.log(findIndexOfData); // แสดง Index มามีหรือไม่มี ถ้ามีจะได้ค่า Index ถ้าไม่มีจะได้ค่า -1




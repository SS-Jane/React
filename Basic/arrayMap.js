// นำ array เดิมมาปรับเปลี่ยนโดยใช้ map method โดยค่าที่ได้จะเป็น array ใหม่ต้องมีตัวแปรมารับค่า

const data = [
    10, 20, 30, 40,  50,
    60, 70, 80, 90, 100
  ];

const mapData = data.map((e,i) => `10*${i+1} = ${e}`);
console.log(data);
console.log(mapData);

const findData = mapData.find(e => e === '10*5 = 50');
console.log(findData);




// JOIN, CONCAT
// สองตัวนี้ไม่ทำให้ค่าใน Array เปลี่ยนแปลง ต้องมีตัวแปรมาเก็บค่าหลังเรียกใช้ Method นี้

const data = [10, 20, 30, 40]
const joinData = data.join(';');  // แปลง Array เป้น String แล้วคั้รด้วยเครื่องหมาย ที่ใช้ใน ()
const concatData = data.concat(50,70,'15'); // เพิ่มสมาชิกใน Array ในตำแหน่งสุดท้าย

console.log(data);
console.log(joinData);
console.log(concatData);





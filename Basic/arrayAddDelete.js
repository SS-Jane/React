// Push เพิ่มสมาชิกในลงใน Array ,
// Pop ลบสมาชิกตัวสุดท้ายออกจาก Array,
// Shift ลบสมาชิกตัวแรกออกจาก Array,
// Unshift ลบสมาชิกตัวแรกออกจาก Array,
// Splice splice(x, y) นำตัวแรก Index ที่ X จำนวน Y ออกไปจาก Array,
// Slice slice(x, y) การเรื่อยสมาชิกจากขวาไปซ้าย เหมือนการ shift bit ในตำแหน่ง Index ที่ x ถึง y
// Method เหล่านี้จะแก้ไข Array โยตรงไม่จำเป้นต้องมีตัวแปรมารับค่า
const data = [10, 20, 30, 40];
console.log(data);
const pushData = data.push(...[100, 200, 300]); // เก็บความยาวของ Array แทน
console.log(data);
console.log(pushData); // แสดงจำนวนสมาชิกที่ถูกนำออก

const popData = data.pop(); // นำสมาชิกตัวสุดท้ายออก
console.log(data);
console.log(popData); // แสดงสมาชิกที่ถูกนำออก

const shiftData = data.shift(); // นำสมาชิกตัวแรกออก
console.log(data);
console.log(shiftData); // แสดงสมาชิกที่ถูกนำออก

const unshiftData = data.unshift(...[10, 1000, 2000]); // เพิ่มสมาชิกไปที่ตำแหน่งแรก
console.log(data);
console.log(unshiftData); // แสดงจำนวนสมาชิกหลังจากใช้ Method

const spliceData = data.splice(2, 3, 10000); // splice(x, y, z) นำตัวแรก Index ที่ X จำนวน Y ออกไปจาก Array และนำ Z มาเป็นสมาชิกในตำแหน่งทัลบออกไป
console.log("Splice");
console.log(data);
console.log(spliceData); // แสดงสมาชิกที่ถูกนำออกมาจาก Array
console.log(data.length);
const sliceData = data.slice(1, -3); // slice(x) การเรื่อยสมาชิกจากขวาไปซ้าย เหมือนการ shift bit
console.log("Slice");
console.log(data); // สมาชิกไม่มีการเปลี่ยนแปลง
console.log(sliceData); // แสดงสมาชิกที่ถูกดึงออกมาจาก Array

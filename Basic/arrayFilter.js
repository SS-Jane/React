//array filter
// หลังจากใช้ filter จะได้ array ใหม่กลับมา ต้องสร้างตัวแปรมาเก็บ

const data = [10, 20, 30, 40, 50, 60, 70];

const result = data.filter((e) => e > 20 && e < 60);
console.log(data);
console.log(result);

//use case
const employee = [
  { name: "Jane", salary: "20000", department: "Font-end" },
  { name: "Kam", salary: "18000", department: "Nurs" },
  { name: "Gib", salary: "23000", department: "Engineer" },
  { name: "Nan", salary: "15000", department: "Nurs" },
  { name: "Nun", salary: "25000", department: "Engineer" },
  { name: "SuperJane", salary: "20000000000", department: "CEO" },
];

const result2 = employee
  .filter((e) => e.salary > 20000)
  .filter((e) => e.department === "CEO");
const result3 = employee.filter((e) => e.salary >= 20000 && e.salary <= 30000);
console.log(employee);
console.log(result2);
console.log(result3);

const userRepository = require("../repositories/user-repository");

exports.checkEmailExist = async (email) => {
  const existUser = await userRepository.getUserByEmail(email);
  return !!existUser; // !!existUser จะแปลงค่า existUser ให้เป็น true หากมีค่า truthy (เช่น object, array, string ไม่ใช่ค่าว่าง), และเป็น false หาก existUser เป็น null หรือ undefined.

};

exports.createUser = (user) => userRepository.createUser(user);

exports.getUserByEmail = async (email) => {
  const user = await userRepository.getUserByEmail(email);
  return user;
};

exports.getUserById = (id) => userRepository.getUserById(id);

/* 
ในโค้ดดังกล่าวเป็นฟังก์ชันที่ใช้ในการจัดการข้อมูลผู้ใช้งานในระบบ 
โดยมีการเรียกใช้ฟังก์ชันที่อยู่ใน userRepository ซึ่งเป็นส่วนของเลเยอร์การทำงานกับฐานข้อมูลหรือแหล่งข้อมูลต่าง ๆ

1. checkEmailOrMobileExist: เป็นฟังก์ชันที่ใช้ตรวจสอบว่ามีผู้ใช้งานในระบบที่มีอีเมลหรือหมายเลขโทรศัพท์มือถือ
ที่ตรงกับ emailOrMobile ที่กำหนดหรือไม่ ซึ่งจะเรียกใช้ฟังก์ชัน getUserByEmailOrMobile จาก userRepository เพื่อทำการตรวจสอบ

2. createUser: เป็นฟังก์ชันที่ใช้ในการสร้างข้อมูลผู้ใช้งานใหม่ในระบบ โดยจะเรียกใช้ฟังก์ชัน createUser จาก userRepository เพื่อทำการสร้างข้อมูลผู้ใช้งานใหม่

3. getUserByEmailOrMobile: เป็นฟังก์ชันที่ใช้ในการค้นหาข้อมูลผู้ใช้งานในระบบด้วยอีเมลหรือหมายเลขโทรศัพท์มือถือ emailOrMobile ที่กำหนด 
โดยจะเรียกใช้ฟังก์ชัน getUserByEmailOrMobile จาก userRepository เพื่อทำการค้นหา

4. getUserById: เป็นฟังก์ชันที่ใช้ในการค้นหาข้อมูลผู้ใช้งานในระบบด้วย id ที่กำหนด โดยจะเรียกใช้ฟังก์ชัน getUserById จาก userRepository เพื่อทำการค้นหา
*/

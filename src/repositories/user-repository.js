const { Op } = require('sequelize');
const { User } = require('../models');

exports.getUserByEmail = email =>
  User.findOne({
    where: {
      [Op.or]: [{ email: email }]
    }
  });

exports.createUser = user => User.create(user);

exports.getUserById = id => User.findByPk(id);

/*
โค้ดดังกล่าวเป็นส่วนของ `userRepository` ที่มีฟังก์ชันที่ใช้ในการดำเนินการกับข้อมูลผู้ใช้งานในระบบ 
โดยใช้ Model `User` ที่นำเข้ามาจาก `../models` ซึ่งเป็นโมดูลที่สร้างโดยใช้ Sequelize 
ในการเชื่อมต่อกับฐานข้อมูลและระบุโครงสร้างของตาราง `Users`

1. `getUserByEmailOrMobile(emailOrMobile)`: เป็นฟังก์ชันที่ใช้ในการค้นหาข้อมูลผู้ใช้งานในระบบด้วยอีเมลหรือหมายเลขโทรศัพท์มือถือ `emailOrMobile` ที่กำหนด 
โดยใช้ `User.findOne()` เพื่อค้นหาผู้ใช้งานตามเงื่อนไขที่กำหนดใน `where` ในที่นี้ใช้ `Op.or` คือเงื่อนไข OR ซึ่งจะค้นหาผู้ใช้งานที่มีอีเมลหรือหมายเลขโทรศัพท์มือถือที่ตรงกับ `emailOrMobile`

2. `createUser(user)`: เป็นฟังก์ชันที่ใช้ในการสร้างข้อมูลผู้ใช้งานใหม่ในระบบ โดยใช้ `User.create()` เพื่อสร้างข้อมูลผู้ใช้งานใหม่ในฐานข้อมูล โดย `user` คือข้อมูลที่ต้องการสร้าง

3. `getUserById(id)`: เป็นฟังก์ชันที่ใช้ในการค้นหาข้อมูลผู้ใช้งานในระบบด้วย `id` ที่กำหนด โดยใช้ `User.findByPk(id)` ซึ่งค้นหาผู้ใช้งานจาก primary key (id) ของตาราง `Users`

โดยที่ `Op` เป็นตัวแปรที่นำเข้ามาจาก `sequelize` ซึ่งใช้ในการสร้างเงื่อนไขต่าง ๆ ในการค้นหาข้อมูลในฐานข้อมูล และ `User` เป็น Model ที่สร้างขึ้นจาก `../models` แทนตาราง `Users` ในฐานข้อมูล ซึ่งจะใช้ในการค้นหาและจัดการข้อมูลในตารางนี้ตามฟังก์ชันที่กำหนดใน `userRepository`
 */
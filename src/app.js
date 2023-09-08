// สร้าง ฐานข้อมูล
// const { sequelize } = require("./models");
// sequelize.sync({ alter: true });
// sequelize.sync({ force: true });

require("dotenv").config();
const express = require("express");
const cors = require("cors"); // server สามารถรับ request ต่าง Domain ได้
const morgan = require("morgan"); // แสดง logs ในรูปแบบที่เข้าใจง่าย
const helmet = require("helmet"); // เป็น middleware ที่ช่วยเพิ่มความปลอดภัยให้แอปพลิเคชันของคุณ โดยเพิ่มหรือปรับแต่ง HTTP headers เพื่อป้องกันการโจมตีที่พิเศษเช่น Cross-Site Scripting (XSS), Clickjacking, Cross-Site Request Forgery (CSRF) และอื่น ๆ

const authRoute = require("./routes/auth-route");
const employeeRoute = require("./routes/employee-route");
const orderRoute = require("./routes/order-route");
const comTierRoute = require("./routes/comTier-route");

const notFoundMiddleware = require("./middlewares/not-found");
const errorMiddleware = require("./middlewares/error");
const authenticate = require("./middlewares/authenticate");

const app = express();

app.use(cors());

if (process.env.NODE_ENV === "development") {
  // โชว์ req res ใน log ให้เรา (ใช้ในขั้นตอน Dev เท่านั้น)
  app.use(morgan("dev")); // จะโชว์ log ในโหมด Dev เท่านั้น
}

app.use(helmet());

app.use(express.json()); // แปลงข้อมูลที่มีรูปแบบ JSON String ให้อยู่ในรูป JSON Object

app.use("/auth", authRoute);
app.use("/employee", authenticate, employeeRoute);
app.use("/order", authenticate, orderRoute);
app.use("/comTier", authenticate, comTierRoute);

app.use(notFoundMiddleware);
app.use(errorMiddleware);

const port = process.env.PORT;
app.listen(port, () => console.log("server running on port " + port));

// app.use(express.urlencoded({ extended: false })); // แปลงข้อมูลที่ถูกส่งมาจากแบบฟอร์มแบบ x-www-form-urlencoded ให้เป็น Object

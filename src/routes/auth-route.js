const express = require("express");

const authController = require("../controllers/auth-controller");
const authenticateMiddleware = require('../middlewares/authenticate');

const router = express.Router(); // การสร้าง และกำหนดค่า Router ของ Express เพื่อจัดการเส้นทาง.

// การกำหนดเส้นทาง POST '/register' 
// และทำการผูกกับ controller function 'authController.register' 
// ซึ่งจะดำเนินการเมื่อมีการเรียกเส้นทางนี้
router.post("/register", authController.register);
router.post("/login", authController.login);
router.get('/me', authenticateMiddleware, authController.getMe);

module.exports = router;

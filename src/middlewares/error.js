module.exports = (err, req, res, next) => {
  console.log(err);

  if (err.name === "ValidationError") {
    // 400 Bad Request: ใช้เมื่อคำขอไม่ถูกต้องหรือไม่สามารถเข้าใจได้ เช่นการส่งข้อมูลไม่ถูกต้องในรูปแบบหรือรูปแบบ JSON ไม่ถูกต้อง.
    err.statusCode = 400;
  }
  if (err.name === "SequelizeForeignKeyConstraintError") {
    err.statusCode = 400;
  }

  // 500 Internal Server Error: ใช้เมื่อมีข้อผิดพลาดภายในเซิร์ฟเวอร์ที่ไม่ได้ระบุชนิดของข้อผิดพลาด.
  res.status(err.statusCode || 500).json({ errMessage: err.message });
};

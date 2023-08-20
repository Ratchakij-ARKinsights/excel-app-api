module.exports = (message, statusCode) => {
    const error = new Error(message); // สร้าง Error object
    error.statusCode = statusCode; // กำหนดค่าของ property 'statusCode' ของ Error object เพื่อเก็บ status ของข้อผิดพลาด.
    throw error; // ยกเลิกการทำงาน และส่ง Error object
  };
  
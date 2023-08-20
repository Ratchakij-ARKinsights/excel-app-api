module.exports = (req, res) => {
  //404 Not Found: ใช้เมื่อทรัพยากรที่ร้องขอไม่มีอยู่ หรือไม่พบ.
  res.status(404).json({ message: 'resource not found on this server' });
};

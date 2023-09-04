module.exports = (sequelize, DataTypes) => {
  const Order = sequelize.define(
    "Order",
    {
      date: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      price: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      status: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        default: true,
      },
    },
    { underscored: true } // ใช้ขีดล่างเป็นตัวคั่นชื่อฟิลด์ ชื่อฟิลด์จะเป็น first_name อัตโนมัติ
  );
  return Order;
};

module.exports = (sequelize, DataTypes) => {
  const ComTier = sequelize.define(
    "ComTier",
    {
      rateStart: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      rateEnd: {
        type: DataTypes.INTEGER,
        allowNull: null,
      },
      percent: {
        type: DataTypes.DECIMAL,
        allowNull: false,
      },
    },
    {
      underscored: true, // ใช้ขีดล่างเป็นตัวคั่นชื่อฟิลด์ ชื่อฟิลด์จะเป็น first_name อัตโนมัติ
      timestamps: false,
    }
  );
  return ComTier;
};

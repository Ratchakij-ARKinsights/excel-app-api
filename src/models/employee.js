module.exports = (sequelize, DataTypes) => {
  const Employee = sequelize.define(
    "Employee",
    {
      // agentId: {
      //   type: DataTypes.STRING,
      //   primaryKey: true,
      //   allowNull: false,
      // },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      title: { type: DataTypes.STRING, allowNull: false },
      type: {
        type: DataTypes.STRING,
        default: null,
      },
    },
    { underscored: true } // ใช้ขีดล่างเป็นตัวคั่นชื่อฟิลด์ ชื่อฟิลด์จะเป็น first_name อัตโนมัติ
  );
  Employee.associate = (models) => {
    Employee.hasMany(models.Order, {
      foreignKey: {
        name: "agentId",
        allowNull: false,
      },
      onDelete: "RESTRICT",
      onUpdate: "RESTRICT",
    });

    Employee.belongsTo(models.Employee, {
      foreignKey: {
        name: "leaderId",
        allowNull: true,
      },
      onDelete: "SET NULL",
      onUpdate: "SET NULL",
    });
  };
  return Employee;
};

module.exports = (sequelize, DataTypes) => {
    const Agent = sequelize.define(
        'Agent',
        {
            name: {
                type: DataTypes.STRING,
                allowNull: false,
                validate: {
                    notEmpty: true
                }
            },
            email: {
                type: DataTypes.STRING,
                allowNull: false,
                unique: true,
                validate: {
                    isEmail: true
                }
            },
            code: {
                type: DataTypes.STRING,
                unique: true,
            },
            status: { type: DataTypes.BOOLEAN, default: true },
            job: { type: DataTypes.STRING },
            salary: { type: DataTypes.DECIMAL },
            bank: { type: DataTypes.STRING },
            accountNumber: { type: DataTypes.STRING },
            supervisorId: { type: DataTypes.INTEGER }
        },
        { underscored: true } // ใช้ขีดล่างเป็นตัวคั่นชื่อฟิลด์ ชื่อฟิลด์จะเป็น first_name อัตโนมัติ
    );
    return Agent;
};

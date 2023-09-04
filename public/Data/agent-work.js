module.exports = (sequelize, DataTypes) => {
    const AgentWork = sequelize.define(
        'AgentWork',
        {
            workDays: { type: DataTypes.INTEGER },
            leaveDays: { type: DataTypes.INTEGER },
            benefit: { type: DataTypes.DECIMAL, },
            sso: { type: DataTypes.DECIMAL, },
        },
        { underscored: true } // ใช้ขีดล่างเป็นตัวคั่นชื่อฟิลด์ ชื่อฟิลด์จะเป็น first_name อัตโนมัติ
    );
    return AgentWork;
};

module.exports = (sequelize, DataTypes) => {
    const AgentCom = sequelize.define(
        'AgentCom',
        {
            P1: { type: DataTypes.INTEGER },
            P2: { type: DataTypes.INTEGER },
            P3: { type: DataTypes.INTEGER },
        },
    );
    return AgentCom;
};

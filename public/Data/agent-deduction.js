module.exports = (sequelize, DataTypes) => {
    const AgentDeduction = sequelize.define(
        'AgentDeduction',
        {
            PND_1: { type: DataTypes.DECIMAL },
            PND_3: { type: DataTypes.DECIMAL },
        },
    );
    return AgentDeduction;
};

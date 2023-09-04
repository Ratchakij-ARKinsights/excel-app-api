module.exports = (sequelize, DataTypes) => {
    const Deduction = sequelize.define(
        'Deduction',
        {
            holdPercent: { type: DataTypes.DECIMAL }
        },
        { underscored: true }
    );
    return Deduction;
};

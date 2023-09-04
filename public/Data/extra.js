module.exports = (sequelize, DataTypes) => {
    const Extra = sequelize.define(
        'Extra',
        {
            exceedFrom: { type: DataTypes.INTEGER },
            extraCom: { type: DataTypes.DECIMAL }
        },
        { underscored: true }
    );
    return Extra;
};

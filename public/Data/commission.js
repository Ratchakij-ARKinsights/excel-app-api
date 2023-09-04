module.exports = (sequelize, DataTypes) => {
    const Commission = sequelize.define(
        'Commission',
        {
            comPercent: { type: DataTypes.DECIMAL }
        },
        { underscored: true }
    );
    return Commission;
};

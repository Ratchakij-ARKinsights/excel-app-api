module.exports = (sequelize, DataTypes) => {
    const ProductCom = sequelize.define(
        'ProductCom',
        {
            P1: { type: DataTypes.INTEGER },
            P2: { type: DataTypes.INTEGER },
            P3: { type: DataTypes.INTEGER },
            tier_1: { type: DataTypes.INTEGER },
            tier_2: { type: DataTypes.INTEGER },
            tier_3: { type: DataTypes.INTEGER },
            percent_1: { type: DataTypes.DECIMAL },
            percent_2: { type: DataTypes.DECIMAL },
            percent_3: { type: DataTypes.DECIMAL },
            statusTier_1: { type: DataTypes.BOOLEAN },
            statusTier_2: { type: DataTypes.BOOLEAN },
            statusTier_3: { type: DataTypes.BOOLEAN },
        },
    );
    return ProductCom;
};

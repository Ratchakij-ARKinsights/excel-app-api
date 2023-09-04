module.exports = (sequelize, DataTypes) => {
    const Product = sequelize.define(
        'Product',
        {
            name: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            description: { type: DataTypes.STRING },
            status: { type: DataTypes.BOOLEAN },
        },
    );
    return Product;
};

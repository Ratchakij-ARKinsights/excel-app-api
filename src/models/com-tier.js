module.exports = (sequelize, DataTypes) => {
  const ComTier = sequelize.define(
    "ComTier",
    {
      rateStart: {
        type: DataTypes.INTEGER,
      },
      rateEnd: {
        type: DataTypes.INTEGER,
      },
      percent: {
        type: DataTypes.DECIMAL,
      },
      tierLevel: {
        type: DataTypes.INTEGER,
      },
      amount: {
        type: DataTypes.VIRTUAL, // กำหนดให้เป็น virtual column
        get() {
          return this.getDataValue("rateStart") * this.getDataValue("percent") * 0.01;
        },
      },
    },
    {
      underscored: true,
    }
  );

  return ComTier;
};

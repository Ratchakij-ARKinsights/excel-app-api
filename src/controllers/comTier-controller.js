const { ComTier } = require("../models");

exports.getComTier = async (req, res, next) => {
  try {
    const comTier = await ComTier.findAll({
      order: [["rateStart", "DESC"]],
    });
    res.status(200).json({ comTier });
  } catch (err) {
    next(err);
  }
};

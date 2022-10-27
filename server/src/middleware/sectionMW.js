const { createHttpError } = require('http-errors');
const { Section } = require('../db/models');

module.exports.sectionMW = async (req, res, next) => {
  try {
    const { id } = req.query;

    const section = await Section.findByPk(id);

    if (!section) {
      next(createHttpError(404, 'Section not found!'));
    }

    req.section = section;

    next();
  } catch (error) {
    next(error);
  }
}
const { createHttpError } = require('http-errors');
const { Section } = require('../db/models');

module.exports.findSection = async (req, res, next) => {
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
};

module.exports.findCourseSections = async (req, res, next) => {
  try {

    const { course } = req;

    const sectionsId = await Section.findAll({ 
      where: { courseId: course.id }, 
      attributes: ['id'] })
      .then(sectionsId => sectionsId.map(id => id.id));

    req.sectionsId = sectionsId;

    next();
  } catch (error) {
    next(error);
  }
}
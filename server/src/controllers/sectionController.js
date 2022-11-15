const { Material, Answer, InputBlock, Task, Section } = require('../db/models');
const createHttpError = require('http-errors');

module.exports.getSections = async (req, res, next) => {
  try {
    const { course } = req;

    const sections = await course.getSections();

    res.status(200).send(sections);
  } catch (error) {
    next(error);
  }
};

module.exports.createSection = async (req, res, next) => {
  try {
    const { course, body } = req;

    const section = await course.createSection(body);

    res.status(200).send(section);
  } catch (error) {
    next(error);
  }
};

module.exports.deleteSection = async (req, res, next) => {
  try {

    const { query: { sectionId }, tasksId } = req;

    if (!tasksId) {
      await Answer.destroy({ where: { taskId: tasksId } });

      await InputBlock.destroy({ where: { taskId: tasksId } });

      await Task.destroy({ where: { sectionId } });
    }

    await Material.destroy({ where: { sectionId } });

    const deletedSection = await Section.destroy({ where: { id: sectionId } });

    if (deletedSection !== 1) {
      return next(createHttpError(404, 'Section not found!'))
    }

    res.status(200).send('Section deleted!')
  } catch (error) {
    next(error)
  }
}
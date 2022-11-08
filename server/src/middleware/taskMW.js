const { Task } = require('../db/models');

module.exports.findCourseTasks = async (req, res, next) => {
  try {

    const { sectionsId } = req;

    const tasksId = await Task.findAll({ 
      where: { sectionId: sectionsId },
      attributes: ['id']})
      .then(tasksId => tasksId.map(id => id.id));

    req.tasksId = tasksId;

    next();
  } catch (error) {
    next(error)
  }
}
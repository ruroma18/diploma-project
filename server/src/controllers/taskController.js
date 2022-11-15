const { InputBlock, Answer, Task } = require('../db/models');
const createHttpError = require('http-errors');

module.exports.createTask = async (req, res, next) => {
  try {
    const { section, body, file: { filename } } = req;

    const parsedAnswers = JSON.parse(body.answers);
    const parsedInputBlock = JSON.parse(body.inputBlock)

    const task = await section.createTask({ image: filename, name: body.name, description: body.description });

    const answers = parsedAnswers.filter(answer => answer.text !== '');

    await answers.forEach((item) => {
      task.createAnswer(item)
    })

    await task.createInputBlock(parsedInputBlock);

    res.status(200).send('Task created!')
  } catch (error) {
    next(error);
  }
}

module.exports.getTasks = async (req, res, next) => {
  try {
    const { sectionsId } = req;

    const tasks = await Task.findAll({ where: { sectionId: sectionsId } });

    res.status(200).send(tasks);
  } catch (error) {
    next(error);
  }
};

module.exports.getTaskById = async (req, res, next) => {
  try {
    const { query: { id } } = req;

    const task = await Task.findByPk(id);

    const answers = await task.getAnswers();

    const inputBlock = await task.getInputBlock();

    res.status(200).send({ task, answers, inputBlock })
  } catch (error) {
    next(error);
  }
};

module.exports.deleteTask = async (req, res, next) => {
  try {
    const { id } = req.query;

    await InputBlock.destroy({ where: { taskId: id } });

    await Answer.destroy({where: {taskId: id}});

    const deletedTask = await Task.destroy({where: {id}});

    if(deletedTask !== 1) {
      return next(createHttpError(404, 'Task not found'));
    }

    res.status(200).send('Task deleted!');
  } catch (error) {
    next(error)
  }
}


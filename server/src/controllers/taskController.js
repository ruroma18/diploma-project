const { Section, Task } = require('../db/models');

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
    const { course } = req;

    const sectionsId = await Section.findAll({
      where: { courseId: course.id },
      attributes: ['id']
    })
      .then(sectionsId => sectionsId.map(id => id.id));

    const tasks = await Task.findAll({ where: { sectionId: sectionsId } });

    console.log(tasks)

    res.status(200).send(tasks);
  } catch (error) {
    next(error)
  }
}
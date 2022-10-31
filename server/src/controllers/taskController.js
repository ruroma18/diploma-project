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
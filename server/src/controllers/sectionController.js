module.exports.getSections = async (req, res, next) => {
  try {
    const { course } = req;

    const sections = await course.getSections();

    res.status(200).send(sections);
  } catch (error) {
    next(error);
  }
};

module.exports.createSection = async(req, res, next) => {
  try {
    const {course, body} = req;

    const section = await course.createSection(body);

    res.status(200).send(section);    
  } catch (error) {
    next(error);
  }
};
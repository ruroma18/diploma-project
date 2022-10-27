const { Section, Material } = require('../db/models');

module.exports.getMaterials = async (req, res, next) => {
  try {
    const { course } = req;

    const sectionsId = await Section.findAll({ 
      where: { courseId: course.id }, 
      attributes: ['id'] })
      .then(sectionsId => sectionsId.map(id => id.id));

    const materials = await Material.findAll({where: {sectionId: sectionsId}});

    res.status(200).send(materials);
  } catch (error) {
    next(error);
  }
};

module.exports.createMaterials = async (req, res, next) => {
  try {

    const { section, body, file: { filename } } = req;

    const material = await section.createMaterial({ filePath: filename, ...body });

    console.log(material)

    res.status(200).send(material)

  } catch (error) {
    next(error);
  }
}
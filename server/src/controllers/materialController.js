const { Section, Material } = require('../db/models');

module.exports.getMaterials = async (req, res, next) => {
  try {
    const { sectionsId } = req;

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

    res.status(200).send(material)

  } catch (error) {
    next(error);
  }
}
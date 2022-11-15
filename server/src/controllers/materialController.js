const { Material } = require('../db/models');
const createHttpError = require('http-errors');

module.exports.getMaterials = async (req, res, next) => {
  try {
    const { sectionsId } = req;

    const materials = await Material.findAll({ where: { sectionId: sectionsId } });

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
};

module.exports.deleteMaterial = async (req, res, next) => {
  try {

    const { id } = req.query;

    const deletedMaterial = await Material.destroy({ where: { id } });

    if(deletedMaterial !== 1) {
      return next(createHttpError(404, 'Material not found!'));
    }

    res.status(200).send('Material deleted!')
  } catch (error) {
    next(error)
  }
}
module.exports.getMaterials = async (req, res, next) => {
  try {
    const { section } = req;

    const material = await section.getMaterials();

    res.status(200).send(material);
  } catch (error) {
    next(error);
  }
};

module.exports.createMaterials = async (req, res, next) => {
  try {

    const { section, body, file: { filename } } = req;

    if (body.type === 'video') {
      const material = await section.createMaterial(body);
      res.status(200).send(material)
    }

    if (body.type === 'file') {
      const material = await section.createMaterial({ filePath: filename, ...body });
      res.status(200).send(material)
    }

  } catch (error) {
    next(error);
  }
}
const verificarDadosDeCharactersMiddleware = (req, res, next) => {
  const { name, status, species, type, gender, origin, location, image, episode, url, created } = req.body;

  if (!name || !status || !species || !type || !gender || !origin || !location || !image || !episode || !url || !created) {
    return res.status(422).send('Dados incompletos');
  }

  next();
};

export default verificarDadosDeCharactersMiddleware;

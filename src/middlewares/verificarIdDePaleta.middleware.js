import Paleta from '../models/paletas.model.js';
import mongoose from 'mongoose';

const verificarIdDePaletaMiddleware = async (req, res, next) => {
  const id = req.params.id;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).send({ message: 'ID inválido!' });
  }

  const paleta = await Paleta.findById(id);

  if (!paleta) {
    return res.status(404).send('Paleta não encontrada!');
  }

  next();
};

export default verificarIdDePaletaMiddleware;

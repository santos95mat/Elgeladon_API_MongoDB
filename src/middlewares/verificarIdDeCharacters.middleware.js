import Characters from '../models/rm.models.js';
import mongoose from 'mongoose';

const verificarIdDeCharacterMiddleware = async (req, res, next) => {
  const id = req.params.id;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).send({ message: 'ID inválido!' });
  }

  const character = await Characters.findById(id);

  if (!character) {
    return res.status(404).send('Character não encontrado!');
  }

  next();
};

export default verificarIdDeCharacterMiddleware;

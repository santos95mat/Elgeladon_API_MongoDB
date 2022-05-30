import Paleta from '../models/paletas.model.js';

class PaletasService {
  async listarTodas() {
    const paletas = await Paleta.find();

    if (paletas.length === 0) {
      throw { status: 404, message: 'Nenhuma paleta encontrada' };
    }

    return paletas;
  }

  async listarUmaPaletaPorId({ id }) {
    const paletaSelecionada = await Paleta.findById(id).exec();

    return paletaSelecionada;
  }

  async criarNovaPaleta({ sabor, descricao, foto, preco }) {
    const novaPaleta = {
      sabor,
      descricao,
      foto,
      preco,
    };
    const vPaleta = await Paleta.findOne({ sabor }).exec();

    if (!vPaleta) {
      const paleta = await Paleta.create(novaPaleta);

      return paleta;
    } else {
      throw { status: 401, message: 'Sabor ja cadastrado' };
    }
  }

  async atualizarPaleta({ id, sabor, descricao, foto, preco }) {
    const paletaAtualizada = {
      sabor,
      descricao,
      foto,
      preco,
    };

    const vPaleta = await Paleta.findOne({ sabor }).exec();

    if (!vPaleta) {
      await Paleta.updateOne({ _id: id }, paletaAtualizada);
    } else {
      throw { status: 401, message: 'Sabor ja cadastrado' };
    }

    const paleta = await Paleta.findById(id);

    return paleta;
  }

  async excluirPaleta({ id }) {
    const paleta = await Paleta.findByIdAndDelete(id);

    return paleta;
  }
}

export default PaletasService;

import PaletasService from '../services/paletas.service.js';

const paletasServices = new PaletasService();

class PaletasControllers {
  async listarTodas(req, res) {
    try {
      const paletas = await paletasServices.listarTodas();

      res.send(paletas);
    } catch (error) {
      res.status(error.status).send(error.message);
    }
  }

  async listarUmaPaletaPorId(req, res) {
    const id = req.params.id;

    const paleta = await paletasServices.listarUmaPaletaPorId({ id });

    res.send(paleta);
  }

  async criarNovaPaleta(req, res) {
    const { sabor, descricao, foto, preco } = req.body;

    try {
      const novaPaleta = await paletasServices.criarNovaPaleta({
        sabor,
        descricao,
        foto,
        preco,
      });

      res.status(201).send(novaPaleta);
    } catch (error) {
      res.status(error.status).send(error.message);
    }
  }

  async atualizarPaleta(req, res) {
    const { sabor, descricao, foto, preco } = req.body;
    const id = req.params.id;

    try {
      const paletaAtualizada = await paletasServices.atualizarPaleta({
        id,
        sabor,
        descricao,
        foto,
        preco,
      });

      res.send(paletaAtualizada);
    } catch (error) {
      res.status(error.status).send(error.message);
    }
  }

  async excluirPaleta(req, res) {
    const id = req.params.id;

    const paleta = await paletasServices.excluirPaleta({ id });

    res.status(200).send(paleta);
  }
}

export default PaletasControllers;

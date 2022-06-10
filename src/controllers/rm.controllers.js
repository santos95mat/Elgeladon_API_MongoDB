import CharactersService from '../services/rm.service.js';

const charactersService = new CharactersService();

class CharactersControllers {
  async listarTodas(req, res) {
    try {
      const character = await charactersService.listarTodas();

      res.send(character);
    } catch (error) {
      res.status(error.status).send(error.message);
    }
  }

  async listarUmCharacterPorId(req, res) {
    const id = req.params.id;

    const character = await charactersService.listarUmCharacterPorId({ id });

    res.send(character);
  }

  async criarNovoCharacter(req, res) {
    const { name, status, species, type, gender, origin, location, image, episode, url, created } = req.body;

    try {
      const novoCharacter = await charactersService.criarNovoCharacter({
        name,
        status, 
        species, 
        type, 
        gender, 
        origin, 
        location, 
        image, 
        episode, 
        url, 
        created
      });

      res.status(201).send(novoCharacter);
    } catch (error) {
      res.status(error.status).send(error.message);
    }
  }

  async atualizarCharacter(req, res) {
    const { name, status, species, type, gender, origin, location, image, episode, url, created } = req.body;
    const id = req.params.id;

    try {
      const characterAtualizado = await charactersService.atualizarCharacter({
        name,
        status, 
        species, 
        type, 
        gender, 
        origin, 
        location, 
        image, 
        episode, 
        url, 
        created
      });

      res.send(characterAtualizado);
    } catch (error) {
      res.status(error.status).send(error.message);
    }
  }

  async excluirCharacter(req, res) {
    const id = req.params.id;

    const character = await charactersService.excluirCharacter({ id });

    res.status(200).send(character);
  }
}

export default CharactersControllers;

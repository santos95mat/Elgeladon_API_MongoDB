import Characters from "../models/rm.models.js"

class CharactersService {
  async listarTodas() {
    const characters = await Characters.find();

    if (characters.length === 0) {
      throw { status: 404, message: 'Nenhum characters encontrada' };
    }

    return characters;
  }

  async listarUmCharacterPorId({ id }) {
    const characterSelecionado = await Characters.findById(id).exec();

    return characterSelecionado;
  }

  async criarNovoCharacter({ name, status, species, type, gender, origin, location, image, episode, url, created }) {
    const novoCharacter = {
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
    };
    const vCharacter = await Characters.findOne({ name }).exec();

    if (!vCharacter) {
      const character = await Characters.create(novoCharacter);

      return character;
    } else {
      throw { status: 401, message: 'Personagem ja cadastrado' };
    }
  }

  async atualizarCharacter({ id, name, status, species, type, gender, origin, location, image, episode, url, created }) {
    const characterAtualizada = {
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
    };

    await Characters.updateOne({ _id: id }, characterAtualizada);

    const character = await Characters.findById(id);

    return character;
  }

  async excluirCharacter({ id }) {
    const character = await Characters.findByIdAndDelete(id);

    return character;
  }
}

export default CharactersService;

import * as apiModel from './api/character-collection.api-model';
import * as viewModel from './character-collection.vm';

export const mapFromApiToVm = (
  character: apiModel.CharacterEntityAPI
): viewModel.CharacterEntityVM => ({
  id: character.id,
  name: character.name,
  status: character.status,
  species: character.species,
  type: character.type,
  gender: character.gender,
  location: {
    name: character.location.name,
  },
  image: character.image,
  url: character.url,
  created: character.created,
  comments: character.comments,
});

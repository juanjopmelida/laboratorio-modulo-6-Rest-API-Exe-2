import * as React from 'react';
import { CharacterEntityVM } from './character-collection.vm';
import { getCharacterCollection } from './api';
import { mapFromApiToVm } from './character-collection.mapper';
import { mapToCollection } from 'common/mappers';

export const useCharacterCollection = () => {
  const [characterCollection, setCharacterCollection] = React.useState<
    CharacterEntityVM[]
  >([]);

  const loadCharacterCollection = () => {
    try {
      getCharacterCollection().then((result) =>
        setCharacterCollection(mapToCollection(result, mapFromApiToVm))
      )
    } catch (error) {
      alert(`Error loading character: ${error}`);
    }
  };

  return { characterCollection, loadCharacterCollection };
};

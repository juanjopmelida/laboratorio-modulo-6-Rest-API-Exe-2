export interface Character {
  id: string;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  location: {
    name: string;
  };
  image: string;
  url: string;
  created: string;
  comments: string;
}

export const createEmptyCharacter = (): Character => ({
  id: "0",
  name: '',
  status: '',
  species: '',
  type: '',
  gender: '',
  location: {
    name: '',
  },
  image: '',
  url: '',
  created: '',
  comments: '',
});

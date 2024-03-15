import axios from 'axios';

const URL_JSON = './text.json';

export const fechtJson = async () => {
  try {
    const resposta = await axios.get(URL_JSON);
    return resposta;
  } catch (erro) {
    console.error('Erro ao buscar json: ', erro);
    return [];
  }
};
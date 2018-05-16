import { MAIN_TITLE } from './mutation-types';
import { setMainTitle } from './../../utils/data';

const changeMainTitle = async ({ commit }, value) => {
  const data = await setMainTitle(value);
  commit(MAIN_TITLE, data);
};


export default {
  changeMainTitle,
};

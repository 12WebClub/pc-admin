import { MAIN_TITLE, SELECTED_NAV_INDEX } from './mutation-types';

const mutations = {
  // 改变登录状态
  [MAIN_TITLE](state, value) {
    state.mainTitle = value;
  },
  // 选中导航栏index
  [SELECTED_NAV_INDEX](state, value) {
    state.selectedNavIndex = value;
  },
};

export default mutations;

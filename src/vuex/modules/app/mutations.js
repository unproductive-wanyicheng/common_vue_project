import {
  GET_TAB_LIST,
  SHOW_QR_MODAL,
  SHOW_RULE_MODAL
} from './mutation-type'

const mutations = {
  [GET_TAB_LIST] (state, tabList) {
    state.tabList = tabList;
  },
  [SHOW_QR_MODAL] (state, show) {
    state.qrModal = show;
  },
  [SHOW_RULE_MODAL] (state, show) {
    state.ruleModal = show;
  }
}
export default mutations

// import axios from 'axios';


export const getTabList = ({commit}, params) => {
	const { successCb = ()=>{} } = params;
	axios.post('wap/get_channels.json',
			{
				'mallBrandId': mallBrandId
			}).then((res) => {
		     	const tabList = res.data.result;
		     	tabList&&commit('GET_TAB_LIST', tabList);
		     	successCb(res);
		    })
}

export const showQrModal = ({commit}, show) => {
    commit('SHOW_QR_MODAL', show)
}

export const showRuleModal = ({commit}, show) => {
    commit('SHOW_RULE_MODAL', show)
}

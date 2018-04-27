const state = {
  settings: {}
}

const mutations = {
  SET_SETTING (state, { settings }) {
    state.settings = settings
  }
}

const actions = {
  SET_SETTING_ACTION ({ commit }, settings) {
    commit('SET_SETTING', settings)
  }
}

const getters = {
  currentSetting: state => state.settings
}

export default {
  state,
  mutations,
  actions,
  getters
}

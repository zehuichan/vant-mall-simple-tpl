const state = {
  user_info: {}
}

const mutations = {
  SET_USER_INFO: (state, val) => {
    state.user_info = val
  }
}

const actions = {
  getInfo({commit, state}) {
    return new Promise((resolve, reject) => {
      commit('SET_USER_INFO', {})
      resolve()
    })
  },
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}

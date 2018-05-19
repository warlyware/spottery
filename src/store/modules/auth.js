import api from '../../api/spotify';
import qs from 'qs';

import { router } from '../../main';

const state = {
  token: window.localStorage.getItem('spotify_token')
}

const getters = {
  isLoggedIn: state => !!state.token
}

const mutations = {
  setToken: (state, token) => {
    state.token = token;
  }
}

const actions = {
  login: () => {
    api.login();
  },
  finalizeLogin: ({ commit }, hash) => {
    const { access_token } = qs.parse(hash.replace('#', ''));
    commit('setToken', access_token);
    window.localStorage.setItem('spotify_token', access_token);
    router.push('/');
  },
  logout: ({ commit }) => {
    commit('setToken', null);
    window.localStorage.removeItem('spotify_token');
  },
}

export default {
  state,
  getters,
  mutations,
  actions
}
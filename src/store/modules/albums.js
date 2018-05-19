import axios from 'axios';
const serverUrl = `http://localhost:4000`;

const state = {
  albums: []
}

const getters = {
  allAlbums: (state) => state.albums,
}

const actions = {
  fetchAlbums: async ({ commit }) => {
    const response = await axios.get(`${serverUrl}/api/albums`);
    commit('setAlbums', response.data);
  }
}

const mutations = {
  setAlbums: (state, albums) => state.albums = albums
}

export default {
  state,
  getters,
  actions,
  mutations
}
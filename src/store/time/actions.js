export default {
  start({ commit }) {
    setInterval(() => {
      commit('updateTime');
    }, 1000);
  },
};

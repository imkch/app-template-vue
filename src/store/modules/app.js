import appApi from '@/api/app';

const app = {
  namespaced: true,

  state: {
    baseInfo: null
  },

  mutations: {
    'SET_BASE_INFO' (state, data) {
      state.baseInfo = data;
    }
  },

  actions: {
    async getBaseInfo ({ commit }) {
      const config = await appApi.getAppInfo();
      const env = process.env.NODE_ENV;
      const envConfig = config[env];
      delete config.development;
      delete config.production;
      const baseInfo = Object.freeze(Object.assign(config, envConfig));
      commit('SET_BASE_INFO', baseInfo);
      return baseInfo;
    }
  },
  getters: {
    baseInfo: state => state.baseInfo
  }
};

export default app;

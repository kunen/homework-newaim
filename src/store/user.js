import request from '@/service/request'
export default {
    state: {
        authInfo: {
            token: null,
            iat: null,
            exp: null
        }
	},

    mutations: {
        // 设置权限信息
		SET_AUTH_INFO (state, data) {
			state.authInfo = { ...state.authInfo, ...data }
        },
        // 清空权限信息
        CLEAN_AUTH_INFO(state) {
            Reflect.keys(state.authInfo).forEach(key => {
                state.authInfo[key] = null
            })
        }
	},

    actions: {
        async userLogin({ commit }, { email, password }) {
            const result = await request({
                method: 'post',
                url: '/api/dsz-api/auth',
                data: {
                    email,
                    password
                }
            })
            if (result) {
                commit('SET_AUTH_INFO', result)
                return result
            } else {
                commit('CLEAN_AUTH_INFO')
                return Promise.reject()
            }
        }
    },

    namespaced: true
}

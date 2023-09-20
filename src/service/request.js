import axios from 'axios'
import store from '../store'

axios.defaults.timeout = 600000
axios.defaults.withCredentials = true

axios.defaults.validateStatus = function (status) {
	return status >= 200 && status <= 500
}

// Ignore urls
const ignore = {
	token: ['/auth']
}

axios.interceptors.request.use(
	(config) => {
		if (config.url) {
			if (!ignore.token.some((e) => config.url.includes(e))) {
				const { token } = store.state.User.authInfo
				config.headers['Authorization'] = token ? `Jwt ${token}` : ''
			}
		}

		return config
	},
	(error) => {
		return Promise.reject(error)
	}
);

// Response
axios.interceptors.response.use(
	async (res) => {

        //  可以做一些别的事
        // if (res.status == 401) {
		// }

        if (res.status == 200) {
            return res.data
        } else {
            // 其他错误
            return Promise.reject(`[code: ${res.status}] ${res.config.url}`)
        }
	},
	(error) => {
		return Promise.reject(error)
	}
);

export default axios

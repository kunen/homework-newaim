import { createStore } from 'vuex'
import user from './user'

const store = createStore({
	modules: {
		User: user
	}
})

export default store

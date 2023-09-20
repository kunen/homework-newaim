<template>
	<div>
		<input v-model="email" placeholder="邮箱">
		<input v-model="password" placeholder="密码">
		<button @click="onSubmit">登录</button>
	</div>
</template>

<script setup>
import { ref } from 'vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'
const store = useStore()
const router = useRouter()
const email = ref('test_account@dsz.com.au')
const password = ref('asdf_123456')

async function onSubmit() {
	if (!email.value || !password.value) {
		alert('请输入正确的用户名或密码')
		return
	}

	const userInfo = {
		email: email.value,
		password: password.value
	}

	const authInfo = await store.dispatch('User/userLogin', userInfo)
	alert('登录成功！token：' + authInfo.token)

	router.push({ name: 'List' })

}
</script>

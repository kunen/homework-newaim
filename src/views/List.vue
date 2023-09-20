<template>
	<div>
		<input v-model="page" placeholder="页码">
		<input v-model="limit" placeholder="条数">
		<button @click="getData">获取数据</button>
		<div>{{ strData || '正在获取数据...' }}</div>
	</div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'
import request from '@/service/request'
const store = useStore()
const router = useRouter()

const page = ref(2)
const limit = ref(100)
const strData = ref(null)

async function getData() {
	const { result } = await request(`/api/dsz-api/products?&page_no=${page.value}&limit=${limit.value}`)
	result && (strData.value = JSON.stringify(result))
}

onMounted(() => {
	getData()
})
</script>

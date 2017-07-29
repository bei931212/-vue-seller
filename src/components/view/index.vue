<template>
	<div class="index">
		<v-header></v-header>
		<router-view></router-view>
		<v-footer></v-footer>
	</div>
</template>
<script>
import Header from "@/components/public/header.vue"
import Footer from "@/components/public/footer.vue"
export default{
	components:{
		"v-header": Header,
		"v-footer": Footer
	}
}
</script>
<style>
	
</style>
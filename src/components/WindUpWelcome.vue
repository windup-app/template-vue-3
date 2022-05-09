<script>
import { ref, onBeforeMount } from "vue";
export default {
	name: "WindUpWelcome",
	setup() {
		const e = ref("");
		return (
			onBeforeMount(() => {
				((e, n) => {
					var t = new XMLHttpRequest();
					t.overrideMimeType("application/json"),
						t.open("GET", e, !0),
						(t.onreadystatechange = function () {
							4 === t.readyState && "200" == t.status && n(t.responseText);
						}),
						t.send(null);
				})("https://cdn.windup.app/images/template/htmlJS.json", function (n) {
					e.value = JSON.parse(n);
				});
			}),
			{ e }
		);
	},
};
</script>

<template>
	<div class="container" v-html="e.html"></div>
</template>

<style>
@import "https://cdn.windup.app/images/template/WindUpWelcomeStyles.min.css";
</style>

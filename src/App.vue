<script>
/* ----- IMPORT:PACKAGES ------------------------- */
/* ----- IMPORT:LAYOUT ------------------------- */
import LayoutDefault from "./layouts/default.vue";

export default {
	/* ----- SETUP:PAGE NAME ------------------------- */
	name: "App",
	/* ----- SETUP:COMPONENTS ------------------------- */
	components: {
		LayoutDefault,
	},
	setup() {
		/* ----- SETUP:INTERFACE ------------------------- */

		/* ----- SETUP:DATA ------------------------- */

		/* ----- SETUP:METHOD ------------------------- */

		/* ----- SETUP:ONMOUNTED ------------------------- */

		/* ----- RETURN:VARIABLES ------------------------- */
		return {};
	},
};
</script>

<template>
	<LayoutDefault>
		<router-view />
	</LayoutDefault>
</template>

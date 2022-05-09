/* ----- IMPORT:PACKAGES------------------------- */
import { createRouter, createWebHistory } from "vue-router";

/* ----- SET:SITE TITLE------------------------- */
const siteTitle = "WindUp";

/* ----- SET:ROUTES------------------------- */
const routes = [
	/* ----- CREATE:ROUTE:Home------------------------- */
	{
		path: "/",
		name: "homePage",
		component: () => import("../../pages/index.vue"),
		meta: {
			title: "Home Page",
			metaTags: [
				{
					name: "description",
					content: "This is a home page template made by WindUp ❤️",
				},
				{
					name: "keywords",
					content: "CWS, Vue.js Template, Internal Use Only",
				},
			],
		},
	},
];

/* ----- CREATE:ROUTER------------------------- */
const router = createRouter({
	history: createWebHistory(),
	routes,
});

/* ----- NAVIGATION GUARD:META------------------------- */
router.beforeEach((e, t, a) => {
	const r = e.matched
			.slice()
			.reverse()
			.find((e) => e.meta && e.meta.title),
		m = e.matched
			.slice()
			.reverse()
			.find((e) => e.meta && e.meta.metaTags),
		c = t.matched
			.slice()
			.reverse()
			.find((e) => e.meta && e.meta.metaTags);
	if (
		(r ? (document.title = `${r.meta.title} | ${siteTitle}`) : c && (document.title = c.meta.title),
		Array.from(document.querySelectorAll("[data-vue-router-controlled]")).map((e) => e.parentNode.removeChild(e)),
		!m)
	)
		return a();
	m.meta.metaTags
		.map((e) => {
			const t = document.createElement("meta");
			return (
				Object.keys(e).forEach((a) => {
					t.setAttribute(a, e[a]);
				}),
				t.setAttribute("data-vue-router-controlled", ""),
				t
			);
		})
		.forEach((e) => document.head.appendChild(e)),
		a();
});

/* ----- EXPORT:ROUTER------------------------- */
export default router;

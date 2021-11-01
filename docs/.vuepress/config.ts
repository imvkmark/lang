const sidebar = require("./sidebar.js");
const navbar = require("./navbar.js");
const { path } = require("@vuepress/utils");

console.log(__dirname, "dirname");
module.exports = {
	lang: "zh-CN",
	title: "Lang @ Wulicode",
	base: "/lang/",
	themeConfig: {
		logo: "/images/logo.png",
		sidebar,
		navbar,
		repo: "https://github.com/imvkmark/lang",
		displayAllHeaders: true,
		smoothScroll: true,
		docsBranch: "master",
		docsDir: "docs",
	},
	alias: {
		
	},
	markdown: {
		code: {
			// lineNumbers: false,
		},
	},
	plugins: [
		[
			// https://v2.vuepress.vuejs.org/zh/reference/plugin/register-components.html#配置项
			"@vuepress/register-components",
			{},
		],
		[
			"@vuepress/docsearch",
			{
				apiKey: "9eca016e40335ee789f9a73253c13be1",
				indexName: "lang",
				appId: "LD89A1JN8Y",
				locales: {
					"/": {
						placeholder: "Search",
					},
				},
			},
		],
	],
};

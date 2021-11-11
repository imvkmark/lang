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
	alias: {},
	markdown: {
		code: {
			// lineNumbers: false,
		},
	},
	plugins: [],
};

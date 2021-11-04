module.exports = {
	"/": ["/readme.md", "/intro/how.md"],
	"/web/": [
		"/web/readme.md",
		{
			text: "核心",
			collapsable: true,
			sidebarDepth: 2,
			children: [
                "/web/core/best-practice.md",
                "/web/core/favicon.md",
                "/web/core/code-review/js-01.md"
        ],
		},
		{
			text: "Npm & Yarn",
			collapsable: true,
			sidebarDepth: 2,
			children: [
				"/web/npm/npm-package.md",
				"/web/npm/faq.md",
				"/web/npm/npm-mirror.md",
				"/web/npm/yarn-mirror.md",
			],
		},
		{
			text: "Vue 3 + Vite",
			collapsable: true,
			sidebarDepth: 2,
			children: ["/web/vue/readme.md", "/web/vue/faq.md"],
		},
		{
			text: "React",
			collapsable: true,
			sidebarDepth: 2,
			children: ["/web/react/faq.md"],
		},
		{
			text: "三方 & 服务",
			collapsable: true,
			sidebarDepth: 2,
			children: [
				"/web/vendor/intro-jsdoc.md",
				"/web/vendor/axios-interceptors.md",
				"/web/vendor/sentry-install-with-sourcemap.md",
				"/web/vendor/api-cloud.md",
			],
		},
		"/web/faq.md",
	],
	"/shell/": [
		{
			text: "Shell 学习笔记",
			collapsable: true,
			sidebarDepth: 2,
			children: [
				"/shell/1_intro.md",
				{
					text: "语法结构",
					link: "/shell/3_lang_ref/1_syntax.html",
					collapsable: false,
					sidebarDepth: 1,
					children: [
						"/shell/3_lang_ref/1_syntax.md",
						"/shell/3_lang_ref/2_types_array.md",
						"/shell/3_lang_ref/2_types_string.md",
						"/shell/3_lang_ref/3_variables.md",
						"/shell/3_lang_ref/4_operator.md",
						"/shell/3_lang_ref/5_control.md",
						"/shell/3_lang_ref/6_function.md",
					],
				},
				"/shell/4_command.md",
			],
		},
	],
	"/php/": [
		"/php/readme.md",
		{
			text: "核心",
			collapsable: true,
			sidebarDepth: 2,
			children: ["/php/core/1_intro.md", "/php/core/faq.md", "/php/core/upgrade-7.4.md"],
		},
		{
			text: "Laravel",
			collapsable: true,
			sidebarDepth: 2,
			children: ["/php/laravel/upgrade-5.5-6.0.md", "/php/laravel/upgrade-6.0-6.x.md"],
		},
		{
			text: "三方&服务",
			collapsable: true,
			sidebarDepth: 2,
			children: ["/php/vendor/fzaninotto-faker-readme.md"],
		},
	],
};

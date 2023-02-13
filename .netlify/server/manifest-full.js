export const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png","my-document.pdf"]),
	mimeTypes: {".png":"image/png",".pdf":"application/pdf"},
	_: {
		entry: {"file":"_app/immutable/start-f2a37d49.js","imports":["_app/immutable/start-f2a37d49.js","_app/immutable/chunks/index-39367489.js","_app/immutable/chunks/singletons-98cd1d9d.js","_app/immutable/chunks/index-ed4df99f.js","_app/immutable/chunks/shared-2a17d754.js","_app/immutable/chunks/preload-helper-41c905a7.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			() => import('./nodes/0.js'),
			() => import('./nodes/1.js'),
			() => import('./nodes/2.js'),
			() => import('./nodes/3.js'),
			() => import('./nodes/4.js'),
			() => import('./nodes/5.js'),
			() => import('./nodes/6.js'),
			() => import('./nodes/7.js'),
			() => import('./nodes/8.js')
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 3 },
				endpoint: null
			},
			{
				id: "/echarts3d",
				pattern: /^\/echarts3d\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 5 },
				endpoint: null
			},
			{
				id: "/echarts",
				pattern: /^\/echarts\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 4 },
				endpoint: null
			},
			{
				id: "/jspread",
				pattern: /^\/jspread\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 6 },
				endpoint: null
			},
			{
				id: "/mdsvex01",
				pattern: /^\/mdsvex01\/?$/,
				params: [],
				page: { layouts: [0,2], errors: [1,,], leaf: 7 },
				endpoint: null
			},
			{
				id: "/perspective",
				pattern: /^\/perspective\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 8 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
};

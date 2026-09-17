globalThis.__nitro_main__ = import.meta.url;
import { i as HTTPError, n as defineLazyEventHandler, t as H3Core } from "./_libs/h3+rou3+srvx.mjs";
import { t as HookableCore } from "./_libs/hookable.mjs";
import { r as FastResponse } from "./_libs/h3-v2+rou3+srvx.mjs";
//#region #nitro-vite-setup
function lazyService(loader) {
	let promise, mod;
	return { fetch(req) {
		if (mod) return mod.fetch(req);
		if (!promise) promise = loader().then((_mod) => mod = _mod.default || _mod);
		return promise.then((mod) => mod.fetch(req));
	} };
}
var services = { ["ssr"]: lazyService(() => import("./_ssr/ssr.mjs")) };
globalThis.__nitro_vite_envs__ = services;
//#endregion
//#region #nitro/virtual/public-assets-data
var public_assets_data_default = {
	"/assets/arrow-left-Bi4D6cuT.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"a5-zjVzm/Q1dUdgAKq3mehHvce9z6A\"",
		"mtime": "2026-09-17T14:42:33.162Z",
		"size": 165,
		"path": "../public/assets/arrow-left-Bi4D6cuT.js"
	},
	"/assets/api-BpCgsloS.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"b4ff-KyaCg7TXILU27kCEeXwEmjRjEks\"",
		"mtime": "2026-09-17T14:42:33.161Z",
		"size": 46335,
		"path": "../public/assets/api-BpCgsloS.js"
	},
	"/assets/avatar-DYrlkCwo.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"9d5-9/3he/IK3QM2yZXT5EJTXf1i/ZI\"",
		"mtime": "2026-09-17T14:42:33.164Z",
		"size": 2517,
		"path": "../public/assets/avatar-DYrlkCwo.js"
	},
	"/assets/building-2-F49g9guO.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"17f-6xtXO+wyGgH7sm+nsqoEpptjZik\"",
		"mtime": "2026-09-17T14:42:33.165Z",
		"size": 383,
		"path": "../public/assets/building-2-F49g9guO.js"
	},
	"/assets/checkbox-XjIBLy-o.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"112f-sCbnX3Y8+FtAwkJ6MvGSAPTfmD0\"",
		"mtime": "2026-09-17T14:42:33.166Z",
		"size": 4399,
		"path": "../public/assets/checkbox-XjIBLy-o.js"
	},
	"/assets/createLucideIcon-CGUPU81N.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"4a3-LFSBXuqGn8QccYj8Fr1lc453XkQ\"",
		"mtime": "2026-09-17T14:42:33.167Z",
		"size": 1187,
		"path": "../public/assets/createLucideIcon-CGUPU81N.js"
	},
	"/assets/dist-0QpC2Auf.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1b3b-tA2tEqJJ+AbUyfvUTnCd/reelJ8\"",
		"mtime": "2026-09-17T14:42:33.174Z",
		"size": 6971,
		"path": "../public/assets/dist-0QpC2Auf.js"
	},
	"/assets/dist-CkzsqTIP.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"228-qDR0zLaMoSn+0wSvEPOmIrfOwbY\"",
		"mtime": "2026-09-17T14:42:33.180Z",
		"size": 552,
		"path": "../public/assets/dist-CkzsqTIP.js"
	},
	"/assets/dist-CS6IsBMX.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1c70-ht2nSeiNjV4uQ+fI8UPajlYDTKE\"",
		"mtime": "2026-09-17T14:42:33.179Z",
		"size": 7280,
		"path": "../public/assets/dist-CS6IsBMX.js"
	},
	"/assets/dist-DaOFzyo1.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"82e4-ZD9RLD0+QHKKebOq0M4stunOFTs\"",
		"mtime": "2026-09-17T14:42:33.180Z",
		"size": 33508,
		"path": "../public/assets/dist-DaOFzyo1.js"
	},
	"/robots.txt": {
		"type": "text/plain; charset=utf-8",
		"etag": "\"a0-CKGXSIe7TSsqDTmGm/nY1t/o5d0\"",
		"mtime": "2026-09-12T13:45:41.545Z",
		"size": 160,
		"path": "../public/robots.txt"
	},
	"/assets/dist-DtzH2mf0.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"2ec-mBYcd57srZAxVsZ7ucQ6cCr9mNY\"",
		"mtime": "2026-09-17T14:42:33.196Z",
		"size": 748,
		"path": "../public/assets/dist-DtzH2mf0.js"
	},
	"/assets/dist-NUUIF_83.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1051-W5UXUH1Xasvk38rVzqsWZvLb0FQ\"",
		"mtime": "2026-09-17T14:42:33.209Z",
		"size": 4177,
		"path": "../public/assets/dist-NUUIF_83.js"
	},
	"/assets/edit-profile-P3UBs0J-.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"13c4-wEQ/MQ5mfikYg5z679gDnjXmsKs\"",
		"mtime": "2026-09-17T14:42:33.210Z",
		"size": 5060,
		"path": "../public/assets/edit-profile-P3UBs0J-.js"
	},
	"/assets/feed-page-DhL7P2cx.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1430-RvZN3pNIZnUE1uoSmCfURaPs8v0\"",
		"mtime": "2026-09-17T14:42:33.214Z",
		"size": 5168,
		"path": "../public/assets/feed-page-DhL7P2cx.js"
	},
	"/assets/input-DEBwXu6_.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"244-5JTwdsFeLKC83LMTS9YUFlEvrro\"",
		"mtime": "2026-09-17T14:42:33.215Z",
		"size": 580,
		"path": "../public/assets/input-DEBwXu6_.js"
	},
	"/assets/label-kfkfxXcn.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"264-aUp/jUUaRYyls600SYJuKZB9F3Q\"",
		"mtime": "2026-09-17T14:42:33.224Z",
		"size": 612,
		"path": "../public/assets/label-kfkfxXcn.js"
	},
	"/assets/link-BnP1pFVc.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"5ad2-6lP5RY+ArsZkb2r8wYoH5+de+i4\"",
		"mtime": "2026-09-17T14:42:33.227Z",
		"size": 23250,
		"path": "../public/assets/link-BnP1pFVc.js"
	},
	"/assets/listing-card-BHsAonL9.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"f2a-eH8pDsTglZDNoKKrUt1rlJ61c1c\"",
		"mtime": "2026-09-17T14:42:33.228Z",
		"size": 3882,
		"path": "../public/assets/listing-card-BHsAonL9.js"
	},
	"/assets/listing._id-8uLaP2U5.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1eca-n4DIzdMb0L7oUcgqelCUmWNzmZM\"",
		"mtime": "2026-09-17T14:42:33.232Z",
		"size": 7882,
		"path": "../public/assets/listing._id-8uLaP2U5.js"
	},
	"/assets/listing._id-BN7nt2Ex.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"71d6-ZquGNK4Sc+4alVNsnlc0iWVxpOQ\"",
		"mtime": "2026-09-17T14:42:33.233Z",
		"size": 29142,
		"path": "../public/assets/listing._id-BN7nt2Ex.js"
	},
	"/assets/loader-circle-MvDd-TiU.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"90-hJPJLBkMGX7/KJNgc84aMFnHCaE\"",
		"mtime": "2026-09-17T14:42:33.234Z",
		"size": 144,
		"path": "../public/assets/loader-circle-MvDd-TiU.js"
	},
	"/assets/login-BG7oTPN7.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"a81-gIQN7YZCkQLMmGNdDa5lEPGBfwg\"",
		"mtime": "2026-09-17T14:42:33.235Z",
		"size": 2689,
		"path": "../public/assets/login-BG7oTPN7.js"
	},
	"/assets/index-DUDSFrgX.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"626ac-q0/ZqaxjsyOTATWDKPBNbnCkEzk\"",
		"mtime": "2026-09-17T14:42:33.159Z",
		"size": 403116,
		"path": "../public/assets/index-DUDSFrgX.js"
	},
	"/campus-crate-logo.png": {
		"type": "image/png",
		"etag": "\"9d6-KZhBuXsxPOyciSc5eH8NwVDfaYs\"",
		"mtime": "2026-09-17T14:24:18.819Z",
		"size": 2518,
		"path": "../public/campus-crate-logo.png"
	},
	"/assets/lost-and-found-C_KNCXuD.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"91-fpeoK/A910X8mKEWECrkDCjKKj4\"",
		"mtime": "2026-09-17T14:42:33.235Z",
		"size": 145,
		"path": "../public/assets/lost-and-found-C_KNCXuD.js"
	},
	"/assets/my-listings-DZ3wCMug.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"123b-iLJIvny0Erg9pC/v2tLzbyDiOgI\"",
		"mtime": "2026-09-17T14:42:33.250Z",
		"size": 4667,
		"path": "../public/assets/my-listings-DZ3wCMug.js"
	},
	"/assets/marketplace-BIzQOUnN.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"93-BzYrICbpkB76IQ9Nj1p7ZzKrYjM\"",
		"mtime": "2026-09-17T14:42:33.249Z",
		"size": 147,
		"path": "../public/assets/marketplace-BIzQOUnN.js"
	},
	"/assets/preload-helper-DNevUDem.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"181f-jV2Ev+ZTE20Q6TU/+MSiZXtJ6OI\"",
		"mtime": "2026-09-17T14:42:33.254Z",
		"size": 6175,
		"path": "../public/assets/preload-helper-DNevUDem.js"
	},
	"/assets/plus-B0l_WNYG.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"99-u6mcRPoZ6O9OgCmPgVEitbo2qiQ\"",
		"mtime": "2026-09-17T14:42:33.253Z",
		"size": 153,
		"path": "../public/assets/plus-B0l_WNYG.js"
	},
	"/assets/require-auth-Dc3aXvG5.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"179-PY69r8N/67o8aFZQf3m5a8TN5q4\"",
		"mtime": "2026-09-17T14:42:33.255Z",
		"size": 377,
		"path": "../public/assets/require-auth-Dc3aXvG5.js"
	},
	"/assets/routes-D8ygez2k.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1bf6-bXaMKHIpuO+tGjGUqaJOd6YU97s\"",
		"mtime": "2026-09-17T14:42:33.263Z",
		"size": 7158,
		"path": "../public/assets/routes-D8ygez2k.js"
	},
	"/assets/search-Cxj4Yz6a.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"ae-uAPAPWUKjDKsM9Yk41MFQhNLH0w\"",
		"mtime": "2026-09-17T14:42:33.265Z",
		"size": 174,
		"path": "../public/assets/search-Cxj4Yz6a.js"
	},
	"/assets/shield-check--Wf2uq3z.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"140-ZhTEBpZIdV44YmQ8bkgNUnKHZBo\"",
		"mtime": "2026-09-17T14:42:33.266Z",
		"size": 320,
		"path": "../public/assets/shield-check--Wf2uq3z.js"
	},
	"/assets/signup-FbAHUTtR.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1340-kNVTJyPdtU/0zwLi2a6TFwjP+6w\"",
		"mtime": "2026-09-17T14:42:33.278Z",
		"size": 4928,
		"path": "../public/assets/signup-FbAHUTtR.js"
	},
	"/assets/slider-OHq2RCV4.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"2a21-RvM8TxsJELbeGNAbd5wU78e/3Eo\"",
		"mtime": "2026-09-17T14:42:33.279Z",
		"size": 10785,
		"path": "../public/assets/slider-OHq2RCV4.js"
	},
	"/assets/styles-BsMQVgBM.css": {
		"type": "text/css; charset=utf-8",
		"etag": "\"14c4e-sEnExkyv3Mhx9sFGAaqDhgHl094\"",
		"mtime": "2026-09-17T14:42:33.321Z",
		"size": 85070,
		"path": "../public/assets/styles-BsMQVgBM.css"
	},
	"/assets/tabs-CqB1DZ_W.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"dcb-IC+mgA0JJ0PUl9/QFStqiqVS2pE\"",
		"mtime": "2026-09-17T14:42:33.280Z",
		"size": 3531,
		"path": "../public/assets/tabs-CqB1DZ_W.js"
	},
	"/assets/to-let-BwWmltcf.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"2236-7FIDXISH3+6W5n7waMEVgV21pw0\"",
		"mtime": "2026-09-17T14:42:33.281Z",
		"size": 8758,
		"path": "../public/assets/to-let-BwWmltcf.js"
	},
	"/assets/user-round-CWS8AVo6.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1d5-cKFwRpM0hkitrOuRvEG9UvJ2JuQ\"",
		"mtime": "2026-09-17T14:42:33.303Z",
		"size": 469,
		"path": "../public/assets/user-round-CWS8AVo6.js"
	},
	"/assets/useNavigate-BH7hjxoJ.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"b7-EHvsVc2hgCTYs+f5NRr8rcAYOL0\"",
		"mtime": "2026-09-17T14:42:33.282Z",
		"size": 183,
		"path": "../public/assets/useNavigate-BH7hjxoJ.js"
	},
	"/assets/verify-email-CTzdsEgo.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1f4-TkLyPjdbWSE91dXg63HvR5IXomQ\"",
		"mtime": "2026-09-17T14:42:33.304Z",
		"size": 500,
		"path": "../public/assets/verify-email-CTzdsEgo.js"
	},
	"/assets/verify-email-DJvZw26c.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"985-gvyXLRnC3JtQCP1yDam5QOTL8HY\"",
		"mtime": "2026-09-17T14:42:33.306Z",
		"size": 2437,
		"path": "../public/assets/verify-email-DJvZw26c.js"
	},
	"/assets/x-BshCf4nC.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"9a-1y7Hqu81Z137dw3ejD8RsYIHodQ\"",
		"mtime": "2026-09-17T14:42:33.307Z",
		"size": 154,
		"path": "../public/assets/x-BshCf4nC.js"
	}
};
//#endregion
//#region #nitro/virtual/public-assets
var publicAssetBases = {};
function isPublicAssetURL(id = "") {
	if (public_assets_data_default[id]) return true;
	for (const base in publicAssetBases) if (id.startsWith(base)) return true;
	return false;
}
//#endregion
//#region node_modules/nitro/dist/runtime/internal/route-rules.mjs
var headers = ((m) => function headersRouteRule(event) {
	for (const [key, value] of Object.entries(m.options || {})) event.res.headers.set(key, value);
});
//#endregion
//#region #nitro/virtual/routing
var findRouteRules = /* @__PURE__ */ (() => {
	const $0 = [{
		name: "headers",
		route: "/assets/**",
		handler: headers,
		options: { "cache-control": "public, max-age=31536000, immutable" }
	}];
	return (m, p) => {
		let r = [];
		if (p.charCodeAt(p.length - 1) === 47) p = p.slice(0, -1) || "/";
		let s = p.split("/");
		if (s.length > 1) {
			if (s[1] === "assets") r.unshift({
				data: $0,
				params: { "_": s.slice(2).join("/") }
			});
		}
		return r;
	};
})();
var _lazy_O9dZgY = defineLazyEventHandler(() => import("./_chunks/ssr-renderer.mjs"));
var findRoute = /* @__PURE__ */ (() => {
	const data = {
		route: "/**",
		handler: _lazy_O9dZgY
	};
	return ((_m, p) => {
		return {
			data,
			params: { "_": p.slice(1) }
		};
	});
})();
[].filter(Boolean);
//#endregion
//#region node_modules/nitro/dist/runtime/internal/error/prod.mjs
var errorHandler = (error, event) => {
	const res = defaultHandler(error, event);
	return new FastResponse(typeof res.body === "string" ? res.body : JSON.stringify(res.body, null, 2), res);
};
function defaultHandler(error, event) {
	const unhandled = error.unhandled ?? !HTTPError.isError(error);
	const { status = 500, statusText = "" } = unhandled ? {} : error;
	if (status === 404) {
		const url = event.url || new URL(event.req.url);
		const baseURL = "/";
		if (/^\/[^/]/.test(baseURL) && !url.pathname.startsWith(baseURL)) return {
			status: 302,
			headers: new Headers({ location: `${baseURL}${url.pathname.slice(1)}${url.search}` })
		};
	}
	const headers = new Headers(unhandled ? {} : error.headers);
	headers.set("content-type", "application/json; charset=utf-8");
	return {
		status,
		statusText,
		headers,
		body: {
			error: true,
			...unhandled ? {
				status,
				unhandled: true
			} : typeof error.toJSON === "function" ? error.toJSON() : {
				status,
				statusText,
				message: error.message
			}
		}
	};
}
//#endregion
//#region #nitro/virtual/error-handler
var errorHandlers = [errorHandler];
async function error_handler_default(error, event) {
	for (const handler of errorHandlers) try {
		const response = await handler(error, event, { defaultHandler });
		if (response) return response;
	} catch (error) {
		console.error(error);
	}
}
//#endregion
//#region #nitro/virtual/app
function createNitroApp() {
	const captureError = (error, errorCtx) => {
		if (errorCtx?.event) {
			const errors = errorCtx.event.req.context?.nitro?.errors;
			if (errors) errors.push({
				error,
				context: errorCtx
			});
		}
	};
	const h3App = createH3App({ onError(error, event) {
		return error_handler_default(error, event);
	} });
	let appHandler = (req) => {
		req.context ||= {};
		req.context.nitro = req.context.nitro || { errors: [] };
		return h3App.fetch(req);
	};
	return {
		fetch: appHandler,
		h3: h3App,
		hooks: void 0,
		captureError
	};
}
function createH3App(config) {
	const h3App = new H3Core(config);
	h3App["~findRoute"] = (event) => findRoute(event.req.method, event.url.pathname);
	h3App["~getMiddleware"] = (event, route) => {
		const pathname = event.url.pathname;
		const method = event.req.method;
		const middleware = [];
		const routeRules = getRouteRules(method, pathname);
		event.context.routeRules = routeRules?.routeRules;
		if (routeRules?.routeRuleMiddleware.length) middleware.push(...routeRules.routeRuleMiddleware);
		if (route?.data?.middleware?.length) middleware.push(...route.data.middleware);
		return middleware;
	};
	return h3App;
}
//#endregion
//#region node_modules/nitro/dist/runtime/internal/app.mjs
var APP_ID = "default";
function useNitroApp() {
	let instance = useNitroApp._instance;
	if (instance) return instance;
	instance = useNitroApp._instance = createNitroApp();
	globalThis.__nitro__ = globalThis.__nitro__ || {};
	globalThis.__nitro__[APP_ID] = instance;
	return instance;
}
function useNitroHooks() {
	const nitroApp = useNitroApp();
	const hooks = nitroApp.hooks;
	if (hooks) return hooks;
	return nitroApp.hooks = new HookableCore();
}
function getRouteRules(method, pathname) {
	const m = findRouteRules(method, pathname);
	if (!m?.length) return { routeRuleMiddleware: [] };
	const routeRules = {};
	for (const layer of m) for (const rule of layer.data) {
		const currentRule = routeRules[rule.name];
		if (currentRule) {
			if (rule.options === false) {
				delete routeRules[rule.name];
				continue;
			}
			if (typeof currentRule.options === "object" && typeof rule.options === "object") currentRule.options = {
				...currentRule.options,
				...rule.options
			};
			else currentRule.options = rule.options;
			currentRule.route = rule.route;
			currentRule.params = {
				...currentRule.params,
				...layer.params
			};
		} else if (rule.options !== false) routeRules[rule.name] = {
			...rule,
			params: layer.params
		};
	}
	const middleware = [];
	const orderedRules = Object.values(routeRules).sort((a, b) => (a.handler?.order || 0) - (b.handler?.order || 0));
	for (const rule of orderedRules) {
		if (rule.options === false || !rule.handler) continue;
		middleware.push(rule.handler(rule));
	}
	return {
		routeRules,
		routeRuleMiddleware: middleware
	};
}
//#endregion
//#region node_modules/nitro/dist/presets/cloudflare/runtime/_module-handler.mjs
function createHandler(hooks) {
	const nitroApp = useNitroApp();
	const nitroHooks = useNitroHooks();
	return {
		async fetch(request, env, context) {
			globalThis.__env__ = env;
			augmentReq(request, {
				env,
				context
			});
			const ctxExt = {};
			const url = new URL(request.url);
			if (hooks.fetch) {
				const res = await hooks.fetch(request, env, context, url, ctxExt);
				if (res) return res;
			}
			return await nitroApp.fetch(request);
		},
		scheduled(controller, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:scheduled", {
				controller,
				env,
				context
			}) || Promise.resolve());
		},
		email(message, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:email", {
				message,
				event: message,
				env,
				context
			}) || Promise.resolve());
		},
		queue(batch, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:queue", {
				batch,
				event: batch,
				env,
				context
			}) || Promise.resolve());
		},
		tail(traces, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:tail", {
				traces,
				env,
				context
			}) || Promise.resolve());
		},
		trace(traces, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:trace", {
				traces,
				env,
				context
			}) || Promise.resolve());
		}
	};
}
function augmentReq(cfReq, ctx) {
	const req = cfReq;
	req.ip = cfReq.headers.get("cf-connecting-ip") || void 0;
	req.runtime ??= { name: "cloudflare" };
	req.runtime.cloudflare = {
		...req.runtime.cloudflare,
		...ctx
	};
	req.waitUntil = ctx.context?.waitUntil.bind(ctx.context);
}
//#endregion
//#region node_modules/nitro/dist/presets/cloudflare/runtime/cloudflare-module.mjs
var cloudflare_module_default = createHandler({ fetch(cfRequest, env, context, url) {
	if (env.ASSETS && isPublicAssetURL(url.pathname)) return env.ASSETS.fetch(cfRequest);
} });
//#endregion
export { cloudflare_module_default as default };

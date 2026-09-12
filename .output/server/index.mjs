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
	"/assets/bus-Zm6tkMOh.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1c4-xOAXBkVSG1n5sCxdq39EZsoP3gI\"",
		"mtime": "2026-09-12T17:21:40.156Z",
		"size": 452,
		"path": "../public/assets/bus-Zm6tkMOh.js"
	},
	"/assets/arrow-left-ChEqPzcR.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"a5-nyzYyhGGMrCMqZjGtObKeWMY34M\"",
		"mtime": "2026-09-12T17:21:40.155Z",
		"size": 165,
		"path": "../public/assets/arrow-left-ChEqPzcR.js"
	},
	"/assets/button-DCpgzuu7.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"ae32-LhCjBfeBZIqrXV8qtQtGIQ65w6M\"",
		"mtime": "2026-09-12T17:21:40.157Z",
		"size": 44594,
		"path": "../public/assets/button-DCpgzuu7.js"
	},
	"/assets/campus-data-BHupp8sC.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"7af-CQEEqe3U40U8NbrwjKKnvfolBNU\"",
		"mtime": "2026-09-12T17:21:40.157Z",
		"size": 1967,
		"path": "../public/assets/campus-data-BHupp8sC.js"
	},
	"/assets/checkbox-yB8tUlZX.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"114e-grB7n45FUdKvpuWZH8Sgw2NGvfQ\"",
		"mtime": "2026-09-12T17:21:40.159Z",
		"size": 4430,
		"path": "../public/assets/checkbox-yB8tUlZX.js"
	},
	"/assets/createLucideIcon-DEtyq1Q5.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"4a6-pqGAffLQhrWYeDS4VoHc26LvnQk\"",
		"mtime": "2026-09-12T17:21:40.161Z",
		"size": 1190,
		"path": "../public/assets/createLucideIcon-DEtyq1Q5.js"
	},
	"/assets/dist-BH-YeyCW.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"279-JQyv32HcYApSg3Ol7q7T0ujoyEk\"",
		"mtime": "2026-09-12T17:21:40.162Z",
		"size": 633,
		"path": "../public/assets/dist-BH-YeyCW.js"
	},
	"/assets/dist-BXgszzoe.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1b3e-L4XhbzmSzGSDwg8MmrlxaWiFJ8o\"",
		"mtime": "2026-09-12T17:21:40.164Z",
		"size": 6974,
		"path": "../public/assets/dist-BXgszzoe.js"
	},
	"/assets/link-Icz8sc9E.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"5ad5-u7WSfe7nT+8zDte/BQ5Il/WeRL0\"",
		"mtime": "2026-09-12T17:21:40.169Z",
		"size": 23253,
		"path": "../public/assets/link-Icz8sc9E.js"
	},
	"/assets/feed-page-BL3D3ICl.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"3d6a-sIjkFT5UYONW+nR5NKSeo/voGGA\"",
		"mtime": "2026-09-12T17:21:40.168Z",
		"size": 15722,
		"path": "../public/assets/feed-page-BL3D3ICl.js"
	},
	"/assets/listing-card-DkFyOguu.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"c06-BdOSxx9o4aKOcjREukAQ6+5xsbA\"",
		"mtime": "2026-09-12T17:21:40.170Z",
		"size": 3078,
		"path": "../public/assets/listing-card-DkFyOguu.js"
	},
	"/assets/listing._id-DCfnsqZH.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"575-17+sIyKlILlUavYnhYyS/dVxfr0\"",
		"mtime": "2026-09-12T17:21:40.171Z",
		"size": 1397,
		"path": "../public/assets/listing._id-DCfnsqZH.js"
	},
	"/assets/listing._id-DQTUw2N5.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"134f-4pIh5BcPOlKFd6rU+1lhi4Zww40\"",
		"mtime": "2026-09-12T17:21:40.172Z",
		"size": 4943,
		"path": "../public/assets/listing._id-DQTUw2N5.js"
	},
	"/assets/edit-profile-BMbtKb6-.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1519-2aW/QPVgAi7JvOJg/8LgtJo0E6U\"",
		"mtime": "2026-09-12T17:21:40.165Z",
		"size": 5401,
		"path": "../public/assets/edit-profile-BMbtKb6-.js"
	},
	"/assets/loader-circle-fqUD_pyS.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"90-4HaZe8fT1Bx6VtkCMTUz85me9hA\"",
		"mtime": "2026-09-12T17:21:40.172Z",
		"size": 144,
		"path": "../public/assets/loader-circle-fqUD_pyS.js"
	},
	"/assets/login-DF3lbd8u.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"a8e-Rh5a91mmX5EHhtE5y1hpHzZtlL4\"",
		"mtime": "2026-09-12T17:21:40.173Z",
		"size": 2702,
		"path": "../public/assets/login-DF3lbd8u.js"
	},
	"/assets/lost-and-found-B7dGYNlC.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"94-53BZKAItcJg9LK57UXICJl2mjaw\"",
		"mtime": "2026-09-12T17:21:40.175Z",
		"size": 148,
		"path": "../public/assets/lost-and-found-B7dGYNlC.js"
	},
	"/assets/map-pin-CEjR2aGr.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"103-xxYpduvs+vu3Kbp5ATb9pRTmy78\"",
		"mtime": "2026-09-12T17:21:40.176Z",
		"size": 259,
		"path": "../public/assets/map-pin-CEjR2aGr.js"
	},
	"/assets/campus-listings-0ZouSTjP.jpg": {
		"type": "image/jpeg",
		"etag": "\"3999e-7rAKBrVFyu4TdTzX6Zntc2ui3hw\"",
		"mtime": "2026-09-12T17:21:40.200Z",
		"size": 235934,
		"path": "../public/assets/campus-listings-0ZouSTjP.jpg"
	},
	"/assets/marketplace-D_THIOvX.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"96-f6l0DIpYWQvQwdGrDuD1DJ5jvIA\"",
		"mtime": "2026-09-12T17:21:40.177Z",
		"size": 150,
		"path": "../public/assets/marketplace-D_THIOvX.js"
	},
	"/assets/my-listings-BQQytj1g.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"11ee-WsQ0oQIvzo3YU6yGI9o1ekXe+gA\"",
		"mtime": "2026-09-12T17:21:40.177Z",
		"size": 4590,
		"path": "../public/assets/my-listings-BQQytj1g.js"
	},
	"/assets/preload-helper-DHNYsi4w.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1822-yZUnNnU+vHNOCGJqslhMbr8Tyho\"",
		"mtime": "2026-09-12T17:21:40.181Z",
		"size": 6178,
		"path": "../public/assets/preload-helper-DHNYsi4w.js"
	},
	"/robots.txt": {
		"type": "text/plain; charset=utf-8",
		"etag": "\"a0-CKGXSIe7TSsqDTmGm/nY1t/o5d0\"",
		"mtime": "2026-09-12T13:45:41.545Z",
		"size": 160,
		"path": "../public/robots.txt"
	},
	"/assets/index-0W3gLoAB.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"751a0-Jrmn8lYvufwUPnSAJWvkCrSZwf0\"",
		"mtime": "2026-09-12T17:21:40.154Z",
		"size": 479648,
		"path": "../public/assets/index-0W3gLoAB.js"
	},
	"/assets/routes-DTIUXgnY.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"170b-2b8+dqZLew4zd+20Ym58hmPc5pQ\"",
		"mtime": "2026-09-12T17:21:40.182Z",
		"size": 5899,
		"path": "../public/assets/routes-DTIUXgnY.js"
	},
	"/assets/require-auth-BS4r8DO0.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"19d-AE/340/sV4a46lJQLmJYbVgFSC8\"",
		"mtime": "2026-09-12T17:21:40.181Z",
		"size": 413,
		"path": "../public/assets/require-auth-BS4r8DO0.js"
	},
	"/assets/shield-check-B0E1sTm4.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"140-8tqOskj4xgGcSf4LRQfjRIw0jz4\"",
		"mtime": "2026-09-12T17:21:40.182Z",
		"size": 320,
		"path": "../public/assets/shield-check-B0E1sTm4.js"
	},
	"/assets/signup-xjjuhDeY.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"134c-Cpn+OtGIUDJQ8pH98YXWr8NsZzc\"",
		"mtime": "2026-09-12T17:21:40.190Z",
		"size": 4940,
		"path": "../public/assets/signup-xjjuhDeY.js"
	},
	"/assets/shuttle-driver-_b19kJdR.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"8fb-+mN0ru8iAjVFQbPmpfjclLCg7Nc\"",
		"mtime": "2026-09-12T17:21:40.186Z",
		"size": 2299,
		"path": "../public/assets/shuttle-driver-_b19kJdR.js"
	},
	"/assets/shuttle-CVcBKSDE.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"134d-Pe/uR8c7GASEFpIeb4H/Zz5QHbQ\"",
		"mtime": "2026-09-12T17:21:40.183Z",
		"size": 4941,
		"path": "../public/assets/shuttle-CVcBKSDE.js"
	},
	"/assets/useNavigate-54l4aXKw.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"ba-BujTF8PJ6+2SslN3EimNQgx7RTE\"",
		"mtime": "2026-09-12T17:21:40.191Z",
		"size": 186,
		"path": "../public/assets/useNavigate-54l4aXKw.js"
	},
	"/assets/tabs-DP5RqdAD.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"e50-uzs4uhdj3r+31uIY2ZB5oDQsFj4\"",
		"mtime": "2026-09-12T17:21:40.190Z",
		"size": 3664,
		"path": "../public/assets/tabs-DP5RqdAD.js"
	},
	"/assets/verify-email-Ctm84BN1.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"725-qyEadLRCyKutEK2HEy15EWMBKgo\"",
		"mtime": "2026-09-12T17:21:40.199Z",
		"size": 1829,
		"path": "../public/assets/verify-email-Ctm84BN1.js"
	},
	"/assets/styles-BJaOP6UA.css": {
		"type": "text/css; charset=utf-8",
		"etag": "\"14f47-ofxLp6tQprmHU1jHpn2wrFCjwBM\"",
		"mtime": "2026-09-12T17:21:40.201Z",
		"size": 85831,
		"path": "../public/assets/styles-BJaOP6UA.css"
	},
	"/campuscratelogo.svg": {
		"type": "image/svg+xml",
		"etag": "\"602-etwjhv0c68evLixRc2u+WMr3Ftg\"",
		"mtime": "2026-09-12T13:45:41.533Z",
		"size": 1538,
		"path": "../public/campuscratelogo.svg"
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
var _lazy_nwJaSo = defineLazyEventHandler(() => import("./_chunks/ssr-renderer.mjs"));
var findRoute = /* @__PURE__ */ (() => {
	const data = {
		route: "/**",
		handler: _lazy_nwJaSo
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

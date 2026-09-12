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
	"/assets/api-DOeGuXqN.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"712-AE6HOET7/M+LXmfdwnqHjVdPN70\"",
		"mtime": "2026-09-12T19:57:44.916Z",
		"size": 1810,
		"path": "../public/assets/api-DOeGuXqN.js"
	},
	"/assets/campus-data-Bn_PM-Co.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"34d-wQfOSWkACe/SZ2QpdfbE+q2U3Mc\"",
		"mtime": "2026-09-12T19:57:44.918Z",
		"size": 845,
		"path": "../public/assets/campus-data-Bn_PM-Co.js"
	},
	"/assets/arrow-left-ChEqPzcR.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"a5-nyzYyhGGMrCMqZjGtObKeWMY34M\"",
		"mtime": "2026-09-12T19:57:44.917Z",
		"size": 165,
		"path": "../public/assets/arrow-left-ChEqPzcR.js"
	},
	"/assets/button-DCpgzuu7.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"ae32-LhCjBfeBZIqrXV8qtQtGIQ65w6M\"",
		"mtime": "2026-09-12T19:57:44.918Z",
		"size": 44594,
		"path": "../public/assets/button-DCpgzuu7.js"
	},
	"/assets/checkbox-BrHvILiJ.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"114d-vQv4sczPvYE7e7gIcEj06pwEaG4\"",
		"mtime": "2026-09-12T19:57:44.919Z",
		"size": 4429,
		"path": "../public/assets/checkbox-BrHvILiJ.js"
	},
	"/assets/dist-BXgszzoe.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1b3e-L4XhbzmSzGSDwg8MmrlxaWiFJ8o\"",
		"mtime": "2026-09-12T19:57:44.920Z",
		"size": 6974,
		"path": "../public/assets/dist-BXgszzoe.js"
	},
	"/assets/edit-profile-B3ieqY9D.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"14f0-kzD2n87w7lv2lZPvv5EJOhEfOts\"",
		"mtime": "2026-09-12T19:57:44.921Z",
		"size": 5360,
		"path": "../public/assets/edit-profile-B3ieqY9D.js"
	},
	"/assets/feed-page-0rTC-3Tm.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"3d36-xDvpnF7KjGU+ZiMhYyLAT/cwUX8\"",
		"mtime": "2026-09-12T19:57:44.922Z",
		"size": 15670,
		"path": "../public/assets/feed-page-0rTC-3Tm.js"
	},
	"/assets/createLucideIcon-DEtyq1Q5.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"4a6-pqGAffLQhrWYeDS4VoHc26LvnQk\"",
		"mtime": "2026-09-12T19:57:44.919Z",
		"size": 1190,
		"path": "../public/assets/createLucideIcon-DEtyq1Q5.js"
	},
	"/assets/link-Icz8sc9E.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"5ad5-u7WSfe7nT+8zDte/BQ5Il/WeRL0\"",
		"mtime": "2026-09-12T19:57:44.923Z",
		"size": 23253,
		"path": "../public/assets/link-Icz8sc9E.js"
	},
	"/assets/login-BSphjcYT.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"a89-ZWSMaw62EkgeGlBsZkthvDwL+ow\"",
		"mtime": "2026-09-12T19:57:44.928Z",
		"size": 2697,
		"path": "../public/assets/login-BSphjcYT.js"
	},
	"/assets/listing-card-_Gr6p9Eb.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"f02-9OeCexonD+gTy89TTBT+OVqrelc\"",
		"mtime": "2026-09-12T19:57:44.924Z",
		"size": 3842,
		"path": "../public/assets/listing-card-_Gr6p9Eb.js"
	},
	"/assets/listing._id-Ts4Herg8.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"554-MV0YCyVYVuZ6VFoGGsqkhftO4EA\"",
		"mtime": "2026-09-12T19:57:44.928Z",
		"size": 1364,
		"path": "../public/assets/listing._id-Ts4Herg8.js"
	},
	"/assets/listing._id-5aIos4_w.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"132c-l4l9oRHYv6l+HRlARA7B1RsguSs\"",
		"mtime": "2026-09-12T19:57:44.927Z",
		"size": 4908,
		"path": "../public/assets/listing._id-5aIos4_w.js"
	},
	"/assets/lost-and-found-BTjQIAGv.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"94-Sm9iLcmcnbIAiynuF9x6U60x5Bk\"",
		"mtime": "2026-09-12T19:57:44.929Z",
		"size": 148,
		"path": "../public/assets/lost-and-found-BTjQIAGv.js"
	},
	"/assets/index-DynTCE0J.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"7593d-mjj9w7nkeOmOS9kg4nyHCR2FvXk\"",
		"mtime": "2026-09-12T19:57:44.916Z",
		"size": 481597,
		"path": "../public/assets/index-DynTCE0J.js"
	},
	"/assets/marketplace-CVJ2lTlL.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"96-jISbJBdPCqZb+vXRBPb6b8qAByk\"",
		"mtime": "2026-09-12T19:57:44.930Z",
		"size": 150,
		"path": "../public/assets/marketplace-CVJ2lTlL.js"
	},
	"/campuscratelogo.svg": {
		"type": "image/svg+xml",
		"etag": "\"602-etwjhv0c68evLixRc2u+WMr3Ftg\"",
		"mtime": "2026-09-12T13:45:41.533Z",
		"size": 1538,
		"path": "../public/campuscratelogo.svg"
	},
	"/assets/my-listings-DZmGR5vP.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"11e4-yvFc6/Tba2d7UZiGYoI9RmrNTEY\"",
		"mtime": "2026-09-12T19:57:44.930Z",
		"size": 4580,
		"path": "../public/assets/my-listings-DZmGR5vP.js"
	},
	"/assets/preload-helper-DHNYsi4w.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1822-yZUnNnU+vHNOCGJqslhMbr8Tyho\"",
		"mtime": "2026-09-12T19:57:44.931Z",
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
	"/assets/require-auth-Cbg8MkIP.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"19b-/M4/4uYC4g6QLYouqx1DDJyvXNU\"",
		"mtime": "2026-09-12T19:57:44.932Z",
		"size": 411,
		"path": "../public/assets/require-auth-Cbg8MkIP.js"
	},
	"/assets/shield-check-B0E1sTm4.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"140-8tqOskj4xgGcSf4LRQfjRIw0jz4\"",
		"mtime": "2026-09-12T19:57:44.933Z",
		"size": 320,
		"path": "../public/assets/shield-check-B0E1sTm4.js"
	},
	"/assets/routes-CLtgG8we.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1bf1-dWPRHM4vazJb0BaxM+gEjcOLkv8\"",
		"mtime": "2026-09-12T19:57:44.932Z",
		"size": 7153,
		"path": "../public/assets/routes-CLtgG8we.js"
	},
	"/assets/signup-DGPlByV1.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1347-UOAGIg8JyemvbivqKmUAFee0NDs\"",
		"mtime": "2026-09-12T19:57:44.933Z",
		"size": 4935,
		"path": "../public/assets/signup-DGPlByV1.js"
	},
	"/assets/tabs-Cxdrs_u3.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"dae-Id3VL7AVLtC8ZRSfqDM8o2UHKYU\"",
		"mtime": "2026-09-12T19:57:44.934Z",
		"size": 3502,
		"path": "../public/assets/tabs-Cxdrs_u3.js"
	},
	"/assets/styles-DmMxfTfT.css": {
		"type": "text/css; charset=utf-8",
		"etag": "\"14e55-hI4xDK1UDhmdU4rNXn6QTegaO10\"",
		"mtime": "2026-09-12T19:57:44.936Z",
		"size": 85589,
		"path": "../public/assets/styles-DmMxfTfT.css"
	},
	"/assets/useNavigate-54l4aXKw.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"ba-BujTF8PJ6+2SslN3EimNQgx7RTE\"",
		"mtime": "2026-09-12T19:57:44.935Z",
		"size": 186,
		"path": "../public/assets/useNavigate-54l4aXKw.js"
	},
	"/assets/verify-email-D8LWKHjG.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"93e-AeZgFns43RvV7OHMr0iz72E5I2E\"",
		"mtime": "2026-09-12T19:57:44.936Z",
		"size": 2366,
		"path": "../public/assets/verify-email-D8LWKHjG.js"
	},
	"/assets/to-let-BFLeo4st.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1999-xLqxNzavmT/VFWFUr6FZ1B5piXE\"",
		"mtime": "2026-09-12T19:57:44.935Z",
		"size": 6553,
		"path": "../public/assets/to-let-BFLeo4st.js"
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

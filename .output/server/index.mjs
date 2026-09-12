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
	"/assets/arrow-left-ChEqPzcR.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"a5-nyzYyhGGMrCMqZjGtObKeWMY34M\"",
		"mtime": "2026-09-12T20:03:19.672Z",
		"size": 165,
		"path": "../public/assets/arrow-left-ChEqPzcR.js"
	},
	"/assets/api-DOeGuXqN.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"712-AE6HOET7/M+LXmfdwnqHjVdPN70\"",
		"mtime": "2026-09-12T20:03:19.670Z",
		"size": 1810,
		"path": "../public/assets/api-DOeGuXqN.js"
	},
	"/assets/button-DCpgzuu7.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"ae32-LhCjBfeBZIqrXV8qtQtGIQ65w6M\"",
		"mtime": "2026-09-12T20:03:19.677Z",
		"size": 44594,
		"path": "../public/assets/button-DCpgzuu7.js"
	},
	"/assets/campus-data-Bn_PM-Co.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"34d-wQfOSWkACe/SZ2QpdfbE+q2U3Mc\"",
		"mtime": "2026-09-12T20:03:19.680Z",
		"size": 845,
		"path": "../public/assets/campus-data-Bn_PM-Co.js"
	},
	"/assets/checkbox-_Kzf4yT8.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"114d-BP1hlxkkC7qVIvmb0ILvu9NFX+g\"",
		"mtime": "2026-09-12T20:03:19.683Z",
		"size": 4429,
		"path": "../public/assets/checkbox-_Kzf4yT8.js"
	},
	"/assets/createLucideIcon-DEtyq1Q5.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"4a6-pqGAffLQhrWYeDS4VoHc26LvnQk\"",
		"mtime": "2026-09-12T20:03:19.686Z",
		"size": 1190,
		"path": "../public/assets/createLucideIcon-DEtyq1Q5.js"
	},
	"/campuscratelogo.svg": {
		"type": "image/svg+xml",
		"etag": "\"602-etwjhv0c68evLixRc2u+WMr3Ftg\"",
		"mtime": "2026-09-12T13:45:41.533Z",
		"size": 1538,
		"path": "../public/campuscratelogo.svg"
	},
	"/assets/dist-BXgszzoe.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1b3e-L4XhbzmSzGSDwg8MmrlxaWiFJ8o\"",
		"mtime": "2026-09-12T20:03:19.687Z",
		"size": 6974,
		"path": "../public/assets/dist-BXgszzoe.js"
	},
	"/assets/edit-profile-DGg-XAUH.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1381-yyg1Pebrij++AR+wp3KzSmHK55c\"",
		"mtime": "2026-09-12T20:03:19.688Z",
		"size": 4993,
		"path": "../public/assets/edit-profile-DGg-XAUH.js"
	},
	"/assets/link-Icz8sc9E.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"5ad5-u7WSfe7nT+8zDte/BQ5Il/WeRL0\"",
		"mtime": "2026-09-12T20:03:19.693Z",
		"size": 23253,
		"path": "../public/assets/link-Icz8sc9E.js"
	},
	"/assets/feed-page-odONdXHI.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"3d36-3tXguVjx6mpGaeO/1WSFkOTFw/Q\"",
		"mtime": "2026-09-12T20:03:19.691Z",
		"size": 15670,
		"path": "../public/assets/feed-page-odONdXHI.js"
	},
	"/assets/listing._id-BQ4Ymagz.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"132c-RD4zzMnm/SU7Lx3zOj2oO3S07Q4\"",
		"mtime": "2026-09-12T20:03:19.705Z",
		"size": 4908,
		"path": "../public/assets/listing._id-BQ4Ymagz.js"
	},
	"/assets/listing-card-CqayY2yY.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"f02-XjR2fZAtnAkdHRZWcv4hfqIUSGg\"",
		"mtime": "2026-09-12T20:03:19.695Z",
		"size": 3842,
		"path": "../public/assets/listing-card-CqayY2yY.js"
	},
	"/assets/login-SFhN7dI3.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"a89-YB0Jwb1ERsIqMHxo2f5sYE7yOx4\"",
		"mtime": "2026-09-12T20:03:19.723Z",
		"size": 2697,
		"path": "../public/assets/login-SFhN7dI3.js"
	},
	"/assets/listing._id-CN2c8Nph.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"554-03wj062GTlpXSCqkO4wgo/r+ujc\"",
		"mtime": "2026-09-12T20:03:19.714Z",
		"size": 1364,
		"path": "../public/assets/listing._id-CN2c8Nph.js"
	},
	"/assets/lost-and-found-DzdrZ3YE.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"94-a6HW+11/d6TvPVZtFDclgVY7Qm4\"",
		"mtime": "2026-09-12T20:03:19.726Z",
		"size": 148,
		"path": "../public/assets/lost-and-found-DzdrZ3YE.js"
	},
	"/assets/marketplace-BMROOE1x.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"96-R4J4WIBPZdHHIdHo4ajMHH5jzkY\"",
		"mtime": "2026-09-12T20:03:19.727Z",
		"size": 150,
		"path": "../public/assets/marketplace-BMROOE1x.js"
	},
	"/assets/my-listings-D0fNbDok.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"11e4-y/J0T9qRRusng9gBhvC1dUz6Gag\"",
		"mtime": "2026-09-12T20:03:19.739Z",
		"size": 4580,
		"path": "../public/assets/my-listings-D0fNbDok.js"
	},
	"/assets/preload-helper-DHNYsi4w.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1822-yZUnNnU+vHNOCGJqslhMbr8Tyho\"",
		"mtime": "2026-09-12T20:03:19.739Z",
		"size": 6178,
		"path": "../public/assets/preload-helper-DHNYsi4w.js"
	},
	"/assets/require-auth-Cbg8MkIP.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"19b-/M4/4uYC4g6QLYouqx1DDJyvXNU\"",
		"mtime": "2026-09-12T20:03:19.741Z",
		"size": 411,
		"path": "../public/assets/require-auth-Cbg8MkIP.js"
	},
	"/assets/routes-D8vaBVQ8.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1bf1-B9WWhnAWvoV9uxCTV48cEJB4nYI\"",
		"mtime": "2026-09-12T20:03:19.743Z",
		"size": 7153,
		"path": "../public/assets/routes-D8vaBVQ8.js"
	},
	"/assets/index-C8STy1FM.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"7577d-0crQnqnNUJozJVhae/eBHbUBPC0\"",
		"mtime": "2026-09-12T20:03:19.668Z",
		"size": 481149,
		"path": "../public/assets/index-C8STy1FM.js"
	},
	"/assets/shield-check-B0E1sTm4.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"140-8tqOskj4xgGcSf4LRQfjRIw0jz4\"",
		"mtime": "2026-09-12T20:03:19.744Z",
		"size": 320,
		"path": "../public/assets/shield-check-B0E1sTm4.js"
	},
	"/robots.txt": {
		"type": "text/plain; charset=utf-8",
		"etag": "\"a0-CKGXSIe7TSsqDTmGm/nY1t/o5d0\"",
		"mtime": "2026-09-12T13:45:41.545Z",
		"size": 160,
		"path": "../public/robots.txt"
	},
	"/assets/signup-irilAGsw.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1347-KC3BQjZG4t7ptB45ALXz5YFN5Wg\"",
		"mtime": "2026-09-12T20:03:19.752Z",
		"size": 4935,
		"path": "../public/assets/signup-irilAGsw.js"
	},
	"/assets/styles-DmMxfTfT.css": {
		"type": "text/css; charset=utf-8",
		"etag": "\"14e55-hI4xDK1UDhmdU4rNXn6QTegaO10\"",
		"mtime": "2026-09-12T20:03:19.769Z",
		"size": 85589,
		"path": "../public/assets/styles-DmMxfTfT.css"
	},
	"/assets/tabs-BM132i6c.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"dae-nBfdniIL3lnxJpkgxpLrQbt0+X8\"",
		"mtime": "2026-09-12T20:03:19.757Z",
		"size": 3502,
		"path": "../public/assets/tabs-BM132i6c.js"
	},
	"/assets/to-let-BnmBD0SA.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1999-lpX1AY2lAm2DJegf0Bcvad4l4zQ\"",
		"mtime": "2026-09-12T20:03:19.763Z",
		"size": 6553,
		"path": "../public/assets/to-let-BnmBD0SA.js"
	},
	"/assets/useNavigate-54l4aXKw.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"ba-BujTF8PJ6+2SslN3EimNQgx7RTE\"",
		"mtime": "2026-09-12T20:03:19.765Z",
		"size": 186,
		"path": "../public/assets/useNavigate-54l4aXKw.js"
	},
	"/assets/verify-email-BjaLLhTj.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"93e-tQsRoZ2JY8f5XiwExkFizwve/zA\"",
		"mtime": "2026-09-12T20:03:19.768Z",
		"size": 2366,
		"path": "../public/assets/verify-email-BjaLLhTj.js"
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

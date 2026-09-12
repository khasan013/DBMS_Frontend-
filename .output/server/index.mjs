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
		"mtime": "2026-09-12T19:05:16.308Z",
		"size": 165,
		"path": "../public/assets/arrow-left-ChEqPzcR.js"
	},
	"/assets/building-2-BFwsIa_d.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"17f-D5jNnNGBGsyokRw1Co15gzzM29o\"",
		"mtime": "2026-09-12T19:05:16.311Z",
		"size": 383,
		"path": "../public/assets/building-2-BFwsIa_d.js"
	},
	"/assets/campus-data-bRO44Bic.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"85e-gz8T/Z2rJJyjnbAS9FoK1jRfe7M\"",
		"mtime": "2026-09-12T19:05:16.313Z",
		"size": 2142,
		"path": "../public/assets/campus-data-bRO44Bic.js"
	},
	"/assets/button-DCpgzuu7.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"ae32-LhCjBfeBZIqrXV8qtQtGIQ65w6M\"",
		"mtime": "2026-09-12T19:05:16.312Z",
		"size": 44594,
		"path": "../public/assets/button-DCpgzuu7.js"
	},
	"/assets/checkbox-BTAzc-Va.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"114e-E3OLLANU0jDmuFV7xG2uYyVrAzo\"",
		"mtime": "2026-09-12T19:05:16.314Z",
		"size": 4430,
		"path": "../public/assets/checkbox-BTAzc-Va.js"
	},
	"/assets/dist-BH-YeyCW.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"279-JQyv32HcYApSg3Ol7q7T0ujoyEk\"",
		"mtime": "2026-09-12T19:05:16.315Z",
		"size": 633,
		"path": "../public/assets/dist-BH-YeyCW.js"
	},
	"/assets/createLucideIcon-DEtyq1Q5.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"4a6-pqGAffLQhrWYeDS4VoHc26LvnQk\"",
		"mtime": "2026-09-12T19:05:16.314Z",
		"size": 1190,
		"path": "../public/assets/createLucideIcon-DEtyq1Q5.js"
	},
	"/assets/feed-page-CNJm_6VS.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"3d65-+V+CaLJ9FxlF8vdao4aVs0tHb1k\"",
		"mtime": "2026-09-12T19:05:16.317Z",
		"size": 15717,
		"path": "../public/assets/feed-page-CNJm_6VS.js"
	},
	"/assets/dist-BXgszzoe.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1b3e-L4XhbzmSzGSDwg8MmrlxaWiFJ8o\"",
		"mtime": "2026-09-12T19:05:16.316Z",
		"size": 6974,
		"path": "../public/assets/dist-BXgszzoe.js"
	},
	"/assets/listing-card-DsUbDmk9.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"cab-9QVihLQQkF71kB9w4TaIk8BsjW8\"",
		"mtime": "2026-09-12T19:05:16.318Z",
		"size": 3243,
		"path": "../public/assets/listing-card-DsUbDmk9.js"
	},
	"/assets/link-Icz8sc9E.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"5ad5-u7WSfe7nT+8zDte/BQ5Il/WeRL0\"",
		"mtime": "2026-09-12T19:05:16.318Z",
		"size": 23253,
		"path": "../public/assets/link-Icz8sc9E.js"
	},
	"/assets/edit-profile-CaVGxBKN.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1519-UNSEgGSaTQFx5Xz4VqQ05A+3s0E\"",
		"mtime": "2026-09-12T19:05:16.316Z",
		"size": 5401,
		"path": "../public/assets/edit-profile-CaVGxBKN.js"
	},
	"/assets/listing._id-C7W17nlW.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"132c-ZHXxaB2ecc1gABjFD4qqLntPGNo\"",
		"mtime": "2026-09-12T19:05:16.318Z",
		"size": 4908,
		"path": "../public/assets/listing._id-C7W17nlW.js"
	},
	"/assets/listing._id-CeeaHVkf.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"555-BHJeLqE9oJs4rifILQC+Hov5yp4\"",
		"mtime": "2026-09-12T19:05:16.320Z",
		"size": 1365,
		"path": "../public/assets/listing._id-CeeaHVkf.js"
	},
	"/robots.txt": {
		"type": "text/plain; charset=utf-8",
		"etag": "\"a0-CKGXSIe7TSsqDTmGm/nY1t/o5d0\"",
		"mtime": "2026-09-12T13:45:41.545Z",
		"size": 160,
		"path": "../public/robots.txt"
	},
	"/campuscratelogo.svg": {
		"type": "image/svg+xml",
		"etag": "\"602-etwjhv0c68evLixRc2u+WMr3Ftg\"",
		"mtime": "2026-09-12T13:45:41.533Z",
		"size": 1538,
		"path": "../public/campuscratelogo.svg"
	},
	"/assets/loader-circle-fqUD_pyS.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"90-4HaZe8fT1Bx6VtkCMTUz85me9hA\"",
		"mtime": "2026-09-12T19:05:16.321Z",
		"size": 144,
		"path": "../public/assets/loader-circle-fqUD_pyS.js"
	},
	"/assets/lost-and-found-Dm5nzunv.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"94-FhDakZAVJGHDOEwzw7xagdMkLwk\"",
		"mtime": "2026-09-12T19:05:16.323Z",
		"size": 148,
		"path": "../public/assets/lost-and-found-Dm5nzunv.js"
	},
	"/assets/login-zMn7gMVP.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"a8e-plqkZpMYF7YEiQ4yuW+u4CsXY5M\"",
		"mtime": "2026-09-12T19:05:16.322Z",
		"size": 2702,
		"path": "../public/assets/login-zMn7gMVP.js"
	},
	"/assets/preload-helper-DHNYsi4w.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1822-yZUnNnU+vHNOCGJqslhMbr8Tyho\"",
		"mtime": "2026-09-12T19:05:16.325Z",
		"size": 6178,
		"path": "../public/assets/preload-helper-DHNYsi4w.js"
	},
	"/assets/my-listings-OWhSCoDO.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"11ee-6GbaLZdUVH81PDXxdpw/j5jfQCE\"",
		"mtime": "2026-09-12T19:05:16.324Z",
		"size": 4590,
		"path": "../public/assets/my-listings-OWhSCoDO.js"
	},
	"/assets/require-auth-CUPyeVRB.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"19d-G+YwjxgkGlVEGFbBzJ/Mp3hFPLU\"",
		"mtime": "2026-09-12T19:05:16.325Z",
		"size": 413,
		"path": "../public/assets/require-auth-CUPyeVRB.js"
	},
	"/assets/marketplace-9jPQCgPP.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"96-I2NtFlc9swOy/S4qAJYh4OJZHdY\"",
		"mtime": "2026-09-12T19:05:16.324Z",
		"size": 150,
		"path": "../public/assets/marketplace-9jPQCgPP.js"
	},
	"/assets/campus-listings-0ZouSTjP.jpg": {
		"type": "image/jpeg",
		"etag": "\"3999e-7rAKBrVFyu4TdTzX6Zntc2ui3hw\"",
		"mtime": "2026-09-12T19:05:16.333Z",
		"size": 235934,
		"path": "../public/assets/campus-listings-0ZouSTjP.jpg"
	},
	"/assets/index-DatMMhU2.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"750b4-uSmdxRElKkHpjCNAhRquGMu5kNg\"",
		"mtime": "2026-09-12T19:05:16.308Z",
		"size": 479412,
		"path": "../public/assets/index-DatMMhU2.js"
	},
	"/assets/routes-Cv4kBA-1.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1704-q67TOJshTmpt5AtDc7MI1Z7zJqY\"",
		"mtime": "2026-09-12T19:05:16.326Z",
		"size": 5892,
		"path": "../public/assets/routes-Cv4kBA-1.js"
	},
	"/assets/signup-DrJLQ923.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"134c-BB8BNBqFSubOkO/GgaBQtDfKXu8\"",
		"mtime": "2026-09-12T19:05:16.329Z",
		"size": 4940,
		"path": "../public/assets/signup-DrJLQ923.js"
	},
	"/assets/shield-check-B0E1sTm4.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"140-8tqOskj4xgGcSf4LRQfjRIw0jz4\"",
		"mtime": "2026-09-12T19:05:16.327Z",
		"size": 320,
		"path": "../public/assets/shield-check-B0E1sTm4.js"
	},
	"/assets/styles-CCu_tfhV.css": {
		"type": "text/css; charset=utf-8",
		"etag": "\"14fee-lCxSvAtTwaGStggbr/tDVQH63LQ\"",
		"mtime": "2026-09-12T19:05:16.333Z",
		"size": 85998,
		"path": "../public/assets/styles-CCu_tfhV.css"
	},
	"/assets/to-let-B23Z6u1w.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"19c4-cZxsFGCtk8OrWWzT/5ALgZdqO7Y\"",
		"mtime": "2026-09-12T19:05:16.331Z",
		"size": 6596,
		"path": "../public/assets/to-let-B23Z6u1w.js"
	},
	"/assets/tabs-BxkheDUs.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"e50-/Oj/qJPvOKs1lOX41SscRi8iRQY\"",
		"mtime": "2026-09-12T19:05:16.330Z",
		"size": 3664,
		"path": "../public/assets/tabs-BxkheDUs.js"
	},
	"/assets/useNavigate-54l4aXKw.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"ba-BujTF8PJ6+2SslN3EimNQgx7RTE\"",
		"mtime": "2026-09-12T19:05:16.332Z",
		"size": 186,
		"path": "../public/assets/useNavigate-54l4aXKw.js"
	},
	"/assets/verify-email-nXI_YVh2.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"725-omo2swywdV5lla7D92C5v16Xm8U\"",
		"mtime": "2026-09-12T19:05:16.332Z",
		"size": 1829,
		"path": "../public/assets/verify-email-nXI_YVh2.js"
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

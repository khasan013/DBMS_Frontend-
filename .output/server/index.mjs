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
	"/assets/admin-B2wPbhCY.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"13d8-8caTgawJl2WaRNinOI0Lke5y3Ww\"",
		"mtime": "2026-09-17T15:23:29.487Z",
		"size": 5080,
		"path": "../public/assets/admin-B2wPbhCY.js"
	},
	"/assets/arrow-left-Cm3mNHX_.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"a5-CQPfdJoJM+FQin3KQZbj248vfGM\"",
		"mtime": "2026-09-17T15:23:29.489Z",
		"size": 165,
		"path": "../public/assets/arrow-left-Cm3mNHX_.js"
	},
	"/assets/avatar-DwIV7pAT.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"9fa-XnPypfwCy21koyV0/3K3wT++Edg\"",
		"mtime": "2026-09-17T15:23:29.490Z",
		"size": 2554,
		"path": "../public/assets/avatar-DwIV7pAT.js"
	},
	"/assets/api-B3nJ8WPI.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"b2d2-V1HAQmXe3laCt+A4hcfe/Joy1FY\"",
		"mtime": "2026-09-17T15:23:29.489Z",
		"size": 45778,
		"path": "../public/assets/api-B3nJ8WPI.js"
	},
	"/assets/checkbox-An87oXw0.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"114f-ukJ9ZO2soSDYijtG1owr6H9Ba9o\"",
		"mtime": "2026-09-17T15:23:29.494Z",
		"size": 4431,
		"path": "../public/assets/checkbox-An87oXw0.js"
	},
	"/assets/createLucideIcon-6BczWDj4.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"4a3-jmSmx3e00NqgwJsccaollBGq4t0\"",
		"mtime": "2026-09-17T15:23:29.495Z",
		"size": 1187,
		"path": "../public/assets/createLucideIcon-6BczWDj4.js"
	},
	"/assets/dist-BuHsbGh9.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"228-dZjZ8tRsDqKbk25hQDxnIFlFKUk\"",
		"mtime": "2026-09-17T15:23:29.498Z",
		"size": 552,
		"path": "../public/assets/dist-BuHsbGh9.js"
	},
	"/assets/dist-Ciz9fFKQ.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"82e4-1DwPxwTXvuQw8CzezUEWlOLotTU\"",
		"mtime": "2026-09-17T15:23:29.500Z",
		"size": 33508,
		"path": "../public/assets/dist-Ciz9fFKQ.js"
	},
	"/assets/dist-BbsbqV3m.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1b3b-tpjY5zQ0PkJ8WzkTdPgxj9ghq6M\"",
		"mtime": "2026-09-17T15:23:29.496Z",
		"size": 6971,
		"path": "../public/assets/dist-BbsbqV3m.js"
	},
	"/assets/dist-CEWStf_K.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1076-X1vLlbf+KJ+FuOqoeSypP1Cr2yo\"",
		"mtime": "2026-09-17T15:23:29.498Z",
		"size": 4214,
		"path": "../public/assets/dist-CEWStf_K.js"
	},
	"/assets/dist-CSutz9IK.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"2ec-0eztX6FhZ0sAn4fedUyrvy+OHoY\"",
		"mtime": "2026-09-17T15:23:29.499Z",
		"size": 748,
		"path": "../public/assets/dist-CSutz9IK.js"
	},
	"/assets/edit-profile-Doqx66Dm.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"13c9-THLZqdD9KKlmjNU9fAWFO50UYwA\"",
		"mtime": "2026-09-17T15:23:29.521Z",
		"size": 5065,
		"path": "../public/assets/edit-profile-Doqx66Dm.js"
	},
	"/assets/dist-DHfkTam1.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"276-cbA3h/V/iAvZYShIiISBnsVqHBA\"",
		"mtime": "2026-09-17T15:23:29.501Z",
		"size": 630,
		"path": "../public/assets/dist-DHfkTam1.js"
	},
	"/assets/feed-page-B2nAaPx8.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1430-ViaU6SFvWdWjBNpa2BnpeyWEvMU\"",
		"mtime": "2026-09-17T15:23:29.522Z",
		"size": 5168,
		"path": "../public/assets/feed-page-B2nAaPx8.js"
	},
	"/assets/input-DYyZeSBg.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"244-TjxcML4KNjNCmhIueqa8vYo3BV0\"",
		"mtime": "2026-09-17T15:23:29.529Z",
		"size": 580,
		"path": "../public/assets/input-DYyZeSBg.js"
	},
	"/assets/label-CY0aXZ3l.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"284-6LwklohTOz5ECbm4M+lFCm2yxyw\"",
		"mtime": "2026-09-17T15:23:29.529Z",
		"size": 644,
		"path": "../public/assets/label-CY0aXZ3l.js"
	},
	"/assets/dist-Dv9Zzfrz.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1c70-2iwY/Wz5Dv4yuIeUze1its5jigc\"",
		"mtime": "2026-09-17T15:23:29.521Z",
		"size": 7280,
		"path": "../public/assets/dist-Dv9Zzfrz.js"
	},
	"/assets/link-CJaPacz5.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"5ad2-LGDmiw5JGjHFGrJ21hHzCaN+PsI\"",
		"mtime": "2026-09-17T15:23:29.534Z",
		"size": 23250,
		"path": "../public/assets/link-CJaPacz5.js"
	},
	"/assets/listing-card-BZbU46ua.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"f2a-ThXF25RdTvaF7phoq3qz8VwRTuI\"",
		"mtime": "2026-09-17T15:23:29.534Z",
		"size": 3882,
		"path": "../public/assets/listing-card-BZbU46ua.js"
	},
	"/robots.txt": {
		"type": "text/plain; charset=utf-8",
		"etag": "\"a0-CKGXSIe7TSsqDTmGm/nY1t/o5d0\"",
		"mtime": "2026-09-12T13:45:41.545Z",
		"size": 160,
		"path": "../public/robots.txt"
	},
	"/assets/listing._id-B-Nm5K4Y.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"71f7-FAxlH+rS/BSbvnwEBQDjQWKOOXE\"",
		"mtime": "2026-09-17T15:23:29.534Z",
		"size": 29175,
		"path": "../public/assets/listing._id-B-Nm5K4Y.js"
	},
	"/assets/building-2-BV_bjOIv.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"17f-XW7XZNEwGV3W/Pe5txkcKBNt4uQ\"",
		"mtime": "2026-09-17T15:23:29.493Z",
		"size": 383,
		"path": "../public/assets/building-2-BV_bjOIv.js"
	},
	"/assets/listing._id-CrllJWFj.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1eca-gE3f36JudMPI39vkzAxYwOHq+lo\"",
		"mtime": "2026-09-17T15:23:29.535Z",
		"size": 7882,
		"path": "../public/assets/listing._id-CrllJWFj.js"
	},
	"/assets/index-DY6hThg7.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"628f0-Qh1heI4PfethnzPd4V9eHMKHvV4\"",
		"mtime": "2026-09-17T15:23:29.487Z",
		"size": 403696,
		"path": "../public/assets/index-DY6hThg7.js"
	},
	"/assets/loader-circle-C9aa7hmp.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"90-W6BX2PpBIFp4p3mxC0+HTkwLIz4\"",
		"mtime": "2026-09-17T15:23:29.535Z",
		"size": 144,
		"path": "../public/assets/loader-circle-C9aa7hmp.js"
	},
	"/assets/login-BOKfalAc.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"b96-32PGzcnd01kcbf/CQLrgBB4P3+M\"",
		"mtime": "2026-09-17T15:23:29.536Z",
		"size": 2966,
		"path": "../public/assets/login-BOKfalAc.js"
	},
	"/assets/lost-and-found-L_VyuE2k.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"91-88WCTZesGUyAA/wmEMh+BlYZobk\"",
		"mtime": "2026-09-17T15:23:29.537Z",
		"size": 145,
		"path": "../public/assets/lost-and-found-L_VyuE2k.js"
	},
	"/assets/marketplace-C11NuB6z.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"93-MeHJZpVWqjjHr5WvlzgW+5NOL4w\"",
		"mtime": "2026-09-17T15:23:29.537Z",
		"size": 147,
		"path": "../public/assets/marketplace-C11NuB6z.js"
	},
	"/assets/my-listings-B5t_kb_Y.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"123b-A50q8D4YTbiDRLo+K+DS0rMiGLY\"",
		"mtime": "2026-09-17T15:23:29.537Z",
		"size": 4667,
		"path": "../public/assets/my-listings-B5t_kb_Y.js"
	},
	"/assets/plus-BQUNDQCa.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"99-+iPrwFa8AME9pFq2oNWDDKUCKOg\"",
		"mtime": "2026-09-17T15:23:29.562Z",
		"size": 153,
		"path": "../public/assets/plus-BQUNDQCa.js"
	},
	"/assets/preload-helper-DmrTm_qj.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"181f-9JdYVjx0KMXe93DcjCfjP4FN370\"",
		"mtime": "2026-09-17T15:23:29.562Z",
		"size": 6175,
		"path": "../public/assets/preload-helper-DmrTm_qj.js"
	},
	"/assets/require-auth-_j3RuqSy.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"174-6ZOSkIktOD2VP0b3duAtQH6l/Rc\"",
		"mtime": "2026-09-17T15:23:29.571Z",
		"size": 372,
		"path": "../public/assets/require-auth-_j3RuqSy.js"
	},
	"/assets/routes-Ca1wQ0ud.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1bf6-smCHvdvaZUUfquc2r7+GVNoSo2Y\"",
		"mtime": "2026-09-17T15:23:29.571Z",
		"size": 7158,
		"path": "../public/assets/routes-Ca1wQ0ud.js"
	},
	"/assets/search-CxSqFFMy.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"ae-4xk+MavPcg6QkjMZWAQRiTkDzW8\"",
		"mtime": "2026-09-17T15:23:29.572Z",
		"size": 174,
		"path": "../public/assets/search-CxSqFFMy.js"
	},
	"/assets/slider-3X9IYkU2.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"2a41-xWTNseDh+7b1jrerNX1e43kccSQ\"",
		"mtime": "2026-09-17T15:23:29.582Z",
		"size": 10817,
		"path": "../public/assets/slider-3X9IYkU2.js"
	},
	"/assets/signup-DXzaG9vu.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1363-XYTNv+ad5kxzgkN8RaJAYlVp3ss\"",
		"mtime": "2026-09-17T15:23:29.573Z",
		"size": 4963,
		"path": "../public/assets/signup-DXzaG9vu.js"
	},
	"/assets/tabs-mF744JHA.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"df0-KSlwhqf7+qY3tcMw2ScwGyMbfUs\"",
		"mtime": "2026-09-17T15:23:29.583Z",
		"size": 3568,
		"path": "../public/assets/tabs-mF744JHA.js"
	},
	"/assets/useNavigate-CD2y4xJv.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"b7-9lJUxToHCkm0/8PwQaqQW7PAgKg\"",
		"mtime": "2026-09-17T15:23:29.584Z",
		"size": 183,
		"path": "../public/assets/useNavigate-CD2y4xJv.js"
	},
	"/assets/to-let-ClNmHoBu.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"2236-g6yRWhZGHxW7mrRc6nJCtGTV3uk\"",
		"mtime": "2026-09-17T15:23:29.583Z",
		"size": 8758,
		"path": "../public/assets/to-let-ClNmHoBu.js"
	},
	"/assets/user-round-DUK4H34w.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1d5-hzPR3yZqUExoeHoG96nRVvbvtsI\"",
		"mtime": "2026-09-17T15:23:29.599Z",
		"size": 469,
		"path": "../public/assets/user-round-DUK4H34w.js"
	},
	"/assets/shield-check-oE5cYHBL.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"140-FWuTbpe1Z5gJyD0LQe97H3SBJ8Y\"",
		"mtime": "2026-09-17T15:23:29.572Z",
		"size": 320,
		"path": "../public/assets/shield-check-oE5cYHBL.js"
	},
	"/assets/verify-email-Iyowq81i.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"210-ii5J1IPf0vLMZfipHjJ2oF91xZA\"",
		"mtime": "2026-09-17T15:23:29.601Z",
		"size": 528,
		"path": "../public/assets/verify-email-Iyowq81i.js"
	},
	"/assets/styles-DVkxSJb4.css": {
		"type": "text/css; charset=utf-8",
		"etag": "\"14cdb-vzgc0qs+OPX+7Ku6ru1mOs9jL4o\"",
		"mtime": "2026-09-17T15:23:29.604Z",
		"size": 85211,
		"path": "../public/assets/styles-DVkxSJb4.css"
	},
	"/assets/x-CiOZXhpu.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"9a-MPME7wTgv8Io6rqeZ+BEIWCufsM\"",
		"mtime": "2026-09-17T15:23:29.604Z",
		"size": 154,
		"path": "../public/assets/x-CiOZXhpu.js"
	},
	"/assets/verify-email-kEKS5rct.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"985-p37VvOlZKLE6ArLxXxaUr+/ca8s\"",
		"mtime": "2026-09-17T15:23:29.602Z",
		"size": 2437,
		"path": "../public/assets/verify-email-kEKS5rct.js"
	},
	"/campus-crate-logo.png": {
		"type": "image/png",
		"etag": "\"9d6-KZhBuXsxPOyciSc5eH8NwVDfaYs\"",
		"mtime": "2026-09-17T14:24:18.819Z",
		"size": 2518,
		"path": "../public/campus-crate-logo.png"
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

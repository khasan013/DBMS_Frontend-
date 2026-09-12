import { f as lazyRouteComponent, j as notFound, p as createFileRoute } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as listingDescription, t as getListing } from "./campus-data-CXIJlUbh.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/listing._id-BWxJKpi9.js
var $$splitComponentImporter = () => import("./listing._id-Dn-6g_1K.mjs");
var Route = createFileRoute("/listing/$id")({
	loader: ({ params }) => {
		const listing = getListing(Number(params.id));
		if (!listing) throw notFound();
		return { listing };
	},
	head: ({ loaderData }) => {
		if (!loaderData) return { meta: [{ title: "Listing unavailable — Campus Crate" }, {
			name: "robots",
			content: "noindex"
		}] };
		const title = `${loaderData.listing.title} — Campus Crate`;
		const description = listingDescription(loaderData.listing).slice(0, 155);
		return { meta: [
			{ title },
			{
				name: "description",
				content: description
			},
			{
				property: "og:title",
				content: title
			},
			{
				property: "og:description",
				content: description
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			}
		] };
	},
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
//#endregion
export { Route as t };

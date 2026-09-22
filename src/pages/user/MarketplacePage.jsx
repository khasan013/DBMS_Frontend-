import { createFileRoute } from "@tanstack/react-router";
import { FeedPage } from "./FeedPage";

export const Route = createFileRoute("/marketplace")({
  component: MarketplacePage,
});

function MarketplacePage() {
  return <FeedPage module="market" />;
}

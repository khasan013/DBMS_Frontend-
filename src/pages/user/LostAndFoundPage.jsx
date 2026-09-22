import { createFileRoute } from "@tanstack/react-router";
import { FeedPage } from "./FeedPage";

export const Route = createFileRoute("/lost-and-found")({
  component: LostAndFoundPage,
});

function LostAndFoundPage() {
  return <FeedPage module="lost" />;
}

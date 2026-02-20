import "server-only";
import { PostHog } from "posthog-node";

type CaptureOptions = {
  distinctId: string;
  event: string;
  properties?: Record<string, unknown>;
};

declare global {
  var posthogClient: PostHog | undefined;
}

function getPostHogClient() {
  const apiKey = process.env.POSTHOG_PROJECT_API_KEY;
  if (!apiKey) {
    return null;
  }

  if (!global.posthogClient) {
    global.posthogClient = new PostHog(apiKey, {
      host: process.env.NEXT_PUBLIC_POSTHOG_HOST || "https://us.i.posthog.com",
      flushAt: 1,
      flushInterval: 0,
    });
  }

  return global.posthogClient;
}

export async function captureServerEvent({
  distinctId,
  event,
  properties,
}: CaptureOptions) {
  const client = getPostHogClient();
  if (!client) {
    return;
  }

  try {
    client.capture({
      distinctId,
      event,
      properties,
    });

    await client.shutdown();
    global.posthogClient = undefined;
  } catch (error) {
    console.error("PostHog capture error:", error);
  }
}
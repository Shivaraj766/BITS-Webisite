import posthog from "posthog-js";

const key = process.env.NEXT_PUBLIC_POSTHOG_KEY;

if (typeof window !== "undefined" && key) {
  posthog.init(key, {
    api_host: process.env.NEXT_PUBLIC_POSTHOG_HOST || "https://us.i.posthog.com",
    capture_pageview: false,
    capture_pageleave: true,
    person_profiles: "identified_only",
  });
}

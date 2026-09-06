# Changelog

## 0.2.0

- Automatic retries for temporary API errors. When the API answers with a retryable error, such as `service_unavailable` or a rate limit, the node waits with exponential backoff, honors `Retry-After`, and re-issues the same request up to **Max Retries** times (default 2) before raising the error. Only successful responses consume a call, so retries never double-bill.

## 0.1.1

- First release published from GitHub Actions with npm provenance. No functional changes.

## 0.1.0

Initial release.

- Litescrape node with 23 operations across Google Search, Google Shopping, Google Maps Place, Google Review, Bing, DuckDuckGo, Yelp, Tripadvisor, and Apple Maps Place resources.
- Litescrape API credential with a connection test against the key status endpoint.
- Client-side validation of required and mutually exclusive parameters before a billed call is made.
- Simplify toggle, and Simplified, Raw, and Selected Fields output modes when the node is used as an AI Agent tool.

# n8n-nodes-litescrape

This is an n8n community node for the [Litescrape API](https://litescrape.com). It brings Google Search, Google Maps, Google Reviews, Google Shopping, Bing, DuckDuckGo, Yelp, Tripadvisor, and Apple Maps data into your workflows as structured JSON, from one API key.

[n8n](https://n8n.io/) is a fair-code licensed workflow automation platform.

[Installation](#installation)
[Credentials](#credentials)
[Operations](#operations)
[Using the node as an AI Agent tool](#using-the-node-as-an-ai-agent-tool)
[Output modes](#output-modes)
[Validation, errors, and billing](#validation-errors-and-billing)
[Example workflows](#example-workflows)
[Compatibility](#compatibility)
[Resources](#resources)

## Installation

On n8n Cloud and self-hosted instances with verified community nodes enabled, search for **Litescrape** in the nodes panel and install it from the **More from the community** section.

On a self-hosted instance you can also install it from **Settings > Community Nodes** by entering the package name:

```
n8n-nodes-litescrape
```

See the [n8n community nodes documentation](https://docs.n8n.io/integrations/community-nodes/installation/) for details.

## Credentials

1. Create an API key at [litescrape.com](https://litescrape.com). New keys include free calls so you can try every operation.
2. In n8n, create a **Litescrape API** credential and paste the key. The credential test calls the unbilled key status endpoint and confirms the key works.

The key is sent as a bearer token on every request.

## Operations

Every operation is one HTTP call to the Litescrape API and returns one item per input item.

| Resource | Operation | What it returns |
| --- | --- | --- |
| Google Search | Web Search | Organic results, ads, related questions, Knowledge Graph, AI Overview, and the other modules Google served for a query |
| Google Search | AI Overview | Only the AI Overview for a query, or a 404 when Google shows none |
| Google Search | AI Mode | The generated AI Mode answer with cited sources, optional follow-up token, and optional image prompt |
| Google Shopping | Search | The product grid, category blocks, sponsored listings, and refinement chips |
| Google Shopping | Product | One product page with merchant offers, specifications, reviews, and related products |
| Google Maps Place | Search | Places matching a query inside a viewport or named location, with filters for price, rating, and opening hours |
| Google Maps Place | Get Place | One exact place by place ID, CID, or data sequence |
| Google Maps Place | Popular Times | Live and usual foot traffic for one place |
| Google Maps Place | Posts | The posts a business published on its profile, with continuation |
| Google Maps Place | Photo Metadata | Contributor, place, and coordinate metadata for one photo |
| Google Review | Place Reviews | Reviews for one place with sorting, topic and text filters, and continuation |
| Google Review | Contributor Reviews | Up to 200 reviews from one contributor profile |
| Bing | Web Search | Organic results, ads, and answer modules |
| Bing | Maps Search | Bing Maps listings or one entity by ID |
| DuckDuckGo | Web Search | Ranked web results with region, safety, and date controls |
| DuckDuckGo | Maps Search | Local results inside a map viewport |
| Yelp | Business Search | Businesses by location, terms, category, map area, and sort |
| Yelp | Reviews | Public reviews for one business |
| Tripadvisor | Search | Places by text, geography, coordinates, and place type |
| Tripadvisor | Place | One place with details and price fields |
| Tripadvisor | Reviews | Reviews for one place with reviewer profiles and photos |
| Apple Maps Place | Places | Details for up to 50 places in one call |
| Apple Maps Place | Reviews | Ratings and written reviews Apple attributes to one place |

Required inputs sit at the top of each operation. Everything else lives under **Options**, and only the options you add are sent. Parameter names and accepted values follow the [Litescrape API reference](https://litescrape.com/docs).

### Pagination

Every call is billed, so the node never paginates on its own. Use the offset and count options where an operation has them, and pass a returned `next_page_token` back into **Next Page Token** for Google Reviews and Google Maps Posts.

## Using the node as an AI Agent tool

The node can be attached to an **AI Agent** as a tool. The agent fills in the query and options itself.

When used as a tool, an **Output** parameter replaces **Simplify**:

- **Simplified** returns the result groups without the request metadata.
- **Raw** returns the complete response.
- **Selected Fields** returns only the response groups you choose, so the agent's context window stays small.

## Output modes

- **Simplify** (on by default) drops `search_parameters` and reduces `search_metadata` to its `id`.
- Turn **Simplify** off to receive the complete response, including the artifact links in `search_metadata`.

## Validation, errors, and billing

The node checks required fields and mutually exclusive parameters before it sends a request, so an invalid combination fails in n8n without spending a call.

API errors surface as node errors carrying the API's `error_code` and `request_id`. Enable **Retry On Fail** on the node for errors the API marks as retryable, such as a temporary `service_unavailable`. Only successful responses consume a call; rejected and failed requests are not billed.

Requests time out after 120 seconds, above the API's own 90 second deadline. AI Mode is the slowest operation.

## Example workflows

The `examples/` folder holds importable workflows:

- `google-search.json`: search Google and split the organic results into items.
- `google-reviews-pagination.json`: fetch a place's reviews and follow the continuation token.
- `ai-agent-tool.json`: give an AI Agent live search and reviews tools.

Import a workflow from **Workflow > Import from File**, then select your Litescrape credential on each Litescrape node.

## Compatibility

Built and tested against n8n 1.x with `n8n-workflow` 2.x. The AI tool output selector needs an n8n version that supports tool-aware parameters (`@tool` display conditions); older versions show the standard **Simplify** toggle only.

## Resources

- [Litescrape API reference](https://litescrape.com/docs)
- [Litescrape](https://litescrape.com)
- [n8n community nodes documentation](https://docs.n8n.io/integrations/#community-nodes)

## License

[MIT](LICENSE)

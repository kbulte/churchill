---
title: "Deno Fresh"
metaTitle: "Deno Fresh"
metaDescription: "‍Deno Fresh"
---

Characteristics of Fresh
- Uses preact for templating
- Is based on island architecture
- typescript first
- no build step
- Server Side rendering by default

# DUMP

- fresh.gen.ts: This file is needed because Deno deploy cannot handle dynamic imports. This file is updated everytime a file is added and specifies a static import.

- preact is used because it is react compatible which gives access to a rich ecosystem. It has no external dependencies.

- There is no build step, how is the Typescript and JSX transpiled to javascript. This happens just in time at request time.

- Currently there is no deduplication of peer dependencies. Easiest way is too handle this in the import map. Deno works with urls for finding packages. An import map allows to specify an alias for a specific url.

# Resources
- https://deno.com/blog/fresh-is-stable (Announcement Fresh)
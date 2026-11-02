# plugin-rsc: the first SSR response after a start has a client component's `<Suspense>` fallback in its shell

1. `pnpm i && pnpm dev`
2. `curl -s http://localhost:5173 | grep -o '<p>loading...</p>'`: the first request after the server starts prints `<p>loading...</p>`; run it again and it prints nothing.
3. A framework would want the `Client Counter` button in the HTML shell on the first request too, as on the second, and plugin-rsc gives it no way to wait for the module. [`src/root.tsx`](src/root.tsx) wraps the client component in `<Suspense>`, and [`src/client.tsx`](src/client.tsx) imports [`./label.ts`](src/label.ts).
4. Same with `pnpm build && pnpm preview` and port 4173: the first request after each start prints it.

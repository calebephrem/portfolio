---
title: "Node.js Clustering"
description: "Use every CPU core in your Node.js server with the cluster Node.js module"
banner: https://topdev.vn/blog/wp-content/uploads/2019/04/nodejs-la-gi-768x491.jpg
authors: [Caleb]
date: October 4, 2026
tags: [Node.js, clusters, workers]
---

Imagine the `/api/login` endpoint you made, of a Node.js backend, got hit with lots of login requests. Each one looks up the user by email, verifies the password against a legacy `bcrypt` hash, re-hashes it with `Argon2id`, verifies an MFA code, then issues a JWT. If you use a pure JavaScript implementation like `bcryptjs`, all of that hashing runs on the main (master) thread. The server has, let's say, 4 CPU cores, but Node.js runs your JavaScript code on a single thread, so it can only use one core for all of these requests. When it's under heavy load, <mark class="secondary">the server either drops or delays requests</mark>, and clustering fixes this by running one worker per core.

According to the [Node.js docs](https://nodejs.org/api/cluster.html), clusters of Node.js processes can be used to run multiple instances of Node.js that distribute workloads among their application threads. It basically allows you to create many workers that share the same port, using all (or some) of the available CPU cores. The `cluster` module has been part of Node.js since v0.8, and is stable in current versions.

## Why Use Clustering

Node.js runs your JavaScript code on a single thread, so one process can only use one CPU core. On an 4 cored server, that leaves 3 cores sitting on the couch eating chips while one is fighting for its life :emoji{name="giggle"}. <mark>Clustering can be used to ensure all CPU cores are used to distribute work across all workers.</mark>

## When To Use Clustering

When you have alot of incoming HTTP requests that require heavy computation. It helps with distributing the load to independant workers, making the response time faster with less errors. Note that it won't help that much if your app mostly waits on databases or APIs, since Node.js already handles those things well on a single thread.

Let's test that out, shall we?

## Tests

### Without Clustering

`index.ts`:

```ts
import { serve } from "@hono/node-server";
import { Hono } from "hono";

const app = new Hono();

app.get("/", (c) => {
  let num = 0;

  // simulate a heavy computation
  for (let i = 0; i < 50_000_000; i++) {
    num++;
  }

  return c.json({ message: `Iterated ${num} times.` });
});

serve(
  {
    fetch: app.fetch,
    port: 3000,
  },
  () => console.log(`Server is running on http://localhost:3000`),
);
```

Then run `npx tsx ./index.ts`. On a new terminal window, run `npx loadtest -n 1000 -c 500 -k http://localhost:3000`.

```
Server is running on http://localhost:3000
```

**Loadtest Result:**

```
Target URL:          http://localhost:3000
Max requests:        1000
Concurrent clients:  1000
Running on cores:    2
Agent:               keepalive

Completed requests:  1000
Total errors:        381
Total time:          30.354 s
Mean latency:        20986.8 ms
Effective rps:       33

Percentage of requests served within a certain time
  50%      23800 ms
  90%      30194 ms
  95%      30208 ms
  99%      30219 ms
 100%      30220 ms (longest request)

   -1:   381 errors
```

> [!TIP]
> `loadtest` ran on 2 cores here and each core gets the full `-c` value, so `-c 500` means 1000 concurrent clients in total.

### With Clustering

`index.ts` stays the same, `cluster.ts`:

```ts
import cluster from "cluster";
import os from "os";
import path from "path";

// how many cpu cores we have
const cpus = os.cpus().length;

cluster.setupPrimary({
  exec: path.join(process.cwd(), "index.ts"), // our index.ts
});

for (let i = 0; i < cpus; i++) {
  // forking -> new worker
  cluster.fork();
}

// if a worker crashes for some reason..... just spawn another one
cluster.on("exit", () => cluster.fork());
```

Then this time, run `npx tsx ./cluster.ts`, and do the same loadtest in a new terminal.

```
Server is running on http://localhost:3000
Server is running on http://localhost:3000
Server is running on http://localhost:3000
Server is running on http://localhost:3000
```

**Loadtest Result:**

```
Target URL:          http://localhost:3000
Max requests:        1000
Concurrent clients:  1000
Running on cores:    2
Agent:               keepalive

Completed requests:  1000
Total errors:        0
Total time:          26.792 s
Mean latency:        13402.4 ms
Effective rps:       37

Percentage of requests served within a certain time
  50%      13356 ms
  90%      24098 ms
  95%      25419 ms
  99%      26391 ms
 100%      26603 ms (longest request)
```

### Summary

| Metric                | Without Clustering    | With Clustering       | Benefit of Clustering           |
| --------------------- | --------------------- | --------------------- | ------------------------------- |
| Total Timeouts        | 381 (38.1%)           | 0 (0%)                | -100% timeouts                  |
| Successful RPS        | 20 req/s              | 37 req/s              | ~1.8x higher throughput         |
| Duration              | 30.35 s               | 26.79 s               | 11.7% faster completion         |
| Mean Latency          | 20,986.8 ms (~21.0 s) | 13,402.4 ms (~13.4 s) | ~36% reduction in avg wait      |
| 50th Percentile (p50) | 23,800 ms             | 13,356 ms             | 43.9% faster median response    |
| 90th Percentile (p90) | 30,194 ms             | 24,098 ms             | 20.2% faster for tail requests  |
| 95th Percentile (p95) | 30,208 ms             | 25,419 ms             | 15.9% faster                    |
| 99th Percentile (p99) | 30,219 ms             | 26,391 ms             | 12.7% faster                    |
| Max Latency (p100)    | 30,220 ms             | 26,603 ms             | ~3.6 seconds lower peak latency |

## Better Clustering With PM2

Instead of manually running clustering, production can better handle using the [pm2 npm package](http://npmjs.com/package/pm2). "PM2 is a production process manager for Node.js/Bun applications with a built-in load balancer. It allows you to keep applications alive forever, to reload them without downtime and to facilitate common system admin tasks" (PM2). It's as easy as:

```sh
pm2 start index.js -i max
```

> [!NOTE]
> Without `-i <processes>`, PM2 runs a single process and doesn't cluster anything.

## Conclusion

Node.js runs your JavaScript on a single thread, so on a multi-core server most of your CPU sits idle while one core handles everything. Clustering fixes that by summoning workers per core, all sharing the same port, with the master process handling the workers and spawning another one on crash.

In our tests, the same machine and the same app code went from timing out on 381 of 1000 requests to timing out on none, with about 36% lower mean latency, just by adding a small `cluster.ts` file.

> [!INFO]
> Since workers don't share memory, anything kept in memory (sessions, caches, rate limits) needs to move outside to something shared like Redis or a db first.

For production, you can just skip the `cluster.ts` file and use PM2 (`pm2 start index.js -i max`). You get clustering, crash recovery, and some other additional features out of the box.

## Sources

- "Cluster." _Node.js_, [nodejs.org/api/cluster.html](https://nodejs.org/api/cluster.html).
- Loban, Volodymyr. "Clustering in Node.js." _Medium_, 22 Sep. 2024, [medium.com/@vloban/clustering-in-node-js-4e0bf17b7f0b](https://medium.com/@vloban/clustering-in-node-js-4e0bf17b7f0b).
- Nahid, Shams. "Clustering in Node.js: Look for the Limitations." _Medium_, 27 Sep. 2022, [shams-nahid.medium.com/clustering-in-node-js-look-for-the-limitations-e6ff7f846a3c](https://shams-nahid.medium.com/clustering-in-node-js-look-for-the-limitations-e6ff7f846a3c).
- "PM2." _npm_, [www.npmjs.com/package/pm2](https://www.npmjs.com/package/pm2).
- "Scaling Your Node.js App Using the 'Cluster' Module." _YouTube_, uploaded by Software Developer Diaries, 26 Feb. 2023, [youtu.be/6lHvks6R6cI](https://youtu.be/6lHvks6R6cI).

---
title: "Azure functions"
metaTitle: "Azure functions"
metaDescription: "Azure functions"
---
# Where are Azure functions a good fit?

- processing of event streams like IOT, Event hubs or Kafka.
- web APIs and mobile backends
- glue between systems
- automating scripts and jobs

# Key concepts of Azure functions

- function app: Unit of development, deployment and scale.
- triggers: Event source that starts the function. Every function must have a trigger and can only have one trigger.
- bindings: A way to pull data in or push data out of the function without needing to write integration code.

# What is serverless?

- abstraction of servers
- event-driven
- micro-billing

An Azure function instance is 1.5 GB of memory and 1 core of CPU
A single function can maximum 10 minutes if you need more time to process something, use durable functions
Durable functions are built on top of the open-source Durable Task Framework



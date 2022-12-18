---
title: "Distributed applications"
metaTitle: "Distributed applications"
metaDescription: "Distributed applications"
---

Distributed computing is more of a general term that says that a single application runs on several connected machines instead of a single machine.
Distributed applications fall in one of these basic architectures:

- Client-server (multi-tiered applications)
- Peer 2 peer

Following architectural styles fall in the client-server basic architecture:

- Actor model
- SOA
- REST
- Event-driven architectures (CQRS, Eventsourcing)
- Microservices

In the 70's a low-powered machine on someone’s desk could be used to harness the greater power of a mainframe in another room or building.
Distributed system architectures came very popular with the internet and in the early 2000s with the development of cloud data centers.
Today everything is a distributed application.

# main advantages

- Because of their distributed nature, when structured properly, distributed systems are inherently more reliable. The always on demand have high availability and reliability requirements. (1)
- Allow to scale nearly instantly in response to user demand.

1. Your application may be made up of two components: one is a user-facing application server and the other is a background configuration file loader. Clearly, end-user-facing request latency is the highest priority, so the user-facing application needs to have sufficient resources to ensure that it is highly responsive. On the other hand, the background configuration loader is mostly a best-effort service; if it is delayed slightly during times of high user-request volume, the system will be okay.

# other advantages of splitting up in smaller components

- Boundaries delineates team ownership and allow to scale teams. Teams of to 6 members. Develop in parallel with multiple teams.
- A hard boundary via a proces or container is intended to provide separation of concerns (e.g., this image does this one thing and this business capability)
- Release different parts of the application on a different frequency without impacting each other
- Small components are well understood and can easily be tested, updated, and deployed
- Reusability of components. If a component focusses on one business capability very well it can be used by other teams
- Different technologies can be used that fit the skills of the team or the type of component

# disadvantages
- Complex to design (get the different pieces boundaries, responsabilities and contracts right)
- Hard to build (the engineering skills needed to build a reliable distributed system are significantly higher, developers need skills around networking, new patterns, security, monitoring, messaging and protocols) There is a big gap between running a simple api based website with only north south communication and a group of components that run on different machines, dynamicaly scale, go up and down and do east west communication.
- More pieces to deploy
- Require high investment in monitoring

# containerization

- The biggest GOAL of containerization is to establish boundaries around specific resources (e.g., this application needs two cores and 8 GB of memory)
- Solve the difficulties of deploying and orchestrating a whole herd of loose components

# SOA vs Microservices

- Focus: reusability vs scalability/reliability
- Synchronous communication: SOAP+XML vs REST+JSON
- Asynchronous communication: Entreprise service bus vs smart endpoints and dumb pipes
- Scope: entreprise vs application
- Direction of communication: North/South centric vs North/South and East/West centric
- Data: dependant on data of other services (share as much as possible) vs local data and duplication of data (share as little as possible)
- Granularity: coarse grained vs fine grained -> this has a big impact on tooling

# Event-driven architecture (EDA)

Makes events a first class citizen for state changes within an application. It makes applications more loose coupled, horizontal scalable and fault tolerant via the use of events. EDA promoting the production, detection, consumption of, and reaction to events. As a disadvantage it can be hard to visualize the flow of events.

# Conclusion from Brendan Burns' Designing distributed systems book

Every company, regardless of its origins, is becoming a digital company. This transformation requires the delivery of APIs and services to be consumed by mobile applications, devices in the internet of things (IoT), or even autonomous vehicles and systems. The increasing criticality of these systems means that it is necessary for these online systems to be built for redundancy, fault tolerance, and high availability. At the same time, the requirements of business necessitate rapid agility to develop and roll out new software, iterate on existing applications, or experiment with new user inter‐
faces and APIs. The confluence of these requirements has led to an order of magnitude increase in the number of distributed systems that need to be built.
The task of building these systems is still far too difficult. The overall cost of developing, updating, and maintaining such a system is far too high. Likewise, the set of people with the capabilities and skills to build such applications is far too small to address the growing need.

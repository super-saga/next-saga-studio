---
title: "From Discovery to Production in Weeks, Not Months"
excerpt: "The premise sounds bold. The mechanism is not mysterious. Here's exactly how we scope, architect, build, and ship in focused sprints without the six-month runway most agencies require."
publishDate: "2025-10-20"
author: "Saga Studio"
category: "Process"
readTime: "7 min read"
image: "/blog/discovery-to-production.jpg"
featured: false
draft: false
---

When we tell founders that we go from discovery to production in six to ten weeks, the first reaction is usually skepticism. The second is usually a question about what gets cut.

The answer is: nothing that matters. The thing that gets cut is the overhead — the check-ins that don't change anything, the revision cycles that loop back to decisions already made, the status updates that consume calendar time without producing clarity.

Here's exactly how the timeline actually works.

## Week 1–2: Discovery That Produces Decisions

Most discovery phases are slow because they're trying to answer too many questions at once and because the output is a document, not a decision.

We structure discovery differently. The output isn't a PRD — it's a set of resolved decisions about three things:

**What are we building?** Not in aspirational terms, but in concrete terms. What does the v1 system do? What does it explicitly not do? Where are the boundaries?

**What does "done" look like?** What user journeys must work flawlessly at launch? What metrics tell us the system is performing correctly? What would make us pull the release?

**What are the real constraints?** Budget, timeline, compliance requirements, integration dependencies. Not the aspirational constraints — the actual ones. A payment flow that needs to integrate with a specific local payment gateway has different constraints than one using Stripe. We find this out in week one, not week seven.

By day five we have a scope document. By day ten we have an architecture draft and a sprint plan. The client team has reviewed both and approved them. We have a shared definition of done.

## Week 2–3: Architecture Before Code

The most expensive mistake in software projects is writing production code against an architecture that turns out to be wrong. Changing the architecture after the code exists is expensive. Changing it on paper is cheap.

We spend up to a week on architecture before anyone writes a line of production code. This includes:

- Data models and their relationships
- API contract definitions (what endpoints exist, what they accept, what they return)
- Service boundaries and integration points
- Database schema for core entities
- Authentication and authorization model
- Deployment architecture and infrastructure plan

The engineers who will build the system design the architecture. The client reviews it and asks questions. We resolve open questions before they become implemented assumptions.

This week feels slow. It's actually the fastest part of the project — it's where we earn the velocity of every week that follows.

## Week 3–8: Sprint Build

The build phase is fast for two reasons: the architecture is decided, and the scope is locked.

Scope lock is the part clients most often resist and most often thank us for later. When the architecture is done and the sprint plan is set, new feature requests go to a backlog, not into the current sprint. We add them to v2. The current sprint ships what it planned to ship.

This sounds obvious. In practice, it requires discipline from both sides. Feature requests feel urgent when the product is being built. The temptation to add them mid-sprint is constant. We push back consistently, because every mid-sprint feature addition extends the timeline and introduces integration risk.

Within the sprint, the engineering rhythm is:
- Features are built against the API contract
- Tests are written as features are built, not after
- A staging environment is updated daily
- Client demos happen weekly on the staging build
- Feedback goes to the next sprint backlog, not the current sprint

The client sees real, running software weekly. There are no surprises at the final demo.

## Week 8–10: QA, Hardening, and Handover

The last two weeks are not about adding features. They're about making what exists reliable and transferring it.

**QA.** Human testers work through every user journey against a test plan we built in discovery. They're specifically looking for edge cases — what happens when a payment times out? What happens when the user's session expires mid-flow? What happens when the file they upload is twice the size we expected?

**Performance testing.** We run load tests against the expected peak usage. If the system degrades under realistic load, we fix it before launch, not after.

**Security review.** Authentication paths, input validation, dependency audit. Not a comprehensive penetration test — that's a separate engagement — but a first-principles review of the highest-risk paths.

**Handover.** Architecture decision records, runbook, knowledge transfer sessions. The client team drives; we observe. We're done when they can answer their own questions.

**Launch.** The first production deployment is planned, not improvised. We know what we're watching, what success looks like, and what the rollback plan is.

## What Makes This Possible

The compressed timeline isn't magic. It's the result of a few specific choices:

**Small, senior teams.** Three to five people who can make decisions without committee approval move faster than eight people who need sign-off at every step. We don't staff projects with juniors supervised by a senior. We staff them with people who can own their work end-to-end.

**Decisions stay decided.** Architecture decisions made in week two don't get relitigated in week six. If a decision turns out to be wrong, we correct it explicitly and log why. We don't silently undo it.

**The client is a partner, not a customer.** The fast timeline requires active participation from the client team in discovery and weekly review. If the client is hard to reach or slow to approve, the timeline extends. We make this explicit in the project agreement.

**Everything is in writing.** Decision records, API contracts, sprint plans, test cases. When something needs to change, we change the document first. This sounds bureaucratic; it's actually the fastest way to make changes correctly.

## The Real Question

The question clients usually ask is "how do you ship so fast?" The more useful question is "how do you ship something that holds up six months after you leave?"

The answer to both is the same: discipline about scope, architecture before code, and handover built in from the start.

That's the process. It's not a shortcut. It's a different set of priorities.

---
layout: post
title: "Open-Source Contributions"
date: 2024-09-11 12:00:00 -0400
categories: [tech, ethereum, open-source, startups]
---

*(This post was originally featured on [the Pluto website](https://pluto.xyz/blog/open-source-contributions))*

We’ve recently been experimenting with incorporating open-source contributors into our team and development process at Pluto. **Today, we want to extend the invitation to others interested in contributing to the forefront of applied cryptography.** 

In the rest of this short post, we explain why a developer might want to contribute to our open-source repositories, what we at Pluto want to achieve with an active and open contributor ecosystem, and what our experience has been like working with a few external contributors so far. 

**TL;DR — Open-source is great for projects and for external contributors, and if you want to contribute to Pluto, go to our [Github profile](https://github.com/pluto?view_as=public) to find [contribution guidelines](https://github.com/pluto/.github/blob/main/profile/CONTRIBUTING.md)**. For now, we’re opening up a handful of bounties in the [Ronkathon](https://github.com/pluto/ronkathon) educational project and the [Parser-Attestor](https://github.com/pluto/parser-attestor) Circom JSON circuits, which are available as open issues labelled ‘bounty’. We have also open-sourced the [AES-proof](https://github.com/pluto/aes-proof) Circom circuits, which will have bounties in the near-term. In the coming weeks, we will be open-sourcing other core repositories and adding additional bounties across the codebase.

---

Open-source levels the playing field for developers by removing the barriers to participation. All you need is a computer, and you’re part of the global community shaping the future of software.

There’s a long history of independent developers making significant contributions to major open-source projects. From Linux to Mozilla to Bitcoin, contributors to open-source projects have been central to the evolution of software as we know it.  

Open-source is great for the project *and* for the contributor. The ability to collaborate with other developers working on the same project provides a valuable learning experience that just can’t happen in closed-source projects. This is especially true at the forefront of new technological innovation, like applied cryptography research and development — there’s no better proof-of-work than contributions to the projects innovating at the frontier of a rapidly-changing field.

There’s an intangible social aspect to open-source too. Open software is a modern reflection of the most basic human instincts of shared culture and shared experience. We innately search for community, shared cultural values, and a place of belonging, and open-source helps us bridge the gap of geographical distances or mismatched time zones to create a shared ecosystem where anyone in the world can participate. 

**We hope that by enabling open-source contributors to participate in Pluto’s development process, we can help others dip their toes into advanced cryptography R&D and further their own careers and life experiences.** 

---

We at Pluto are building a developer tooling company. Fundamentally, we are here to serve developers. Working together with our community is our best way for us to stay connected to that goal. By working with open-source developers, we get to learn from fresh perspectives to improve how we present, prepare, and communicate our own work to the external audience that we intend to serve. 

External contributors also hold us to a higher standard of internal work — we’re forced to clarify our thinking, raise the quality of work we do, and think more carefully about collaborative development, instead of just focusing on our own individual contributions. External contributors provide a first-pass audit of our codebase and a fresh set of eyes on the work that we do, but more importantly, they push us to be the best versions of ourselves as software developers.  The involvement of independent contributors is fundamental to the growth and success of any open-source project, and we hope to continue to enable collaborative, positive-sum contributions.

---

We’re grateful for the experience of working with the small handful of external contributors we’ve had so far. Specifically, we want to mention the work that has been done by our closest collaborators and the work done by a few ambitious hackers at ZK Hack Montreal last month.

[Lonerapier](https://github.com/lonerapier) has been a poster child for the relationships that open-source can create. Through his excellent contributions to Ronkathon over the past 3 months, he has been learning about specific implementations of applied cryptography primitives, and we’ve been able to bring Lonerapier closer to the team as the first part-time contributor of our continuing open-source effort. [This issue](https://github.com/pluto/ronkathon/pull/90) is an excellent example of the collaborative development process at work.

[Kai](https://github.com/kaigeffen) is another independent contributor that we’ve gotten closer to as a team. He has been working on a meaty [Ghash implementation](https://github.com/pluto/ronkathon/issues/141), starting with `mulx` circuits. How did we meet Kai? He simply came up to our team during the ZK Hack event and asked what he could help with. We’re excited to have Kai contributing with Pluto, and are continuously looking for ways to reward and move forward together with our contributors as we consider our role in creating the developer that the ZK ecosystem wants and needs.

At ZK Hack, we also worked with a few other contributors on Ronkathon bounties.

1. [Ashutosh](https://x.com/goforashutosh/status/1731634432904462350)’s [implementation](https://devfolio.co/projects/sumcheck-for-ronkathon-ca78) of multi-variate polynomials
2. [Hector](https://hecmas.github.io/)’s [implementation](https://devfolio.co/projects/hmacsha-in-ronkathon-1f17) of the HMAC algorithm with SHA-256
3. Simon and John, who won a ‘Chewing Glass’ award for working on a challenging Sumcheck implementation

We’re grateful that Ashutosh, Hector, Simon, and John spent their ZK Hack experience working with our team.

---

In summary, we are inviting developers to come level up with us as we build together. We welcome the external pressure, which guides our team at Pluto towards higher internal standards and better software development practices. By explicitly declaring Pluto to be a collaborative open-source environment, we hope to encourage others to participate, learn, and improve their own skillsets, regardless of geography or past experience. 

We will gladly support high-quality contributions with cash bounties — see the [Bounties](https://github.com/pluto/.github/blob/main/profile/CONTRIBUTING.md#bounties) section of our contribution guidelines for more info.

If you have questions about contributing to any of our projects, join [our Telegram](https://t.me/pluto_xyz/166).
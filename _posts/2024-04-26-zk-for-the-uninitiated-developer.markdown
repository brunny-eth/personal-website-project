---
layout: post
title: "ZK For the Uninitiated Developer"
date: 2024-04-26 12:00:00 -0400
categories: [tech, ethereum, startups, open-source]
---

*(This post was originally featured on [the Pluto website](https://pluto.xyz/blog/zk-for-the-uninitiated-developer))*

Zero-knowledge proofs are a complicated subject. It might take a background in advanced cryptography, theoretical computer science and mathematics to learn exactly *how* these zero-knowledge proofs (’ZKPs’) work. 

But ZKPs are really just another set of tools in a developer’s toolkit. **Developers shouldn’t need to be cryptographers to use ZKPs in their onchain applications,** the same way developers can use hash functions without needing to understand the constructions of those hash functions.

In this primer, we’ll help you think through ZKPs from first principles, starting from the ‘*why*’ — why use ZKPs at all? 

---

### Why use ZKPs at all?

The explanations that are commonly used to describe ZKPs — from [Where’s Waldo](https://www.scientificamerican.com/article/wheres-waldo-how-to-prove-you-found-him-without-revealing-where-he-is/) to [Alice/Bob/Charlie](https://medium.com/qed-it/the-incredible-machine-4d1270d7363a) to ‘[prove your age to a bartender without showing ID](https://www.gelato.network/blog/from-zero-to-zk-pro)’ — are really about explaining *how to generate* the zero-knowledge proofs, **rather than what you might do with this stuff once you’ve got it.

As an application developer thinking about how to build the next big onchain application, it can be easy to miss the forest for the trees. The trees are all of the cryptography jargon, the advanced mathematics, and the ‘how’ of constructing a ZKP. 

But the forest is the ‘why’ — why would I even want to use this stuff in the first place?

![missing-the-forest-for-the-trees-dalle]({{ site.baseurl }}/images/missingtheforest.png)

As far as tools in a developer’s toolkit go, ZKPs are a Swiss army knife. ZKPs can be used to:

- **Bring offchain state transitions onchain —** ZK rollups bundle up transactions and bring the output of those transactions onchain.
- **Bring verifiable computation onchain** — Developers can do arbitrary computation offchain on some data, and then bring that verifiably-computed data onchain. Essentially, the “copy, paste” action, but for computation.
- **Bring prior onchain history back onchain —** Developers can grab prior blockchain history and bring it back onchain to be used in smart contracts. This is the ‘state proofs’ category of ZKPs.

All of these examples focus on *blockchain* data, either bringing blockchain data from one blockchain to another, or bringing the history of a blockchain back up to the top of the chain.  But ZKPs are much more expressive than just moving and verifying data on a blockchain.  

**ZKPs can also be used to prove arbitrary data from internet sources in a verifiable way. We call these types of ZKPs ‘Web Proofs’.** 

Examples of Web Proofs include:

- A proof that you fit into some identity class, like ‘people that live in Florida', without revealing any other personal details.
- A proof that you reached a certain rating (like >4.5 stars) on a platform (like Uber or Airbnb) without disclosing the personal details of your interactions on these services.
- A proof that you have some badge, item, or accomplishment in a certain online game.
- A proof that you received a certain type of email from a certain sender.
- A proof that you have achieved certain financial milestones, like $X in a savings account or $Y in retirement accounts.
- A proof of educational achievements or certifications.

You can think about this type of ZKP — Web Proofs — as combining a ‘Proof of Data Existence’ plus a ‘Proof of Data Integrity’, rolled up into one useful package. And the generalization of all of these examples into a single holistic description of Web Proofs:

- **Proofs of arbitrary data served to end users by any internet server**

We, at Pluto, find Web Proofs to be the most interesting type of ZKP. 

Regardless of what type of proof is being used, the proof itself has certain guarantees. After the ZKP is created, then that proof can be verified onchain, with the chain itself acting as the autonomous verifier of the proof’s correctness, or the proof can be verified independently offchain. So a more apt general description of ZKPs is that they enable developers to (1) perform a computation, (2) credibly commit to the correctness of that computation, and (3) share a succinct proof that any party can use to verify its correctness. All of this can be done while still maintaining privacy on that data. 

**And this is the answer to the question of ‘why use ZKPs at all?’ — ZKPs are an incredibly expressive tool for developers. ZKPs enable verifiable movement of arbitrary data across the internet, onchain or offchain, and using these tools effectively unlocks a bunch of cool stuff that developers can build for users.** 

That’s what we’re all here for, right? Build cool stuff that people will use?

---

## Yes, build cool stuff. But how is this even possible?

Well, the data that ZKPs verify — blockchain data or otherwise — is really just a *proof of that data’s existence.* This flips the script on our traditional notions of online interactions with other users or with the applications that we use day-to-day. The data is there, fully operational and verifiable and real, but it is shrouded from prying eyes by the ZKP, preserving privacy while ensuring data integrity.

For the purpose of an application developer, the proofs can be just as good as the underlying data. 

- If your application should only grant access to those users that own a certain token… A proof that a user owns that token is just as good as checking the user’s balances yourself.
- If your application needs to anonymize users for [anonymous Q&A](https://33bits.xyz/)… A proof that a user belongs to a certain set of people, like the first 10,000 people to join Farcaster, is just as good as checking every one of the first 10,000 Farcaster joiners manually.
- If your onchain application wants to add in a reputation score based on how many positive Uber reviews a user has… A proof that a user has a high Uber rating is just as good as reading all of the user’s Uber reviews yourself.

In fact, the proofs are not ‘just as good’ as the underlying data — in many ways, having the proof is *better* than having all of the underlying data. Verifying a single proof of a user’s token balance is much more privacy-preserving than checking the user’s address yourself, and verifying a single proof of a user’s Farcaster ID is much faster and more efficient than going through all of the IDs yourself.

And verifying the proof of a user’s Uber rating onchain **lets developers transfer trust from Uber into a smart contract**, where it can be used and accessed by other onchain applications.

That last point is an important one. While ZKPs have plenty of non-blockchain potential, bringing ZKPs of offchain data onchain represents our best chance at breaking down the Web2 data silos. 

So if you are an application developer that wants to use verifiable offchain data in your application, potentially in a privacy-preserving manner, ZKPs are the tool for you. 

---

## Can you give me an example?

We’ll walk through one in-depth example to demonstrate how ZKPs generally, and Web Proofs specifically, can expand the design space for onchain applications. 

Imagine an open communications protocol, where anyone can interact with the core protocol but different client implementations built on top of the protocol can choose what experience their users get. These clients differentiate themselves via their bespoke moderation of certain content, or their feature set and user experience, or really anything in-between. (This general idea might [sound familiar](https://docs.farcaster.xyz/).)

You are an entrepreneur building one of the clients on top of this open protocol. The appeal of your implementation over the others is that you are going to fix the onslaught of spammy posts from bots and airdrop farmers. So before users can post on your service, they will have to prove some reputation that shows that they aren’t bots or airdrop farmers. 

But you don’t want to just use ‘Sign in with Google’ — anyone can make a Google account, so bad actors will just make new accounts, and the spammy posts and phishing links will continue! No, that just won’t work. Instead, you’re going to take a scrappy approach and bootstrap reputation using other data sources. 

You’re going to ask users to show that they have achieved at least 2 (or 3, or 1, or 6 — ultimately, this is your call) of the following characteristics:

- The user has received 5 positive reviews from drivers on Uber or Lyft
- The user has received 3 positive reviews from hosts on Airbnb or VRBO
- The user has completed a Coinbase identity verification
- The user has a verified Twitter profile
- The user has verified their identity credentials using [zkPassport](https://twitter.com/zkPassport)
- The user has sold at least $100 worth of items via a Shopify storefront
- The user has an educational degree from one of the top 10,000 global universities
- The user has at least 2 blog posts published on Medium or Substack before the year 2023
- The user has had an active Spotify or Apple Music account for 2+ years

Using Web Proofs, users can prove that they meet at least 2 of these characteristics. End users can prove these statements on their own devices (like their mobile phone or their personal laptops) and just show you a proof — and that’s it. They’re in. 

What did we achieve with this? Well, the burden for a bot farm or a motivated troll has just gotten a lot harder. On Twitter, we are told that the bot problem can be solved by charging us $8 a month. But as long as these bots / trolls can make more than $8 a month by scamming or phishing users, then it still makes sense for these bad actors to pay the $8 for verification! With this Web Proofs-powered reputation check, the challenge for bots and troll farms gets much much harder.

See, what we are really trying to do here is (1) make it hard for bad actors to create multiple fake accounts, (2) leverage the existing anti-sybil / anti-bot infrastructure of other companies, and (3) cover 99% of the surface area with 1% of the work. You could create a brand new identity verification product from scratch… or you could just borrow reputation from other internet sources and go back to building the application you wanted to build in the first place.

One of the most exciting applications of ZKPs is that onchain applications can get practical guarantees about the characteristics of their users without asking users to open up their entire digital history to the application. 

---

### Web Proofs

If you want to learn the intimate details of the ‘how’ — how to construct a ZKP from scratch — there are many great resources:

- [Building PLONK by hand](https://research.metastate.dev/plonk-by-hand-part-1/)
- [Ronkathon](https://github.com/pluto/ronkathon), a resource created by Pluto
- [Building PLONK in Python](https://github.com/0xPARC/plonkathon)
- [ZKPs, an illustrated primer](https://blog.cryptographyengineering.com/2014/11/27/zero-knowledge-proofs-illustrated-primer/)

These resources can help guide you deeper down the path of the advanced cryptography and mathematics required to create ZKPs from scratch. 

But our goal at Pluto is to unlock the ‘why’ and to abstract the cryptographic complexity away for application developers. So to recap:

- ZKPs can be used in many contexts, and many people are experimenting with onchain and offchain ZKP use cases.
- In many ways, having a ZK proof is *better* than having all of the underlying data, since it can be verified more efficiently and potentially preserve privacy of the underlying data.
- Pluto is building a new type of ZKP called Web Proofs that lets developers bring arbitrary internet data onchain. We think these are the most useful set of ZKPs for application developers.

Ultimately, ZKPs are just one tool in a developer toolkit — a robust, useful, expressive, interesting tool, but a tool nonetheless. So leave the cryptography to the cryptographers, and instead, harness your energy towards building useful onchain applications.
---
layout: default
title: Blog
permalink: /blog/
---

<h2>Blog</h2>

<div class="page-intro">
  <p>This is a collection of some of my personal and professional writing. Some of the topics I've written about: technology, entrepreneurship, Ethereum, open-source software, and the Fermi Paradox.</p>
</div>

<ul class="post-list">
  {% for post in site.posts %}
    <li>
      <h3><a href="{{ post.url | relative_url }}">{{ post.title }}</a></h3>
      <p class="post-meta">{{ post.date | date: "%B %d, %Y" }}</p>
      <p>{{ post.excerpt | strip_html | truncatewords: 30 }}</p>
    </li>
  {% endfor %}
</ul>
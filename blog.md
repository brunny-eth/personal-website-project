---
layout: default
title: blog and reading recommendations
---

<h2>blog and reading recommendations</h2>

<div class="blog-intro">
  <p>I occassionally share my thoughts on topics like technology, entrepreneurship, Ethereum, and even some quirky topics like aliens. Below, you'll find a collection of my past writings.</p>
</div>

<h2>my latest post</h2>
<div class="featured-post">
  {% for post in site.posts limit:1 %}
    <h3><a href="{{ post.url | relative_url }}">{{ post.title }}</a></h3>
    <p class="post-meta">{{ post.date | date: "%B %d, %Y" }}</p>
    <p>{{ post.excerpt | strip_html | truncatewords: 50 }}</p>
    <a href="{{ post.url | relative_url }}">Read more...</a>
  {% endfor %}
</div>

<h2>all posts</h2>
<ul class="post-list">
  {% for post in site.posts %}
    <li>
      <h3><a href="{{ post.url | relative_url }}">{{ post.title }}</a></h3>
      <p class="post-meta">{{ post.date | date: "%B %d, %Y" }}</p>
      <p>{{ post.excerpt | strip_html | truncatewords: 30 }}</p>
    </li>
  {% endfor %}
</ul>
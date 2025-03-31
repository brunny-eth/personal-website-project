---
layout: default
title: Blog
permalink: /blog/
---

<h2>Blog</h2>

<div class="page-intro">
  <p>This is a collection of some of my personal and professional writing. Some of the topics I've written about: technology, entrepreneurship, Ethereum, open-source software, and the Fermi Paradox.</p>
</div>

<div class="subscription-form">
  <h3>Stay Updated</h3>
  <p>Subscribe to be notified when I publish something new.</p>
  
  <form id="subscription-form">
    <input type="email" id="email-input" placeholder="Your email address" required>
    <button type="submit">Subscribe</button>
    <div id="subscription-message" class="message"></div>
  </form>

  <script>
    document.getElementById('subscription-form').addEventListener('submit', async function(e) {
      e.preventDefault();
      
      const email = document.getElementById('email-input').value;
      const messageEl = document.getElementById('subscription-message');
      
      messageEl.textContent = 'Processing...';
      
      try {
        const response = await fetch('/api/subscribe', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ email })
        });
        
        const data = await response.json();
        
        if (response.ok) {
          messageEl.textContent = data.message || 'Subscribed successfully!';
          messageEl.className = 'message success';
          document.getElementById('email-input').value = '';
        } else {
          messageEl.textContent = data.error || 'Error subscribing. Please try again.';
          messageEl.className = 'message error';
        }
      } catch (error) {
        messageEl.textContent = 'Error connecting to server. Please try again.';
        messageEl.className = 'message error';
      }
    });
  </script>
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
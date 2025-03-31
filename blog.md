---
layout: default
title: Blog
permalink: /blog/
---
<h2>Blog</h2>

<div class="page-intro">
  <p>This is a collection of some of my personal and professional writing. Some of the topics I've written about: technology, entrepreneurship, Ethereum, open-source software, and the Fermi Paradox.</p>
</div>

<div class="subscription-container">
  <div class="subscription-form">
    <h3>Stay Updated</h3>
    <p>Subscribe to be notified when I publish something new.</p>
    
    <form id="blog-subscription-form">
      <input type="email" id="blog-email" name="email" placeholder="Your email address" required>
      <button type="submit">Subscribe</button>
    </form>
    
    <div id="blog-subscription-message" class="subscription-message"></div>

    <script>
      document.getElementById('blog-subscription-form').addEventListener('submit', async function(e) {
        e.preventDefault();
        
        const email = document.getElementById('blog-email').value;
        const messageEl = document.getElementById('blog-subscription-message');
        
        messageEl.textContent = 'Processing...';
        messageEl.className = 'subscription-message visible';
        
        try {
          const response = await fetch('/api/subscribe', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email })
          });
          
          const data = await response.json();
          
          if (response.ok) {
            messageEl.textContent = data.message || 'Subscribed successfully!';
            messageEl.className = 'subscription-message success visible';
            document.getElementById('blog-email').value = '';
          } else {
            messageEl.textContent = data.error || 'Error subscribing. Please try again.';
            messageEl.className = 'subscription-message error visible';
          }
        } catch (error) {
          messageEl.textContent = 'Error connecting to server. Please try again.';
          messageEl.className = 'subscription-message error visible';
        }
      });
    </script>
  </div>
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
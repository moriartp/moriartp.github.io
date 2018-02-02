---
title: 'Maren Moriarty'
media_order: 04.jpg
related_pages:
    - /team/pj-moriarty
---

the filter tells the plugin which files to gather up and compare in order to find related pages. My goto example is usually: --- filter: items: '@page': /blog --- This way it will use the page collection defined in the `/blog` page which makes sense when I'm using this plugin to find other related blog pages. However if you wanted to use a variety of pages, you could simply assign each one a specific category and use that: --- taxonomy: category: relatable --- Then in the plugin configuration: --- filter: items: '@taxonomy.category': relatable -

Maren likes purple.

maren wrote her name: maren
---
layout: page
title: News
cover: false
menu: true
---

{% assign updates = site.data.news | sort:"date" | reverse  %}
{% for update in updates %}
    {% include components/news.html news=update %}
{% endfor %}
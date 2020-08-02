---
layout: page
title: News
cover: false
---

{% assign updates = site.data.news | sort:"date" | reverse  %}
{% for update in updates %}
    {% include components/news.html news=update %}
{% endfor %}
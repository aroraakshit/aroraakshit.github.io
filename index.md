---
layout: page
title: Hi there!
cover: false
---
I am a deep learning solutions architect at [NVIDIA](https://www.nvidia.com/) focused on deploying machine learning and deep learning systems at scale. I recently graduated from University of Colorado Boulder with a Master's in Computer Science with specialization in deep learning. Prior to that, I completed my Bachelor's of Engineering from Thapar University, Patiala, India. 

At CU Boulder, I worked on a variety of projects, from applying RNNs to understand how students learn to predicting weather using LSTMs and CNNs to building an intelligent VR application that automatically completes a painting given some initial few strokes. 
I am interested in creative applications of machine learning/deep learning and the wide set of possibilities it presents. If you are interested in collaborating, feel free to drop an email!

## Recent News

{% assign updates = site.data.news | reverse  %}
{% for update in updates limit:6 %}
    {% include components/news.html news=update %}
{% endfor %}
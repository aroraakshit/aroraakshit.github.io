---
layout:     post
title:      The Neural Conversational Model
date:       2017-11-09 13:25:18
summary:    by Oriol Vinyals & Quoc Le (ICML Deep Learning Workshop 2015)
categories: ArtificialIntelligence
author:		Akshit Arora
thumbnail: wpexplorer
comments: true
tags:
 - ai
 - ml
 - nlp
 - brain
 - deep learning
 - conversational modelling
---

## Summary
The paper talks about an end-to-end framework based on using neural networks for mapping input sequences (statements) to output sequences (responses). This approach differs from conventional conversational systems because it lacks domain knowledge, can be trained end-to-end and requires fewer hand-crafted rules. The model predicts the next sentence given the previous sentence / sentences in a conversation. 
![seq2seq model]({{base.url}}/img/1.PNG)
A sequence to sequence, called [seq2seq][1] framework which takes input of one token at one timestamp and outputs one token at one timestamp. The framework is established using RNNs. The training phase involves learning the given true output through back propagation. In language tasks the objective is to decrease the perplexity and in this task as well the model is trained to maximize the cross entropy of the correct sequence using the context.

## Datasets Used
1. IT Helpdesk Troubleshooting Dataset (Training set: 30M tokens, validation set: 3M tokens)
2. OpenSubtitles Dataset (Tiedermann, 2009). (Training set: 923M tokens, validation set: 395M tokens)

## Advantages:
*	Since we are using neural networks, it is easy to use the same model for machine translation, question/answering and conversations without major changes in architecture.
*	Can generate simple and basic conversations using very few hand-crafted rules unlike conventional bots.
*	Able to extract knowledge from domain specific dataset (IT Helpdesk, finding solution to a technical problem) and from a large, noisy and general domain dataset of movie subtitles (common sense reasoning).

## Disadvantages:
*	Unlike easier tasks like Translation, this model does not completely solve the problem of modelling dialogue because: 
*	The objective function being optimized does not capture the actual objective of human communication.
*	Since it is a purely unsupervised model, it is unable to ensure consistency and general world knowledge.
*	Lack of personality. Hence cannot pass the Turing test. A paper by Microsoft talks about this limitation and introduces persona-based neural conversational models. (Find it [here][2])
*	No performance measure to calculate quality of models except manual inspection and perplexity.

## Related Works:
*	[NeuralConvo][3]
*	[The Neural Conversational Model by Siddha Ganju][4]

[1]: https://arxiv.org/abs/1409.3215
[2]: https://arxiv.org/abs/1603.06155
[3]: http://neuralconvo.huggingface.co/
[4]: http://sidgan.me/technical/2016/05/24/the_neural_conversation_model
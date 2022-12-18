---
title: "CSS Units"
metaTitle: "Css Units | Pick the right css unit"
metaDescription: "Are you using the right CSS units"
---

There are lot's of different css units available, picking the right one for the job is not easy.
In CSS there exist relative and absolute units:
- relative units are relative to something else
- absolute units are most of the time used for print

[more info on Mozilla](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Values_and_units) | 
[code pen](https://codepen.io/kbulte/pen/BamrjGV)

Here are some rules:

## Fontsize

For fontsize use REM, this one is relative to the fontsize of the root element ('html'). 
Usualy this is 16px. Why not use 16 pixels then?
Because you make things static, if a user's preferences states 20px you will overrule this with the hardcoded 16px.
Using REM makes sure it takes the user's preferences into account.

## Width

Setting a width is always a good idea to use a percentage and a max-width. Or CH is also a good fit. 
Why would you use CH? Because in typography you don't want more than 75 characters on a line.
45 CH is more or less 45 characters on a line.

## Height

First of all double check whether you realy need to set a height. VH is a good fit. 
Don't set the height property but only set a min-height to prevent weird overflow issues at the bottom.

## Padding and margins

Best fits for paddings and margins are REM and EM.

## Media queries

For consistency reasons use EM. Safari has some issues when using PX or REM. Info and tests can be found in the [zelwk post](https://zellwk.com/blog/media-query-units/).
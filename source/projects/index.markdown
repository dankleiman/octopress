---
layout: page
title: Projects
date: 2014-07-11 08:38
comments: true
sharing: true
footer: true
---

Check out some of my recent coding projects. You can see more of my work [on GitHub](http://github.com/dankleiman).

Datastroyer
-----------

*Search tool for compound data structures built in Ruby using Sinatra*

![datastroyer](https://cloud.githubusercontent.com/assets/5974052/3552758/e4f93016-08fb-11e4-8710-38783f870f77.png)

As Junior Developers, we set out to learn about compound data structures.

Quickly, we encountered hashes and arrays, and hashes inside arrays...inside of hashes and arrays of hashes with more hashes and arrays inside of them.

When you want to identify a specific value inside of these compound structures, your head starts to spin as you keep track of all the nested keys and indexes.

Basically, we wanted to create an easier way to get the "path" of any value inside a compound data structure, so we could reference it in our code.

Once our search tool was working in the command line, we deployed it to Heroku as a web app specifically geared to finding data in JSON objects.

Try out [Datastroyer](http://datastroyer.herokuapp.com/)

Graff Mags
----------

*TDD Rails app to upload and display collection of 2000+ graffiti magazines*

![Graff Mags](https://cloud.githubusercontent.com/assets/5974052/3553912/6965f58a-0908-11e4-8b2b-b14a91407f40.png)

While this site is designed to show off the images in a rare collection of magazines, the biggest challenge was actually creating a smooth, streamlined back-end entry UI with JavaScript and AJAX, since the collection had never before been catalogued.

Over time, we will upload the entire collection, make it searchable/filterable based on where and when an issue was published, publisher, featured crews, and other physical dimensions (which helps curators choose issues for their exhibits).

Check out [Graff Mags](http://graffmags.herokuapp.com).
klei.mn
-------

*Sinatra URL shortner on a custom domain*

![klei.mn url shortner](https://cloud.githubusercontent.com/assets/5974052/3552773/0d98248c-08fc-11e4-8457-0c3168613db8.png)

At Launch Academy we’ve been building Sinatra applications with simple databases (Redis and Postgres) and deploying them to Heroku.

One of the extra-credit projects was to build a url shortner and I thought it would be cool to hook mine up to a customized domain, kind of like a vanity plate for your car.

The .mn TLD was available from Mongolia, so I bought "klei.mn" to shorten my last name. In the process, I learned a little more about the pros and cons of url shortnening and how HTTP requests, routing, and redirection work.

Why not [shorten a link](http://klei.mn)?

Neighborhoods
-------------

*Review site built in Rails using TDD and lots of pair programming*

Our Launch Academy group project is a review site of Boston neighborhoods.

This was an exercise in pair programming, project planning, and TDD, designed to get us more comfortable with slightly larger Rails apps.

For me, the most interesting part was playing with building a seed file to make our demo app feel like a bigger site. I had to figure out how to generate users, reviews, comments, and votes, seeding from CSV data and looping through it to come up with varied and interesting combinations.

Want to see what it's like to [live in Back Bay](http://ancient-tor-3174.herokuapp.com/neighborhoods/2)?


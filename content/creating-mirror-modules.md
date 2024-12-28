---
title: Creating Custom Modules
series: MagicMirror
date: 2016-10-10T16:32:37.981Z
abstract: Time to make my specific requirements a reality. Let's write some custom modules.
length: 3
tags:
  - MagicMirror
image: /magicmirror/IMG-20161114-WA0029.jpg
github: https://github.com/prasanthsasikumar/MMM-Temperature-Humidity
---

![](/magicmirror/IMG-20161001-WA0022.jpg "Temperature and Humidity module")

Magicmirror comes with a host of modules, from showing calendar events to location-based weather data. The forum was a very happening place with support for most of my sensors, like motion detection and ultrasonic sensors. But there was no support for my specific type of temperature and humidity sensor  - DHT22. So I wrote a module that could work with DHT11, DHT22, and AM2302 sensors. 

Another requirement I had was to mirror the phone notifications. I was already using a third-party application - PushBullet, to mirror the notifications to my browser. So it was only a matter of writing a module that gets notifications from PushBullets API and showcases in the mirror. 

![](/magicmirror/IMG-20161003-WA0001.jpg "Mirroing phone notifications")

Since IBM Watson was trending in 2016, I wrote another module to do a voice recognition-based assistant for the mirror using the Watson APIs. Later realized that integrating Alexa would be a better fit, so I left this module out of the scope.

![](/magicmirror/IMG-20161001-WA0008.jpg "Remote edit source code with Atom")

Another interesting discovery was the remote editing plugin "remote-edit" in Atom. This plugin made it easy to edit the code running in the Raspberry Pi remotely from my windows machine. 


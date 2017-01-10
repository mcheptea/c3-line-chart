
kibana-plugin-line
==================

![screenshot](./screenshot.png)

Introduction
-------------

This plugin is an independent fork of https://github.com/sbeyn/kibana-plugin-line-sg

This plugin provides an enhanced line graph for Kibana 4.x. Among the features are:

* Multiple graph types.
* Define line labels.
* Choose colors.
* Adjust axe format.
* Custom axe range.

Used Libraries
--------------
* c3.js: C3 makes it easy to generate D3-based charts by wrapping the code required to construct the entire chart. We don't need to write D3 code any more. (http://c3js.org/)
* moment.js: Parse, validate, manipulate, and display dates in JavaScript.(http://momentjs.com/)

Installation
------------

```
	$ cd <path>/kibana/installedPlugins
	$ git clone -b 4.x <path/to/repo> line-sg
```


Uninstallation
--------------

```
	$ bin/kibana plugin  --remove line_sg
```

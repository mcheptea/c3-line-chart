Kibana C3 Line Chart
==================

![screenshot](./screenshot.png)

Introduction
-------------

This plugin is an independent fork from [kibana-plugin-line-sg](https://github.com/sbeyn/kibana-plugin-line-sg)

This plugin provides an enhanced line graph for Kibana 4.x. Among the features are:

* Multiple graph types.
* Define line labels.
* Choose colors.
* Adjust axe format.
* Custom axe range.
* Totals per line/column.
* Setting treshholds.
* Inverting axes.
* Zoom.


Used Libraries
--------------
* [c3.js](http://c3js.org/): C3 a D3-based chart library.
* [moment.js](http://momentjs.com/): Parse, validate, manipulate, and display dates in JavaScript.

Installation
------------

```
	$ cd <path>/kibana/installedPlugins
	$ git clone -b 4.x https://github.com/mcheptea/c3-line-chart.git c3-line-chart
```


Uninstallation
--------------

```
	$ bin/kibana plugin  --remove c3-line-chart
```

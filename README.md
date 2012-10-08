# COWHIDE

Cowhide is an HTML5 UI framework built on top of Twitter Bootstrap.
It takes advantage of Bootstrap's modularity both with regards to JavaScript
plugins and CDD style.

Bootstrap's JavaScript components are written as jQuery plugins, in a very
minimal way, and that makes it easy to work with them.

Bootstrap's strength resides in its CSS styles, created using the LESS
language.

Cowhide encapsulates Bootstrap's components and extend their functionality,
and implements its own new UI widgets as well.


## Components

Underscore.js
jQuery 1.8.2
Twitter Bootstrap 2.1.1
The Slider from jQuery UI 1.8.14.


## Buiding

Building requires `npm`. There are only three simple steps to installing
Cowhide:

    source env.sh
    npm install
    grunt


## The Calf example

Calf is an example Cowhide app. It showcases the basic "barebone" UI, and some
interactions. On top of the page there's a toolbar with some buttons that
simulate system events.

The `Night mode` button will ask the Framework to perform a theme switch, and
toggles day mode and night mode.

On the right end of the toolbar there's a form that will let you test the
Framework's ability to enforce a minimu font size on some widgets.

If you input a number smaller than 12 and click `Apply`, you will see the text
on the buttons get temporarily small as you request, but then the framework
will resize them up again after an artificial interval meant to let you see
that's happening.

The Calf app itself is at the bottom. It allows you to navigate artists, albums
and songs. Notice the smooth transitions as you change category.

On the right size there's a picture for the artist or album you are currently
hovering with your mouse, that defaults to a cute calf.

The volume button (last one on the right), will show you the pop-up window
that feature sliders and a `Seat Selector`.

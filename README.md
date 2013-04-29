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

jQuery, jQuery UI, Twitter Boostrap, Underscore


## Buiding

Building requires `npm`. There are only three simple steps to installing
Cowhide:

    npm install -g grunt-cli
    npm install
    grunt submodules
    (cd lib/jquery; npm install; grunt)
    (cd lib/jquery-ui; npm install; grunt build)
    grunt


## Testing

Just run:

    grunt test

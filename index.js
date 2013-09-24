var $             = require('jquery-untouched');
var _             = require('underscore');
var Backbone      = require('backbone');
var Firebase      = require('client-firebase');
Backbone.Firebase = require('./backfire.js');
Backbone.$        = $;

module.exports = {
    $: $,
    _: _,
    Backbone: Backbone
};

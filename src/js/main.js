/** @jsx React.DOM */
var Application = require('./components/application');
var React = require('react');

React.renderComponent(<Application title="meditation" />, document.getElementById('application'));
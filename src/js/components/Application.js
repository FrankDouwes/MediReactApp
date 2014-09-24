/** @jsx React.DOM */
var List 	= require('../components/list/List');
var React 	= require('react');

var Application = React.createClass({
		
	render:function(){
		
		return (
			
			<div id="application">
				<h1>{this.props.title}</h1>
				<List title="List" dataURL="temp/data.json" />
			</div>
		)
	}
});

module.exports = Application;
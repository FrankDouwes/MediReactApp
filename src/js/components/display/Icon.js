/** @jsx React.DOM */
var React 	= require('react');

var Icon = React.createClass({
	
	// define expected properties
	propTypes: {
		
		type: 		React.PropTypes.string.isRequired,
	},

	// set the default values
	getDefaultProps:function(){
		
		return {  
	    	
	    	type: 'placeholder'
	    }
	},

	render: function() {

		return (

			<img src={"svg/" + this.props.type + ".svg"} width="64" height="64" className="icon pull-right vertical-align"/>
		)
	}
});

module.exports = Icon;
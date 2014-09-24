/** @jsx React.DOM */
var React 		= require('react');
var ImageIcon 	= React.createClass({
	
	// define expected properties within react class
	propTypes: {
		
		type: 		React.PropTypes.string.isRequired,
		title: 		React.PropTypes.string,
	},

	// set the default values of the expected properties
	getDefaultProps:function(){
		
		return {  
	    	
	    	type: 'placeholder'
	    }
	},

	render: function() {
		
		return (

			<div className="icon col-xs-3 pull-right">
				<img src={this.props.type + ".svg"} />
				<p>{this.props.title}</p>
			</div>
		)
	}
});

module.exports = ImageIcon;
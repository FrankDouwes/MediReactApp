/** @jsx React.DOM */
var React 		= require('react');
var ImageIcon 	= React.createClass({
	
	// define expected properties
	propTypes: {
		
		type: 		React.PropTypes.string.isRequired,
		title: 		React.PropTypes.string,
	},

	// set the default values
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
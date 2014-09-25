/** @jsx React.DOM */
var React 	= require('react');

var Ribbon = React.createClass({

	// define expected properties
	propTypes: {
		
		label: 		React.PropTypes.string.isRequired,
	},

	render: function() {

		return (

			<div className="track row group">
				{cells}
			</div>
		)
	}
});

module.exports = Ribbon;
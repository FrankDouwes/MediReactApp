/** @jsx React.DOM */
var React 	= require('react');
var Icon 	= require('../display/Icon');
var Track 	= require('../display/Track');

var ListAdvertisement = React.createClass({
	
	// define expected properties
	propTypes: {
		
		data: 		React.PropTypes.object
	},

	render: function() {

		return (

			<li className="listAdvertisement list-group-item">
				<a href={this.props.data.clickThroughUrl} target="_blank"><img src={this.props.data.imageUrl} className="center-block" height="40" /></a>
			</li>
		)
	}
});

module.exports = ListAdvertisement;
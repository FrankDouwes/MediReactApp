/** @jsx React.DOM */
var React 			= require('react');
var Icon 			= require('../image/ImageIcon');
var Track 		= require('../graph/Track');

var ListItem = React.createClass({
	
	// define expected properties within react class
	propTypes: {
		
		title: 		React.PropTypes.string.isRequired,
		duration: 	React.PropTypes.number.isRequired,
		session: 	React.PropTypes.object.isRequired
	},

	render: function() {

		return (

			<li className="listItem col-xs-12">
				<div className="row">
					<Icon type="test" title="test test" />
					<h3 className="col-xs-9">{this.props.title}</h3>
				</div>
				<Track data={this.props.session.track} duration={this.props.duration} />
			</li>
		)
	}
});

module.exports = ListItem;
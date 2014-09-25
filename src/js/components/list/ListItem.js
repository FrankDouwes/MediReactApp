/** @jsx React.DOM */
var React 	= require('react');
var Icon 	= require('../image/ImageIcon');
var Track 	= require('../graph/Track');

var ListItem = React.createClass({
	
	// define expected properties
	propTypes: {
		
		title: 		React.PropTypes.string.isRequired,
		duration: 	React.PropTypes.number.isRequired,
		session: 	React.PropTypes.object.isRequired
	},

	render: function() {

		return (

			<li className="listItem list-group-item">
				<Icon type="test" title="test1" />
				<Icon type="test" title="test2" />
				<Icon type="test" title="test3" />
				<h3 className="">{this.props.title}</h3>
				<Track data={this.props.session.track} duration={this.props.duration} />
			</li>
		)
	}
});

module.exports = ListItem;
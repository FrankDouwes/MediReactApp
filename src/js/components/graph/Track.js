/** @jsx React.DOM */
var React = require('react');

var Track = React.createClass({

	// define expected properties within react class
	propTypes: {
		
		duration: 	React.PropTypes.number.isRequired,
		data: 		React.PropTypes.array.isRequired
	},

	// set the default values of the expected properties
	getDefaultProps:function(){
		
		return {  
	  		total: 		0,  	
	    	duration: 	1
	    }
	},

	render: function() {

		// create the session graph
		var cells = this.props.data.map(function (cell, i) {

			var cellWidthPerc = (cell.duration / this.props.duration) * 100;

			var style = {
  				backgroundColor: 'red',
  				width: cellWidthPerc + '%',
  				padding: 0,
  				margin: 0,
  				display: 'inline-block',
			};

      		return ( <div style={style} >cell</div>); 
    	}, this);

		return (

			<div className="track row">
				{cells}
			</div>
		)
	}
});

module.exports = Track;
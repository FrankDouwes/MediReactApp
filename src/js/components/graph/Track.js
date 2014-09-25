/** @jsx React.DOM */
var React 	= require('react');
var Track 	= React.createClass({

	// define expected properties
	propTypes: {
		
		duration: 	React.PropTypes.number.isRequired,
		data: 		React.PropTypes.array.isRequired
	},

	// set the default values
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
  				width: cellWidthPerc + '%',
  				height: '100%',
  				padding: 0,
  				margin: 0,
  				float: 'left'
			};

      		return ( <div style={style} className={"background-" + cell.color}></div>); 
    	}, this);

		return (

			<div className="track row group">
				{cells}
			</div>
		)
	}
});

module.exports = Track;
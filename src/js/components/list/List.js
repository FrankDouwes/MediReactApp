/** @jsx React.DOM */
var React = require('react');
var ListItem = require('../list/ListItem');

var List = React.createClass({
    
  // define expected properties within react class
  propTypes: {
    
    title: React.PropTypes.string.isRequired,
    dataURL: React.PropTypes.string,
    pollInterval: React.PropTypes.number
  },

  // set the default values of the expected properties
  getDefaultProps:function(){
    
    return {  
      title:'test title',
      pollInterval: 1000
    }
  },

  loadDataFromServer: function() {
      
      $.ajax({
          url: this.props.dataURL,
          dataType: 'json',
          success: function(data) {
            this.setState({data: data});
          }.bind(this),
          error: function(xhr, status, err) {
            console.error(this.props.dataURL, status, err.toString());
          }.bind(this)
      });
    },

    // sets up the initial state (initialize)
    getInitialState: function() {
      
      return {data: []};
    },

    // runs when component is rendered
    componentDidMount: function() {
      
      this.loadDataFromServer();
      setInterval(this.loadDataFromServer, this.props.pollInterval);      // timer XXX
    },

  // render the list
  render:function(){

    // for loop
    var listItems = this.state.data.map(function (listItem) {
      
      return ( <ListItem title={listItem.title} session={listItem.session} duration={listItem.duration} />); 
    
    });
      
    
    return (
      
      <div id="list">
        <h2>{this.props.title}</h2>
          <ol id="listItems" className="list-unstyled">
            {listItems}
          </ol>
        </div>
      )
    }

  });

module.exports = List;
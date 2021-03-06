/** @jsx React.DOM */
var React               = require('react');
var Session             = require('../list/ListItemSession');
var Advertisement       = require('../list/ListItemAdvertisement');

var List = React.createClass({
    
  // define expected properties
  propTypes: {
    
    title:          React.PropTypes.string.isRequired,
    dataURL:        React.PropTypes.string,
    pollInterval:   React.PropTypes.number
  },

  // set the default values
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
    
    return {data:[]};
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
      
      if (listItem.type == "session") {

        return ( <Session key={listItem.id} title={listItem.title} session={listItem.session} label={listItem.label} duration={listItem.duration} />); 
      }

      else {

        return ( <Advertisement key={listItem.id} data={listItem.data}/>); 
      }

    });
      
    return (
      <div id="list">
        <h2>{this.props.title}</h2>
          <ol id="listItems" className="list-group">
            {listItems}
          </ol>
        </div>
    )
  }

});

module.exports = List;
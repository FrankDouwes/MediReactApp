// React Class template with inlined documentation from
// http://facebook.github.io/react/docs/component-specs.html
 
var component = React.createClass({
 
  /***** Core Methods *****/
 
  render: function () {
      
      // Returns ReactComponent
 
      // When called, it should examine this.props and this.state and return a single child component.
      // This child component can be either a virtual representation of a native DOM component
      // (such as <div /> or React.DOM.div()) or another composite component that you've defined yourself.
 
      // The render() function should be pure, meaning that it does not modify component state,
      // it returns the same result each time it's invoked, and it does not read from or write
      // to the DOM or otherwise interact with the browser (e.g., by using setTimeout).
 
      // If you need to interact with the browser, perform your work in componentDidMount() or the other lifecycle methods instead.
      // Keeping render() pure makes server rendering more practical and makes components easier to think about.
 
      /*
        // transferPropsTo() will take any props passed to CheckLink
        // and copy them to <a>
        return this.transferPropsTo(<a>{'√ '}{this.props.children}</a>);
      */
 
      /*
          return (
                    <div>
                        <SearchBar
                            filterText={this.state.filterText}
                            inStockOnly={this.state.inStockOnly}
                            onUserInput={this.handleUserInput}
                        />
                        <ProductTable
                            products={this.props.products}
                            filterText={this.state.filterText}
                            inStockOnly={this.state.inStockOnly}
                        />
                    </div>
                  );
 
 
      */
  },
 
  getInitialState: function () {
    // Returns Object
 
    // Invoked once before the component is mounted. The return value will be used as the initial value of this.state.
  },
 
  getDefaultProps: function () {
    // Returns Object
 
    // Invoked once when the component is mounted. Values in the mapping will be set on this.props if that prop is not specified by the parent component (i.e. using an in check).
    // This method is invoked before getInitialState and therefore cannot rely on this.state or use this.setState.
  },
 
  propTypes: {
      // http://facebook.github.io/react/docs/reusable-components.html
  },
 
  mixins: [ ], // http://facebook.github.io/react/docs/reusable-components.html
 
  statics: {
 
    // The statics object allows you to define static methods that can be called on the component class. For example:
    /*
        var MyComponent = React.createClass({
          statics: {
            customMethod: function(foo) {
              return foo === 'bar';
            }
          },
          render: function() {
          }
        });
 
        MyComponent.customMethod('bar');  // true
    */
 
  },
 
  /***** Lifecycle Methods *****/
 
  componentWillMount: function () {
      // Invoked once, immediately before the initial rendering occurs.
      // If you call setState within this method, render() will see the updated state
      // and will be executed only once despite the state change.
  },
 
  componentDidMount: function () {
    // Invoked immediately after rendering occurs.
    // At this point in the lifecycle, the component has a DOM representation
    // which you can access via this.getDOMNode().
 
    // If you want to integrate with other JavaScript frameworks, set timers using
    // setTimeout or setInterval, or send AJAX requests, perform those operations in this method.
  },
 
  componentWillReceiveProps: function(nextProps) {
    // Invoked when a component is receiving new props.
    // This method is not called for the initial render.
 
    // Use this as an opportunity to react to a prop transition before render() is called
    // by updating the state using this.setState(). The old props can be accessed via this.props.
    // Calling this.setState() within this function will not trigger an additional render.
 
    /*this.setState({
      likesIncreasing: nextProps.likeCount > this.props.likeCount
    }); */
  },
 
  shouldComponentUpdate: function(nextProps, nextStat) {
    // Invoked before rendering when new props or state are being received.
    // This method is not called for the initial render or when forceUpdate is used.
 
    // Use this as an opportunity to return false when you're certain that the transition to
    // the new props and state will not require a component update.
 
    /*
      return !equal(nextProps, this.props) || !equal(nextState, this.state);
    */
 
    // If shouldComponentUpdate returns false, then render() will be completely
    // skipped until the next state change.
    // (In addition, componentWillUpdate and componentDidUpdate will not be called.)
  },
 
  componentWillUpdate: function (nextProps, nextState) {
    // Invoked immediately before rendering when new props or state are being received.
    // This method is not called for the initial render.
 
    // Use this as an opportunity to perform preparation before an update occurs.
 
    // You cannot use this.setState() in this method.
    // If you need to update state in response to a prop change,
    // use componentWillReceiveProps instead.
  },
 
  componentDidUpdate: function (prevProps, prevState) {
    // Invoked immediately after updating occurs. This method is not called for the initial render.
 
    // Use this as an opportunity to operate on the DOM when the component has been updated.
  },
 
  componentWillUnmount: function () {
     // Invoked immediately before a component is unmounted from the DOM.
 
     // Perform any necessary cleanup in this method, such as invalidating timers or cleaning
     // up any DOM elements that were created in componentDidMount.
  }
});
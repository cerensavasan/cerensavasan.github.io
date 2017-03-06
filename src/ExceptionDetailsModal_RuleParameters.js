import React from 'react';

var ExceptionDetailsModal_RuleParameters = React.createClass({
  render: function () {
    return (
      <div className="row" id="ruleparameters_row">
        <div className="col-md-6 col-sm-6 col-xs-6" id="ruleparameters_ruleheader">
          <h3> Rule Parameters in Violation </h3>
        </div>
        <div className="col-md-2 col-sm-2 col-xs-2" id="ruleparameters_dollars">
          <h6>NET {this.props.dollaramount} USD</h6>
        </div>
        <div className="col-md-2 col-sm-2 col-xs-2" id="ruleparameters_button">
          <button className="btn-arrow">VIEW ALL HOLDINGS</button>
        </div>
      </div>
  )}
});

export default ExceptionDetailsModal_RuleParameters;     


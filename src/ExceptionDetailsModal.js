import React from 'react';
import ExceptionDetailsModal_ActionsForm from './ExceptionDetailsModal_ActionsForm';
import ExceptionDetailsModal_RuleParameters from './ExceptionDetailsModal_RuleParameters';

var ExceptionDetailsModal = React.createClass({
  render: function () {
    return (
      <div className="modal fade" id="myModal" tabIndex="0" role="dialog" aria-labelledby="modalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <button type="button" className="close" data-dismiss="modal"><span aria-hidden="true">×</span><span className="sr-only">Close</span></button>
              <h3 className="modal-title" id="lineModalLabel">Exception Details</h3>
            </div>
            <div className="modal-body">  
              <div className="container-fluid">
                <div className="row" id="exceptiondetailsmodal_row">
                    <div className="col-md-8 col-sm-8 col-xs-8" id="ExceptionDetails_ruleheader">
                      <div className="container-fluid">
                        <div className="row">
                          <div className="col-md-5 col-sm-5 col-xs-5" id="ruleshortname_col">
                            <h6>Rule Short Name</h6>
                            <img src="./images/redbreach_small.png" alt="Breach Icon" id="ExceptionDetails_breachIcon"/><p>10% Investment in Spanish Securities</p>
                          </div>
                          <div className="col-md-1 col-sm-1 col-xs-1">
                            <h6>Impact</h6>
                            <p>13.28%</p>
                          </div>  
                          <div className="col-md-1 col-sm-1 col-xs-1" id="ExceptionDetails_country">
                            <h6>Country</h6>
                            <p>Spain</p>
                          </div>
                        </div>
                        <ExceptionDetailsModal_RuleParameters dollaramount="53,000,000.00"/>
                      </div>
                    </div>  
                    <div className="col-md-4 col-sm-4 col-xs-4" id="ActionsContainer">
                        <h3> Actions </h3>
                        <ExceptionDetailsModal_ActionsForm /> 
                        <button className='btn-primary' id='cancelButtonActionsForm'>CANCEL</button>
                        <button className='btn-primary' id='applyButtonActionsForm'>APPLY</button>
                    </div>    
                </div>
            </div>
            </div>
            <div className="modal-footer">
              <div className="btn-group btn-group-justified" role="group" aria-label="group button">
              <div className="btn-group" role="group">
              <button type="button" className="btn btn-default" data-dismiss="modal"  role="button">Close</button>
            </div>
            <div className="btn-group btn-delete hidden" role="group">
              <button type="button" id="delImage" className="btn btn-default btn-hover-red" data-dismiss="modal"  role="button">Delete</button>
            </div>
            <div className="btn-group" role="group">
              <button type="button" id="saveImage" className="btn btn-default btn-hover-green" data-action="save" role="button">Save</button>
            </div>
          </div>
        </div>
      </div>
  </div>
</div>
  )}
});


export default ExceptionDetailsModal;     


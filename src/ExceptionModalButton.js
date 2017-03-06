import React from 'react';
import ExceptionDetailsModal from './ExceptionDetailsModal';

var ExceptionModalButton = React.createClass({
  showModal: function() {
    console.log("showmodal clicked");
  },
  render : function(){
    return (
      <div>
        <button className="btn btn-default" data-toggle="modal" data-target="#myModal">
            Show Modal
        </button>
        <ExceptionDetailsModal ref="modal"/>
      </div>
    );
  }
});

export default ExceptionModalButton;
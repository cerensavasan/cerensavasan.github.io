import React from 'react';

class ReportsPanel extends React.Component {
	
	constructor() {
    super();
    this.state = {
      count: 0,
      };
  	}

	render(){
	return (
		<div className="reportPanel">
			<h3 id="reportPanelHeader">Reports</h3>
  			<div className="reportImages">
  				<div className="setReport">
  				<img src={this.props.image1} alt="Avatar" className="reportPanelIcon img-circle" data-toggle="modal" data-target="#myModal"/>
  				<h4 className="reportPanelH"><b>204</b></h4> 
  				<p className="reportPanelP">Scheduled Reports</p>
  				</div>
  				<div className="setReport">
  				<img src={this.props.image2} alt="Avatar" className="reportPanelIcon img-circle"/>
  				<h4 className="reportPanelH"><b>3</b></h4> 
  				<p className="reportPanelP">Reports Failed</p>
  				</div>
  				<div className="setReport">
  				<img src={this.props.image3} alt="Avatar" className="reportPanelIcon img-circle"/>
  				<h4 className="reportPanelH"><b>1</b></h4> 
  				<p className="reportPanelP">Client Request</p>
  				</div>
  			</div>
  			<div className="buttonContainer">
  				<button className='btn-default reportPanelButton'>VIEW SCHEDULED REPORTS</button>
  				<button className='btn-default reportPanelButton'>CREATE CUSTOM REPORT</button>
			</div>
     	</div>);
	}
}

export default ReportsPanel;
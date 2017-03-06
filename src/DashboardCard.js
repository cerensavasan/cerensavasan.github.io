import React from 'react';

class DashboardCard extends React.Component {
	
	constructor() {
    super();
    this.state = {
      count: 0,
      };
  	}

	render(){
	return (
		<div className="card">
			<div className='circleBorder'><img src={this.props.SourceOfImage} alt="Avatar" className="cardIcon img-circle"/></div>
  			<div className="cardTextContainer">
    			<h4 className='cardHeaderInDash'><b>{this.props.NumberOf}</b></h4> 
    			<p className='cardOptionNameInDash'>{this.props.OptionName}</p> 
  			</div>
		</div>
		);
	}
}

/*
box-shadow: 0 0 8px rgba(0, 0, 0, .8);
-webkit-box-shadow: 0 0 8px rgba(0, 0, 0, .8);
-moz-box-shadow: 0 0 8px rgba(0, 0, 0, .8);
*/

export default DashboardCard;
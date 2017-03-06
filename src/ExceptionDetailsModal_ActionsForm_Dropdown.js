import React from 'react';

class ExceptionDetailsModal_ActionsForm_Dropdown extends React.Component {

	constructor() {
    super();
    this.state = {
      count: 0,
      };
  	}

	render(){
        return (
            <div className="selectorInActionForm">
                <label>{this.props.label}</label>
                <br/>
                <select className="form-control">
                    <option>         </option> 
                    <option>{this.props.option1}</option>
                    <option>{this.props.option2}</option>
                    <option>{this.props.option3}</option>
                    <option>{this.props.option4}</option>
                </select>
            </div>
		);
	}
}

export default ExceptionDetailsModal_ActionsForm_Dropdown;
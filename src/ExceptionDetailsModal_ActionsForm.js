import React from 'react';
import ExceptionDetailsModal_ActionsForm_Dropdown from './ExceptionDetailsModal_ActionsForm_Dropdown';

class ExceptionDetailsModal_ActionsForm extends React.Component {

	constructor() {
    super();
    this.state = {
      count: 0,
      };
  	}

	render(){
	return (
        <div className="form-group">
            <ExceptionDetailsModal_ActionsForm_Dropdown selectNum="sel1" label="Assign" option1="Officer 1" option2="Officer 2" option3="Officer 3" option4="Officer 4"/>
            <ExceptionDetailsModal_ActionsForm_Dropdown selectNum="sel2" label="Status" option1="Ready for Second Review" option2="Ready for First Review" option3="Active Breach" option4="Passive Breach"/>
            <ExceptionDetailsModal_ActionsForm_Dropdown selectNum="sel3" label="Recommended Action" option1="Officer 1" option2="Officer 2" option3="Officer 3" option4="Officer 4"/>



            <ExceptionDetailsModal_ActionsForm_Dropdown selectNum="sel6" label="Attach Document" option1="Officer 1" option2="Officer 2" option3="Officer 3" option4="Officer 4"/>
            <label>Export</label>
            <br />
            <label className="checkbox-inline"><input type="checkbox" value=""/>PDF</label>
			<label className="checkbox-inline"><input type="checkbox" value=""/>Excel</label>
			<label className="checkbox-inline"><input type="checkbox" value=""/>Email</label>
        </div>
		);
	}
}

export default ExceptionDetailsModal_ActionsForm;
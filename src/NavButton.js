import React from 'react';

class NavButton extends React.Component {
	
	constructor() {
    super();
    this.state = {name: "undefinedfornow"};
    this.handleClick = this.handleClick.bind(this);
  }

  	handleClick() {
  		if(this.props.name == ('Dashboard')){
  			console.log("Dashboard clicked");
  		} else if(this.props.name == ('Rules')) {
  			console.log("Rules clicked");
  		} else if(this.props.name == ('Reports')){
  			console.log("Reports clicked");
  		} else {
  			console.log("What the hell are you clicking??");
  		}
		
  	}

  	componentDidMount() {
  		this.setState({name: this.props.name});
  	}

	render(){
		return (
			<a onClick={this.handleClick}>{this.props.name}</a>
		);
	}
}

export default NavButton;                 
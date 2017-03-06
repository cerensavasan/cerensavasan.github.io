import React, {Component, PropTypes} from 'react';
import {VerticalLayout, FlexPanel, FixedPanel} from '../index';
import {Nav, NavItem} from 'react-bootstrap';

const containerStyle = {top: 0, bottom: 0, left: 0, right: 0, position: 'absolute'};

export default class TabLayout extends Component {
  static propTypes = {
    tabComponents: PropTypes.arrayOf(PropTypes.shape(
      {label: PropTypes.string, component: PropTypes.func, closable: PropTypes.bool})).isRequired,
    selectedIndex: PropTypes.number,
    removeTab: PropTypes.func
  };

  static defaultProps = {
    selectedIndex: 0
  };

  constructor(props) {
    super(props);
    const {selectedIndex, tabComponents} = this.props;
    this.state = {tabKey: selectedIndex, tabComponents};
  }

  componentWillReceiveProps(nextProps) {
    const {selectedIndex, tabComponents} = nextProps;
    if (selectedIndex !== this.props.selectedIndex) {
      this.setState({tabKey: selectedIndex});
    }

    if (tabComponents !== this.props.tabComponents) {
      const nextTabKey = Math.min(this.state.tabKey, tabComponents.length - 1);
      this.setState({tabComponents, tabKey: nextTabKey});
    }
  }

  handleTabSelect = (tabKey) => {
    this.setState({tabKey});
  }

  closeTab = (index, e) => {
    e.preventDefault();
    e.stopPropagation();
    this.props.removeTab(index);
  }

  getTabs() {
    const {tabComponents} = this.state;
    return tabComponents.map((tab, index) => {
      const label = tab.closable && tabComponents.length > 1 && this.props.removeTab ?
        (
          <span>
            <span className='cdtTabCloseBtn' title='Close tab.'
              fa='close' onClick={this.closeTab.bind(null, index)}>x</span>
            <span>{tab.label}</span>
          </span>
        ) : <span>{tab.label}</span>;
      return (<NavItem key={tab.label} eventKey={index} >
      {label}
      </NavItem>);
    });
  }

  getComponents() {
    const {tabKey, tabComponents} = this.state;
    return tabComponents.map((tab, index) => {
      const vis = tabKey === index ? 'visible' : 'hidden';
      return (
        <div style={{...containerStyle, visibility: vis}}
          key={tab.label}><tab.component /></div>);
    });
  }

  render() {
    return (
      <div style={containerStyle} >
        <VerticalLayout>
          <FixedPanel>
            <Nav bsStyle='tabs' animation={false}
              activeKey={this.state.tabKey} onSelect={this.handleTabSelect}>
              {this.getTabs()}
            </Nav>
          </FixedPanel>
          <FlexPanel>{this.getComponents()}</FlexPanel>
        </VerticalLayout>
      </div>
    );
  }
}

import React, {PropTypes, Component} from 'react';

export default class FixedPanel extends Component {
  static propTypes = {
    children: PropTypes.node,
    style: PropTypes.object,
    height: PropTypes.number,
    width: PropTypes.number,
    className: PropTypes.string
  };

  render() {
    const {style, height, width, className} = this.props;

    const layoutStyle = {...style};

    if (width) {
      layoutStyle.width = width;
    }

    if (height) {
      layoutStyle.height = height;
    }

    let styleNames = 'flexNav';
    if (className) {
      styleNames = styleNames + ' ' + className;
    }

    return (
      <div className={styleNames} style={layoutStyle}>
       {this.props.children}
      </div>
    );
  }
}

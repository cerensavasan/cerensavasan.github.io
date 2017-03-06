import React, {PropTypes, Component} from 'react';
import SplitPane from 'react-split-pane';

export default class FlexPanel extends Component {
  static propTypes = {
    children: PropTypes.node,
    split: PropTypes.oneOf(['horizontal', 'vertical']),
    defaultSize: PropTypes.number,
    maxSize: PropTypes.number,
    minSize: PropTypes.number,
    primary: PropTypes.oneOf(['first', 'second']),
  };

  static defaultProps = {
    primary: 'first',
    defaultSize: 400,
    minSize: 100
  };

  getContent() {
    const {split, children, defaultSize, maxSize, minSize, primary} = this.props;
    if (split) {
      return (
        <SplitPane split={split} minSize={minSize}
          defaultSize={defaultSize} primary={primary} maxSize={maxSize}>
          {children}
        </SplitPane>
      );
    }
    return children;
  }

  render() {
    const className = 'flexMain';

    return (
      <div {...this.props} className={className}>
       {this.getContent()}
      </div>
    );
  }
}

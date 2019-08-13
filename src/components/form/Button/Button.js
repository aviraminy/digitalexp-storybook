import React, { Component }  from 'react';
import { node, oneOf, func } from 'prop-types';
import './_button.scss';

class Button extends Component {

    static propTypes = {
        /** Underline of Button content */
        type: oneOf(['primary', 'secondary']),
        /** Click event handler  */
        onClick: func,
        /** String based node */
        children: node,

      };

    static defaultProps = {
        type: 'primary',
      };

    render() {
        const {
          children,
          onClick,
          type
        } = this.props;
        return (
            <button className={"sb-button-" + type} onClick={onClick} >
                <span className="sb-button-text">{children}</span>
            </button>
        );    
    }
}

export default Button;

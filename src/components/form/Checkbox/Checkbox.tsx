import React, { Component } from 'react'; // let's also import Component
import './Checkbox.scss';

interface Props {
    text?: string;
}

export default class Checkbox extends Component<Props> {
    static defaultProps: Props = {
        text: 'checked'
      };
    render() {
        const {
            text
        } = this.props;
        return (
            <div><input type="checkbox"></input><span>{text}</span></div>
        );    
    }
}

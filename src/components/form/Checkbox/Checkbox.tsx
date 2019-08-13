import React, { Component } from 'react'; 
import './Checkbox.scss';

interface Props {
    //this is text that will appear next to checkbix
    text: string;
    // svg child element that represents the checksigng
    checkSignPath?: string;
    disabled?: boolean;
    checked?: boolean;
    readonly?: boolean;
}

export default class Checkbox extends Component<Props> {
    static defaultProps: Props = {
        text: "default text",
        checkSignPath: '1,5 6,9 14,1',
        disabled: false,
        checked: false,
        readonly: false,
    };
    render() {
        const {
            text,
            checkSignPath,
            disabled,
            checked,
            readonly
        } = this.props;
        const inputProps =   {
            'disabled': disabled ? true : false,
            className: readonly ? 'readonly' : '',
            defaultChecked: checked ? true : false
        };
        
        return (
            <div className="sb-checkbox">
                <label className="sb-form__checkbox">
                    <input type="checkbox" {...inputProps}></input>
                    <span className="sb-checkbox__design">
                        <svg className="sb-checkmark"><polyline points={checkSignPath}></polyline></svg>
                    </span>
                    <span className="sb-checkbox__text">{text}</span>
                </label>
            </div>
        );    
    }
}

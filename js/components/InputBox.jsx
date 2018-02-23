const React = require( 'react' );

const { Button,
    TextControl
} = wp.components;
const {Component} = wp.element;
const  { __ } = wp.i18n;

class InputBox extends React.Component {
    constructor() {
        super( ...arguments );

        this.state = { searchValue: this.props.searchName };

        this.onChange = this.onChange.bind( this );
        this.onButtonClick = this.onButtonClick.bind( this );
    }

    onButtonClick() {
        this.props.onClick(this.state.searchValue);
    }

    onChange( newValue ) {
        this.setState( { searchValue: newValue } );
    }

    render() {
        return (
            <div className="tweeter-handle-div">
                <div className="tweeter-handle-input">
                    <TextControl
                        label={this.props.label }
                        onChange={this.onChange}
                        value={this.state.searchValue}
                    />
                </div>
                <div className="tweeter-handle-button">
                    <Button
                        isPrimary={true}
                        onClick={this.onButtonClick}
                    >{this.props.buttonName}</Button>
                </div>
            </div>
        );
    }
}

export default InputBox;

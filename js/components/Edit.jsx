import InputBox from './InputBox.jsx';
const React = require( 'react' );

var Twitter = require('twitter');

const  { Editable,
    source: { attr, children },
    BlockControls,
    AlignmentToolbar,
    InspectorControls,
    MediaUpload,
    RichText
} = wp.blocks;
const { Button,
    TextControl,
    withAPIData
} = wp.components;
const {Component} = wp.element;
const  { __ } = wp.i18n;

var client = new Twitter({
    consumer_key: 'SYWZf4OBqoETc8hDH4qDENKRl',
    consumer_secret: 'qS1sA9izlrtNcHoG0zFTWxEDwrYgELvR95NrJCJ09MQ4FKNu2E',
    access_token_key: '1286536478-9qgExRuKPtzS5d4CQbz5D8o1cNXXDYKhbs6ULhC',
    access_token_secret: 'cD0c6OSiwO7t3GLpWeiv5XbDZvCNsTpbCvgkB8UcXT5rv'
});

class Edit extends Component {

    constructor() {
        super(...arguments);

        this.state = { isTwitterHandleClick: false };

        this.setTwitterHandle = this.setTwitterHandle.bind( this );
    }

    setTwitterHandle( newHandleName ) {
        var params = {screen_name: 'montu3366'};
        client.get('statuses/user_timeline', params, function(error, tweets, response) {
            console.log("CALL");
            if ( !error ) {
                console.log(tweets);
            }
            else {
                console.log(error);
            }
        });
        // this.props.setAttributes( { twitter_handle_name: newHandleName } );
    }

    render() {
        const {attributes, focus} = this.props;
        const InsCtrl = focus && (
            <InspectorControls key="controls">
                <InputBox
                    label='Enter the Twitter Handle Name'
                    onClick={this.setTwitterHandle}
                    buttonName='Get Tweets'
                    searchName={attributes.twitter_handle_name}
                />
            </InspectorControls>
        );
        return [
            InsCtrl,
            <h1>Hello World</h1>
        ];
    }

}

export default Edit;

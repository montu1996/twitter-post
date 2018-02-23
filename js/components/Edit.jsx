import InputBox from './InputBox.jsx';
import axios from 'axios';

const React = require('react');

const { Editable,
    source: { attr, children },
    BlockControls,
    AlignmentToolbar,
    InspectorControls,
    MediaUpload,
    RichText,
    ColorPalette
} = wp.blocks;
const { Button,
    TextControl,
    withAPIData
} = wp.components;
const { Component } = wp.element;
const { __ } = wp.i18n;

class Edit extends Component {

    constructor() {
        super(...arguments);

        this.state = { isTwitterHandleClick: false };

        this.setTwitterHandle = this.setTwitterHandle.bind(this);
        this.backgroundColorChange = this.backgroundColorChange.bind(this);
        this.backgroundFontColorChange = this.backgroundFontColorChange.bind(this);
    }

    setTwitterHandle(newHandleName) {
        this.props.setAttributes({ twitter_handle_name: newHandleName });
        const props = this.props;
        axios.get(twitter_posts.URL + 'tweets.php', {
            params: {
                screen_name: newHandleName,
                count: 10
            }
        }).then(function (result) {
            // set state with retrieved tweet data
            props.setAttributes({ tweets: result.data });
            
        });
    }

    backgroundColorChange(newColor) {
        this.props.setAttributes({ background_color: newColor });
    }

    backgroundFontColorChange(newColor) {
        this.props.setAttributes({ font_color: newColor });
    }

    render() {
        const { attributes, focus } = this.props;
        const InsCtrl = focus && (
            <InspectorControls key="controls">
                <InputBox
                    label='Twitter Handle Name'
                    onClick={this.setTwitterHandle}
                    buttonName='Get Tweets'
                    searchName={attributes.twitter_handle_name}
                />
                <br />
                <div className={"twitter-handle-backgrounnd"}>
                    <label>{"Select Background Color: "}</label>
                    <br /><br />
                    <ColorPalette
                        onChange={this.backgroundColorChange}
                    />
                </div>
                <br />
                <div className={"twitter-handle-fontcolor"}>
                    <label>{"Select Font Color: "}</label>
                    <br /><br />
                    <ColorPalette
                        onChange={this.backgroundFontColorChange}
                    />
                </div>
            </InspectorControls>
        );
        var styles = {
            backgroundColor: attributes.background_color,
        };
        var textStyle = {
            color: attributes.font_color,
        };
        var slider = '';
        if (attributes.tweets && attributes.tweets.length !== 0) {
            const tweets = attributes.tweets;
            const listTweets = tweets.map((tweet) => {
                return (
                    <li class="slide">
                        <div class="quoteContainer">
                            <p class="quote-phrase" style={textStyle}>{ tweet.text }</p>
                        </div>
                    </li>
                );
            });
            slider =
                <div id="carousel">
                    <div id="buttons">
                        <a id={"prev"} href="#">{'<'}</a>
                    </div>
                    <div id="slides">
                        <ul data-id={attributes.time_stamp}>
                            {listTweets}
                        </ul>
                    </div>
                    <div id="buttons">
                        <a id={"next"} href="#">{'>'}</a>
                    </div>
                </div>
        }
        else if (attributes.twitter_handle_name != '' && attributes.tweets.length === 0) {
            slider = 'No Tweets Found...';
        }
        else {
            slider = 'Enter The Twitter Handle Name....';
        }
        return [
            InsCtrl,
            <div style={styles} className={attributes.twitter_handle_name + "twitter-block"}>
                {slider}
            </div>
        ];
    }

}

export default Edit;

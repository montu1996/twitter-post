const React = require( 'react' );

const {Component} = wp.element;

class Save extends Component {
    constructor() {
        super(...arguments);
    }

    render( { attributes } ) {
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
                            <p class="quote-phrase" style={textStyle}>{tweet.text}</p>
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
        return (
            <div style={styles} className={attributes.twitter_handle_name + "twitter-block"}>
                {slider}
            </div>
        );
    }
}

export default Save;

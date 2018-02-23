import Save from './components/Save.jsx';
import Edit from './components/Edit.jsx';

const  { registerBlockType } = wp.blocks;
const  { __ } = wp.i18n;

registerBlockType(
    'twitter-post/twitter', {
        title: __( 'Twitter Slider', 'twitter-slider' ),
        icon: 'megaphone',
        category: 'widgets',
        keywords: [ __( 'twitter', 'twitter-slider' ), __( 'slider', 'twitter-slider' ) ],
        useOnce: true,
        attributes: {
            tweets: {
                type: 'array',
                default: []
            },
            twitter_handle_name: {
                type: 'string',
                default: ''
            },
            background_color: {
                type: 'string',
                default: '#fffff'
            },
            font_color: {
                type: 'string',
                default: '#000'
            }
        },
        edit: Edit,
        save: Save,
    }
);

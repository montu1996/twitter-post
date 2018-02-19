const React = require( 'react' );

const  { registerBlockType,
    Editable,
    source: { attr, children },
    BlockControls,
    AlignmentToolbar,
    InspectorControls,
    MediaUpload,
    RichText
} = wp.blocks;
const { Button,
    withAPIData
} = wp.components;
const  { __ } = wp.i18n;

class Edit extends React.Component {

    constructor() {
        super(...arguments);
    }

    render() {
        const attributes = this.props.attributes;
    }

}

export default Edit;

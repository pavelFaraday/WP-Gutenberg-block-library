import {useBlockProps} from '@wordpress/block-editor';

export default function Edit(props) {
    const blockProps = useBlockProps();
    return <div {...blockProps}>Clicky button</div>;
}
	

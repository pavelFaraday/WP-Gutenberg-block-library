import {useBlockProps, useInnerBlocksProps} from '@wordpress/block-editor';
import { parseValue } from '../utils/passValue';
import './editor.scss';

export default function Edit(props) {
    const blockGap = parseValue(props.attributes.style?.spacing?.blockGap || "");
    const blockProps = useBlockProps({
        style: {gap: blockGap }
    });
    const innerBlocksProps = useInnerBlocksProps(blockProps, {
        template: [['blockylicious/clicky-button', {}]],
        allowedBlocks: ['blockylicious/clicky-button']
    });

    return  <div {...innerBlocksProps} /> 
}
	

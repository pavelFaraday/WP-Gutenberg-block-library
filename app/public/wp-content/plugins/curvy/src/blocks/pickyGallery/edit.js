import {useBlockProps, BlockControls, useInnerBlocksProps} from '@wordpress/block-editor';
import {ToolbarGroup, ToolbarButton, Icon} from '@wordpress/components';
import {useState} from '@wordpress/element';
import {useSelect} from '@wordpress/data';
import {__} from '@wordpress/i18n';
import metadata from './block.json';
import './editor.scss';
import { ImageThumbnail } from '../../components/imageThumbnail';

export default function Edit(props) {
    const blockProps = useBlockProps();
    const innerBlocksProps = useInnerBlocksProps({
        className: "piccy-gallery-inner-blocks"
    },{
        allowedBlocks: ['blockylicious/piccy-image']
    });
    const [editMode, setEditMode] = useState(true);
    const innerBlocks = useSelect((select)=> {
        const {getBlocksByClientId} = select("core/block-editor");
        const block = getBlocksByClientId(props.clientId)?.[0];
        return block?.innerBlocks;
    }, [props.clientId]);

    return (
            <>
                <div {...blockProps}>
                    {!!editMode && (
                        <div className='edit-mode'>
                            <span className='piccy-label'>
                                {__("Piccy Image Gallery", metadata.textdomain)}
                            </span>
                            <div {...innerBlocksProps} /> 
                        </div>
                    )}
                    {!editMode && <div>{(innerBlocks || []).map(innerBlock => (
                            <ImageThumbnail key={innerBlock.clientId} imageId={innerBlock.attributes.imageId} />
                    ))}</div>}
                </div>;
                <BlockControls>
                    <ToolbarGroup>
                        <ToolbarButton 
                            icon={editMode ? <Icon icon="welcome-view-site" /> :  <Icon icon="edit" />} 
                            label={editMode ? __("Preview gallery", metadata.textdomain) : __("Edit gallery", metadata.textdomain)}
                            onClick={() => {
                                setEditMode(prevState => !prevState);
                            }}
                        />
                    </ToolbarGroup>
                </BlockControls>
            </>
        );
    }
	

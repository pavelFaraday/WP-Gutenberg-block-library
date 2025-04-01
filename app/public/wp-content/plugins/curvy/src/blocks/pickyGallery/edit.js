import {useBlockProps, BlockControls, useInnerBlocksProps} from '@wordpress/block-editor';
import {ToolbarGroup, ToolbarButton, Icon} from '@wordpress/components';
import {useState} from '@wordpress/element';
import {__} from '@wordpress/i18n';
import metadata from './block.json';
import './editor.scss';

export default function Edit(props) {
    const blockProps = useBlockProps();
    const innerBlocksProps = useInnerBlocksProps({
        className: "piccy-gallery-inner-blocks"
    },{
        allowedBlocks: ['blockylicious/piccy-image']
    });
    const [editMode, setEditMode] = useState(true);

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
                    {!editMode && <div>Preview Mode</div>}
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
	

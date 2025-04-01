import {useBlockProps, BlockControls} from '@wordpress/block-editor';
import {ToolbarGroup, ToolbarButton, Icon} from '@wordpress/components';
import {useState} from '@wordpress/element';
import {__} from '@wordpress/i18n';
import metadata from './block.json';

export default function Edit(props) {
    const blockProps = useBlockProps();
    const [editMode, setEditMode] = useState(true);

    return (
            <>
                <div {...blockProps}> a message </div>;
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
	

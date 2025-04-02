import {useBlockProps, MediaUploadCheck, MediaUpload} from '@wordpress/block-editor';
import {useSelect} from '@wordpress/data';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faPanorama} from "@fortawesome/free-solid-svg-icons";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
config.autoAddCss = false;

import {__} from '@wordpress/i18n';
import metadata from './block.json';
import './editor.scss';

export default function Edit(props) {
    const blockProps = useBlockProps();
    const image = useSelect((select) => {
        const data = select("core").getEntityRecord("postType", "attachment", props.attributes.imageId);
        return data;
    }, [props.attributes.imageId])
    const imageSelected = !!props.attributes.imageId && !!image?.source_url;

    // console.log({image});

    return <div {...blockProps}>
        {imageSelected &&
            <img style={{height: 150, width: "100%", objectFit: "cover", display: "block"}} src={image.source_url} />
        }
        {!imageSelected && (
            <div style={{height: 150, width: "100%", background: "white", display: "flex"}}>
                <FontAwesomeIcon icon={faPanorama} style={{margin: "auto"}} />
            </div>
        )}
        <MediaUploadCheck>
            <MediaUpload 
                allowedTypes={["image"]}
                render={({open}) => {
                    return (
                        <button className='media-select' onClick={open}>
                            {imageSelected ? __("Replace an Image", metadata.textdomain) :  __("Select an Image", metadata.textdomain)}
                        </button>
                    )
                }}
                value={props.attributes.imageId}
                onSelect={(item) => {
                    props.setAttributes({
                        imageId: item.id
                    })
                }}
             />
        </MediaUploadCheck>
    </div>;
}
	

import { __ } from '@wordpress/i18n';
import metadata from '../block.json';
import { 
	ColorPalette,
} from '@wordpress/block-editor';

import { 
	ToggleControl, 
	HorizontalRule,
	RangeControl
} from '@wordpress/components';

export const BottomCurveSettings = (props) => {
    return (
        <>
            <HorizontalRule />
            <RangeControl 
                min={100} 
                max={300}
                value={props.attributes.bottomWidth || 100}
                onChange={(newValue) => {
                        props.setAttributes({
                            bottomWidth: parseInt(newValue),
                    })
                }}
                label={__("Width", metadata.textdomain)} 	
            />
            <RangeControl 
                min={0} 
                max={200}
                value={props.attributes.bottomHeight}
                onChange={(newValue) => {
                        props.setAttributes({
                            bottomHeight: parseInt(newValue),
                    })
                }}
                label={__("Height", metadata.textdomain)} 	
            />
            <HorizontalRule />
            <div style={{ display: "flex" }}>
                <ToggleControl onChange={(isChecked) => {
                    props.setAttributes({
                        bottomFlipX: isChecked,
                    })
                }} checked={props.attributes.bottomFlipX}/>
                <span>{__("Flip Horizontally", metadata.textdomain)}</span>
            </div>
            <div style={{ display: "flex" }}>
                <ToggleControl onChange={(isChecked) => {
                    props.setAttributes({
                        bottomFlipY: isChecked,
                    })
                }} checked={props.attributes.bottomFlipY}/>
                <span>{__("Flip Vertically", metadata.textdomain)}</span>
            </div>
            <HorizontalRule />
            <div>
                <label>{__("Curvy Color", metadata.textdomain)}</label>
                <ColorPalette value={props.attributes.bottomColor} onChange={(newValue) => {
                    props.setAttributes({
                        bottomColor: newValue,
                    })
                }} />
            </div>
        </>
    )
}
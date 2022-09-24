import React, {FC} from "react";
import CallMissedOutgoingIcon from '@mui/icons-material/CallMissedOutgoing';
import {Styles} from "../../types";

export interface GoIconProps {
    sx?: Styles,
    fontSize: 'inherit' | 'large' | 'medium' | 'small'
}

export const GoIcon: FC<GoIconProps> = (props) => {
    const {
        sx,
        fontSize
    } = props

    return (
        <CallMissedOutgoingIcon sx={sx} fontSize={fontSize}/>
    )
}

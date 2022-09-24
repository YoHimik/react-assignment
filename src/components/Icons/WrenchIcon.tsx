import React, {FC} from "react";
import BuildIcon from '@mui/icons-material/Build';
import {Styles} from "../../types";

export interface WrenchIconProps {
    sx?: Styles
}

export const WrenchIcon: FC<WrenchIconProps> = (props) => {
    const {
        sx
    } = props

    return (
        <BuildIcon sx={sx}/>
    )
}

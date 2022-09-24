import React, {FC} from "react";
import MoreVertIcon from '@mui/icons-material/MoreVert';
import {Styles} from "../../types";

export interface OptionsProps {
    sx?: Styles
}

export const OptionsIcon: FC<OptionsProps> = (props) => {
    const {
        sx
    } = props

    return (
        <MoreVertIcon sx={sx}/>
    )
}

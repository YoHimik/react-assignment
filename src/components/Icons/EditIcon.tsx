import React, {FC} from "react";
import Edit from '@mui/icons-material/Edit';
import {Styles} from "../../types";

export interface EditIconProps {
    sx?: Styles,
    fontSize: 'inherit' | 'large' | 'medium' | 'small'
}

export const EditIcon: FC<EditIconProps> = (props) => {
    const {
        sx,
        fontSize
    } = props

    return (
        <Edit sx={sx} fontSize={fontSize}/>
    )
}

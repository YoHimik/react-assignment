import React, {FC} from "react";
import Delete from '@mui/icons-material/Delete';
import {Styles} from "../../types";

export interface DeleteIconProps {
    sx?: Styles,
    fontSize: 'inherit' | 'large' | 'medium' | 'small'
}

export const DeleteIcon: FC<DeleteIconProps> = (props) => {
    const {
        sx,
        fontSize
    } = props

    return (
        <Delete sx={sx} fontSize={fontSize}/>
    )
}

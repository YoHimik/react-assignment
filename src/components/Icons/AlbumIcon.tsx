import React, {FC} from "react";
import Album from '@mui/icons-material/Album';
import {Styles} from "../../types";

export interface AlbumIconProps {
    sx?: Styles
}

export const AlbumIcon: FC<AlbumIconProps> = (props) => {
    const {
        sx
    } = props

    return (
        <Album sx={sx}/>
    )
}

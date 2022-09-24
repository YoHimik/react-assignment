import React, {FC} from "react";
import PeopleOutlineIcon from '@mui/icons-material/PeopleOutline';
import {Styles} from "../../types";

export interface PeopleIconProps {
    sx?: Styles
}

export const PeopleIcon: FC<PeopleIconProps> = (props) => {
    const {
        sx
    } = props

    return (
        <PeopleOutlineIcon sx={sx}/>
    )
}

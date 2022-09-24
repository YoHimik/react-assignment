import React, {FC} from "react";
import Animation from '@mui/icons-material/Animation';
import {Styles} from "../../types";

export interface AnimationIconProps {
    sx?: Styles
}

export const AnimationIcon: FC<AnimationIconProps> = (props) => {
    const {
        sx
    } = props

    return (
        <Animation sx={sx}/>
    )
}

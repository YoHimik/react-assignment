import React, {FC} from "react";
import HealthAndSafetyIcon from '@mui/icons-material/HealthAndSafety';
import {Styles} from "../../types";

export interface HealthSafetyIconProps {
    sx?: Styles
}

export const HealthSafetyIcon: FC<HealthSafetyIconProps> = (props) => {
    const {
        sx
    } = props

    return (
        <HealthAndSafetyIcon sx={sx}/>
    )
}

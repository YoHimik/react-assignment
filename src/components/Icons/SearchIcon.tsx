import React, {FC} from "react";
import Search from '@mui/icons-material/Search';
import {Styles} from "../../types";

export interface SearchIconProps {
    sx?: Styles
}

export const SearchIcon: FC<SearchIconProps> = (props) => {
    const {
        sx
    } = props

    return (
        <Search sx={sx}/>
    )
}

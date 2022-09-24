import React, {FC, PropsWithChildren} from 'react';
import {ListItemIcon as MUIListItemIcon} from '@mui/material';
import type {Styles} from "../../types";

export interface ListItemIconProps {
    sx?: Styles,
}

export const ListItemIcon: FC<PropsWithChildren<ListItemIconProps>> = (props) => {
    const {
        sx,
        children,
    } = props;

    return (
        <MUIListItemIcon
            sx={sx}
        >
            {children}
        </MUIListItemIcon>
    );
};


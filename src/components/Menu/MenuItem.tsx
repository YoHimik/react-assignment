import React, {FC, MouseEventHandler, PropsWithChildren} from 'react';
import {MenuItem as MUIMenuItem} from '@mui/material';
import type {Styles} from "../../types";

export interface MenuItemProps {
    sx?: Styles,
    onClick: MouseEventHandler
}

export const MenuItem: FC<PropsWithChildren<MenuItemProps>> = (props) => {
    const {
        sx,
        children,
        onClick
    } = props;

    return (
        <MUIMenuItem
            sx={sx}
            onClick={onClick}
        >
            {children}
        </MUIMenuItem>
    );
};


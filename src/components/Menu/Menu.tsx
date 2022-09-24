import React, {FC, PropsWithChildren} from 'react';
import {Menu as MUIMenu}  from '@mui/material';
import type {Styles} from "../../types";

export interface MenuProps {
    sx?: Styles,
    visible?: boolean
    onClose?: () => void
    anchorEl?: Element
}

export const Menu: FC<PropsWithChildren<MenuProps>> = (props) => {
    const {
        sx,
        children,
        visible = false,
        onClose,
        anchorEl
    } = props;

    return (
        <MUIMenu
            sx={sx}
            open={visible}
            anchorEl={anchorEl}
            onClose={onClose}
        >
            {children}
        </MUIMenu>
    );
};


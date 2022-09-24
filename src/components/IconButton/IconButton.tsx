import React, {FC, MouseEventHandler, PropsWithChildren} from 'react';
import {IconButton as MUIIconButton} from '@mui/material';
import type {Styles} from "../../types";

export interface IconButtonProps {
    sx?: Styles,
    disabled?: boolean,
    onClick?: MouseEventHandler,
}
export const IconButton: FC<PropsWithChildren<IconButtonProps>> = (props) => {
    const {
        sx,
        disabled,
        onClick,
        children,
    } = props;

    return (
        <MUIIconButton
            sx={sx}
            onClick={onClick}
            disabled={disabled}
        >
            {children}
        </MUIIconButton>
    );
};


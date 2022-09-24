import React, {FC, PropsWithChildren} from 'react';
import {Popover as MUIPopover}  from '@mui/material';
import type {Styles} from "../../types";

export interface PopoverProps {
    sx?: Styles,
    visible?: boolean
    onClose?: () => void
    anchorEl?: Element
}

export const Popover: FC<PropsWithChildren<PopoverProps>> = (props) => {
    const {
        sx,
        visible = false,
        onClose,
        children,
        anchorEl
    } = props;

    return (
        <MUIPopover
            sx={{
                pointerEvents: 'none',
                ...(sx || {})
            }}
            open={visible}
            anchorEl={anchorEl}
            anchorOrigin={{
                vertical: 'top',
                horizontal: 'left',
            }}
            transformOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
            }}
            onClose={onClose}
            disableRestoreFocus
        >
            {children}
        </MUIPopover>
    );
};


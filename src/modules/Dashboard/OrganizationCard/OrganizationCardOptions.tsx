import React, {FC, useCallback} from 'react'
import {
    Text,
    usePopover,
    IconButton,
    OptionsIcon,
    Menu,
    MenuItem,
    ListItemIcon,
    DeleteIcon,
    EditIcon,
    GoIcon
} from "../../../components";
import {useTranslate} from "../../../hooks";

export interface OrganizationCardOptionsProps {
    onDelete?: () => void
}

export const OrganizationCardOptions: FC<OrganizationCardOptionsProps> = (props) => {
    const {
        onDelete,
    } = props

    const translates = useTranslate()

    const [buttonRef, isMenuVisible, openMenu, closeMenu] = usePopover<HTMLButtonElement>()

    const handleDelete = useCallback(() => {
        closeMenu()
        if (onDelete) {
            onDelete()
        }
    }, [onDelete])

    return (
        <>
            <IconButton onClick={openMenu}>
                <OptionsIcon/>
            </IconButton>
            <Menu visible={isMenuVisible} anchorEl={buttonRef.current} onClose={closeMenu}>
                <MenuItem onClick={closeMenu}>
                    <ListItemIcon>
                        <EditIcon fontSize="small"/>
                    </ListItemIcon>
                    <Text>{translates.dashboard.organizationCard.editLabel}</Text>
                </MenuItem>
                <MenuItem onClick={closeMenu}>
                    <ListItemIcon>
                        <GoIcon fontSize="small"/>
                    </ListItemIcon>
                    <Text>{translates.dashboard.organizationCard.goLabel}</Text>
                </MenuItem>
                <MenuItem onClick={handleDelete}>
                    <ListItemIcon>
                        <DeleteIcon fontSize="small"/>
                    </ListItemIcon>
                    <Text>{translates.dashboard.organizationCard.deleteLabel}</Text>
                </MenuItem>
            </Menu>
        </>
    )
}

import React, {ChangeEvent, FC, useCallback} from 'react'
import {
    Box,
    Input,
    Text,
    Popover,
    usePopover
} from "../../../components";
import {OrganizationLicensesInfo} from "../../../types";
import {useTranslate} from "../../../hooks";

export interface OrganizationCardInfoColumnProps {
    label: string
    inUseLicenses: {
        external: number
        internal: number
    }
    assignedLicenses: number
    onUpdate: (value: OrganizationLicensesInfo) => void
}

const OrganizationCardInfoColumnNameStyles = {
    mb: 1,
    fontWeight: 'bold',
}

const OrganizationCardInfoColumnContainerStyles = {
    display: 'flex',
    alignItems: 'center',
    gap: 1,
}

const OrganizationCardInfoColumnItemStyles = {
    flex: 1,
    input: {
        fontSize: '0.875rem'
    }
}

const PopoverTextStyles = {
    p: 1,
}

export const OrganizationCardInfoColumn: FC<OrganizationCardInfoColumnProps> = (props) => {
    const {
        label,
        inUseLicenses,
        assignedLicenses,
        onUpdate
    } = props

    const translates = useTranslate()

    const inUseLicensesCount = inUseLicenses.external + inUseLicenses.internal
    const inUseLicensesCountLabelColor = inUseLicensesCount > assignedLicenses
        ? 'error.main'
        : 'success.main'

    const onAssignedLicensesCountChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        const value = Number(e.target.value)
        if (isNaN(value)) return

        if (value < 0) {
            onUpdate({
                inUse: inUseLicenses,
                assigned: 0
            })
            return;
        }

        onUpdate({
            inUse: inUseLicenses,
            assigned: Math.round(value)
        })
    }, [onUpdate, inUseLicenses])

    const [textRef, isPopoverVisible, openPopover, closePopover] = usePopover<HTMLSpanElement>()

    return (
        <Box>
            <Text sx={OrganizationCardInfoColumnNameStyles} variant="body2">
                {label}
            </Text>
            <Box sx={OrganizationCardInfoColumnContainerStyles}>
                <Text variant="body2" sx={OrganizationCardInfoColumnItemStyles}>
                    {translates.dashboard.organizationCard.inUseLicensesLabel}
                </Text>
                <Text
                    variant="body2"
                    sx={OrganizationCardInfoColumnItemStyles}
                    color={inUseLicensesCountLabelColor}
                    onMouseEnter={openPopover}
                    onMouseLeave={closePopover}
                >
                    {inUseLicensesCount}
                </Text>
                <Popover
                    anchorEl={textRef.current}
                    visible={isPopoverVisible}
                    onClose={closePopover}
                >
                    <Text sx={PopoverTextStyles} variant="body2">
                        {translates.dashboard.organizationCard.licensesLabel(
                            inUseLicenses.internal,
                            inUseLicenses.external,
                        )}
                    </Text>
                </Popover>
            </Box>
            <Box sx={OrganizationCardInfoColumnContainerStyles}>
                <Text variant="body2" sx={OrganizationCardInfoColumnItemStyles}>
                    {translates.dashboard.organizationCard.assignedLicensesLabel}
                </Text>
                <Input
                    type="number"
                    value={assignedLicenses.toString()}
                    onChange={onAssignedLicensesCountChange}
                    mode="numeric"
                    sx={OrganizationCardInfoColumnItemStyles}
                />
            </Box>
        </Box>
    )
};

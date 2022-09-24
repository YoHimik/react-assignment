import React, {FC, useContext} from 'react'
import {Box, Button, Input, SearchIcon, Text} from "../../components";
import {useTranslate} from "../../hooks";
import {DashboardContext} from "../../contexts";

const HeaderContainerStyles = {
    mb: 3,
    display: 'flex',
    flexDirection: {
        xs: 'column',
        sm: 'row'
    },
    justifyContent: {
        xs: 'flex-start',
        sm: 'space-between'
    },
    gap: {
        xs: 3,
        sm: 0
    },
}

const HeaderPrimaryActionsContainer = {
    display: 'flex',
    alignItems: {
        xs: 'stretch',
        sm: 'center'
    },
    flexDirection: {
        xs: 'column',
        sm: 'row',
    },
    gap: 3,
}

const HeaderTotalOrganizationsLabel = {
    fontWeight: 'bold',
}

export const DashboardHeader: FC = () => {
    const {
        totalOrganizationsCount,
        addOrganization,
        onSearchOrganizationChange
    } = useContext(DashboardContext)

    const translates = useTranslate()

    return (
        <Box sx={HeaderContainerStyles}>
            <Box sx={HeaderPrimaryActionsContainer}>
                <Text sx={HeaderTotalOrganizationsLabel}>
                    {translates.dashboard.totalOrganizationsLabel(totalOrganizationsCount)}
                </Text>
                <Input
                    placeholder={translates.dashboard.searchOrganizationInputPlaceholder}
                    size="small"
                    variant="outlined"
                    onChange={onSearchOrganizationChange}
                    endAdornment={<SearchIcon/>}
                />
            </Box>
            <Button onClick={addOrganization}>
                {translates.dashboard.newOrganizationButtonLabel}
            </Button>
        </Box>
    )
}

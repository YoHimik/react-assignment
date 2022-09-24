import React, {FC, useContext} from 'react'
import {OrganizationCard} from "./OrganizationCard";
import {Box, Text} from "../../components";
import {DashboardContext} from "../../contexts";
import {useTranslate} from '../../hooks';

const OrganizationsListContainer = {
    my: 3,
    display: 'flex',
    flexWrap: 'wrap',
    gap: 5,
}

const NoOrganizationLabelStyles = {
    width: '100%',
    textAlign: 'center',
}

export const OrganizationsList: FC = () => {
    const {
        organizations,
        totalOrganizationsCount,
        updateOrganizationByIndex,
        deleteOrganizationByIndex
    } = useContext(DashboardContext)

    const translates = useTranslate()

    const isNoOrganizations = !totalOrganizationsCount
    const isNoOrganizationMatchFilter = Boolean(totalOrganizationsCount && !organizations.length)

    return (
        <Box sx={OrganizationsListContainer}>
            {organizations.map((o, i) => (
                <OrganizationCard
                    key={o.id}
                    organization={o}
                    onUpdate={(value) => updateOrganizationByIndex(i, value)}
                    onDelete={() => deleteOrganizationByIndex(i)}
                />
            ))}

            {isNoOrganizations && (
                <Text sx={NoOrganizationLabelStyles}>{translates.dashboard.noOrganizationsLabel}</Text>
            )}

            {isNoOrganizationMatchFilter && (
                <Text sx={NoOrganizationLabelStyles}>{translates.dashboard.noSearchOrganizationsLabel}</Text>
            )}
        </Box>
    )
}

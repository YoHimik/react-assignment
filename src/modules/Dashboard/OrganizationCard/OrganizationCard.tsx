import React, {FC} from 'react'
import {
    Box,
    Paper,
    Text,
    Divider,
    HealthSafetyIcon,
    HealthSafetyIconProps,
    PeopleIcon,
    PeopleIconProps,
    AlbumIconProps,
    AlbumIcon,
    AnimationIcon,
    AnimationIconProps,
    WrenchIconProps,
    WrenchIcon,
} from "../../../components";
import {Organization} from "../../../types";
import {useTranslate} from "../../../hooks";
import {OrganizationCardInfoColumn} from './OrganizationCardColumnInfo';
import {OrganizationCardOptions} from "./OrganizationCardOptions";

export interface OrganizationCardProps {
    organization: Organization
    onUpdate: (value: Partial<Organization>) => void
    onDelete: () => void
}

const ContainerStyles = {
    p: 2,
    width: '380px'
}

const HeaderStyles = {
    mb: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 2,
}

const HeaderInfoStyles = {
    display: 'flex',
    alignItems: 'center',
    gap: 2,
}

const OrganizationNameStyles = {
    maxWidth: {
        xs: '140px',
        sm: '200px'
    },
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis',
    fontWeight: 'bold',
}

const LicensesHeaderStyles = {
    mt: 1,
    mb: 2,
    fontWeight: 'bold',
}

const InfoContainerStyles = {
    display: 'flex',
    alignItems: 'center',
    gap: 5
}

const Icons = {
    'health': (props: HealthSafetyIconProps) => <HealthSafetyIcon {...props}/>,
    'people': (props: PeopleIconProps) => <PeopleIcon {...props}/>,
    'album': (props: AlbumIconProps) => <AlbumIcon {...props}/>,
    'animation': (props: AnimationIconProps) => <AnimationIcon {...props}/>,
    'wrench': (props: WrenchIconProps) => <WrenchIcon {...props}/>,
}

export const OrganizationCard: FC<OrganizationCardProps> = (props) => {
    const {
        organization,
        onUpdate,
        onDelete,
    } = props

    const translates = useTranslate()

    // @ts-ignore
    const Icon = Icons[organization.icon]

    return (
        <Paper sx={ContainerStyles}>
            <Box sx={HeaderStyles}>
                <Box sx={HeaderInfoStyles}>
                    <Icon/>
                    <Text sx={OrganizationNameStyles}>{organization.name}</Text>
                </Box>
                <OrganizationCardOptions onDelete={onDelete}/>
            </Box>
            <Divider/>
            <Text sx={LicensesHeaderStyles}>
                {translates.dashboard.organizationCard.licensesInfoLabel}
            </Text>
            <Box sx={InfoContainerStyles}>
                <OrganizationCardInfoColumn
                    onUpdate={(tracking) => onUpdate({
                        licenses: {
                            tracking,
                            protection: organization.licenses.protection
                        }
                    })}
                    label={translates.dashboard.organizationCard.trackingLicensesLabel}
                    inUseLicenses={organization.licenses.tracking.inUse}
                    assignedLicenses={organization.licenses.tracking.assigned}
                />
                <OrganizationCardInfoColumn
                    onUpdate={(protection) => onUpdate({
                        licenses: {
                            protection,
                            tracking: organization.licenses.tracking
                        }
                    })}
                    label={translates.dashboard.organizationCard.protectionLicensesLabel}
                    inUseLicenses={organization.licenses.protection.inUse}
                    assignedLicenses={organization.licenses.protection.assigned}
                />
            </Box>
        </Paper>
    )
}

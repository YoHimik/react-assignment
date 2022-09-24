import React, {FC, useContext} from 'react'
import {DashboardHeader} from "./DashboardHeader";
import {Box, Button, Divider} from "../../components";
import {OrganizationsList} from "./OrganizationsList";
import {useTranslate} from "../../hooks";
import {DashboardContext} from "../../contexts";

const DashboardContainerStyles = {
    p: 4,
    display: 'flex',
    flexDirection: 'column',
    flex: '1'
}

const LoadMoreButtonStyles = {
    alignSelf: 'center',
}

export const Dashboard: FC = () => {
    const {
        isNeedToShowLoadMore
    } = useContext(DashboardContext)

    const translates = useTranslate()

    return (
        <Box sx={DashboardContainerStyles}>
            <DashboardHeader />
            <Divider/>
            <OrganizationsList/>
            {isNeedToShowLoadMore && <Button sx={LoadMoreButtonStyles}>
                {translates.dashboard.loadMoreOrganizationsLabel}
            </Button>}
        </Box>
    )
}

import {Translate} from "../types";

export const EnUs: Translate = {
    dashboard: {
        title: 'Dashboard',
        totalOrganizationsLabel: (organizationsCount: number) => `All organizations (${organizationsCount})`,
        noOrganizationsLabel: 'No organizations',
        noSearchOrganizationsLabel: 'No organizations matching search value',
        searchOrganizationInputPlaceholder: 'Search organization',
        newOrganizationButtonLabel: 'Add new organization',
        organizationCard: {
            licensesInfoLabel: 'Licenses',
            trackingLicensesLabel: 'Tracking',
            protectionLicensesLabel: 'Protection',
            inUseLicensesLabel: 'In use:',
            assignedLicensesLabel: 'Assigned:',
            licensesLabel: (internal, external) => `Internal: ${internal} | External: ${external}`,
            editLabel: 'Edit',
            deleteLabel: 'Delete Organization',
            goLabel: 'Go to Organization'
        },
        loadMoreOrganizationsLabel: 'Load more',
    }
}

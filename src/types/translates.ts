export interface Translate {
    dashboard: {
        title: string
        totalOrganizationsLabel: (organizationsCount: number) => string
        noOrganizationsLabel: string
        noSearchOrganizationsLabel: string
        searchOrganizationInputPlaceholder: string
        newOrganizationButtonLabel: string
        organizationCard: {
            licensesInfoLabel: string,
            trackingLicensesLabel: string
            protectionLicensesLabel: string
            inUseLicensesLabel: string
            assignedLicensesLabel: string,
            licensesLabel: (internal: number, external: number) => string,
            editLabel: string,
            deleteLabel: string,
            goLabel: string
        },
        loadMoreOrganizationsLabel: string,
    }
}

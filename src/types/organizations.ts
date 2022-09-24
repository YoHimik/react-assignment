export interface OrganizationLicensesInfo {
    inUse: {
        external: number
        internal: number
    }
    assigned: number
}

export interface Organization {
    id: string
    name: string
    icon: string
    licenses: {
        tracking: OrganizationLicensesInfo
        protection: OrganizationLicensesInfo
    }
}

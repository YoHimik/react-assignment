import React, {
    ChangeEvent,
    createContext,
    FC,
    PropsWithChildren,
    SetStateAction,
    useCallback,
    useMemo,
    useState
} from 'react'
import {Language, Organization} from "../types";

const NEW_ORGANIZATION = (): Organization => ({
    id: Math.random().toString(),
    name: 'New organization',
    icon: 'animation',
    licenses: {
        tracking: {
            inUse: {
                internal: 200,
                external: 300
            },
            assigned: 400
        },
        protection: {
            inUse: {
                internal: 200,
                external: 300
            },
            assigned: 400
        }
    }
})

export interface DashboardContextValue {
    organizations: Organization[]
    totalOrganizationsCount: number
    isNeedToShowLoadMore: boolean
    addOrganization: () => void
    onSearchOrganizationChange: (e: ChangeEvent<HTMLInputElement>) => void
    updateOrganizationByIndex: (index: number, value: Partial<Organization>) => void
    deleteOrganizationByIndex: (index: number) => void
}

export const DashboardContext = createContext<DashboardContextValue>({
    organizations: [],
    totalOrganizationsCount: 0,
    isNeedToShowLoadMore: false,
    addOrganization: () => undefined,
    onSearchOrganizationChange: () => undefined,
    updateOrganizationByIndex: () => undefined,
    deleteOrganizationByIndex: () => undefined,
})

export interface DashboardContextProviderProps {
    defaultOrganizations?: Organization[]
    defaultTotalOrganizationsCount?: number
}

export const DashboardContextProvider: FC<PropsWithChildren<DashboardContextProviderProps>> = (props) => {
    const {
        defaultOrganizations = [],
        defaultTotalOrganizationsCount = 0,
        children,
    } = props

    const [dashboard, setDashboard] = useState({
        organizations: defaultOrganizations,
        totalOrganizationsCount: defaultTotalOrganizationsCount,
        loadedOrganizationsCount: defaultOrganizations.length
    })

    const addOrganization = useCallback(() => {
        setDashboard(prev => ({
            ...prev,
            organizations: [...prev.organizations, NEW_ORGANIZATION()],
            totalOrganizationsCount: prev.totalOrganizationsCount + 1,
            loadedOrganizationsCount: prev.loadedOrganizationsCount + 1
        }))
    }, [])

    const updateOrganizationByIndex = useCallback((index: number, value: Partial<Organization>) => {
        setDashboard(prev => {
            const newOrganizations = prev.organizations.slice()
            newOrganizations[index] = {
                ...newOrganizations[index],
                ...value,
            }
            return {
                ...prev,
                organizations: newOrganizations
            }
        })
    }, [])

    const deleteOrganizationByIndex = useCallback((index: number) => {
        setDashboard(prev => {
            const newOrganizations = prev.organizations.slice()
            newOrganizations.splice(index, 1)
            return {
                ...prev,
                totalOrganizationsCount: prev.totalOrganizationsCount - 1,
                loadedOrganizationsCount: prev.loadedOrganizationsCount - 1,
                organizations: newOrganizations
            }
        })
    }, [])

    const [searchOrganizationValue, setSearchOrganizationValue] = useState('')

    const onSearchOrganizationChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value.trim()
        setSearchOrganizationValue(value)
    }, [])

    const filteredOrganization = useMemo(() => {
        if (!searchOrganizationValue) return dashboard.organizations

        const regex = new RegExp(searchOrganizationValue, 'i')
        return dashboard.organizations.filter(o => regex.test(o.name))
    }, [searchOrganizationValue, dashboard.organizations])

    const isNeedToShowLoadMore = dashboard.loadedOrganizationsCount < dashboard.totalOrganizationsCount

    return (
        <DashboardContext.Provider value={{
            organizations: filteredOrganization,
            totalOrganizationsCount: dashboard.totalOrganizationsCount,
            isNeedToShowLoadMore,
            addOrganization,
            onSearchOrganizationChange,
            updateOrganizationByIndex,
            deleteOrganizationByIndex,
        }}>
            {children}
        </DashboardContext.Provider>
    )
}

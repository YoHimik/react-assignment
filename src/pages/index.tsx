import * as React from 'react';
import type {NextPage} from 'next';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Link from '../Link';
import ProTip from '../ProTip';
import Copyright from '../Copyright';
import {Dashboard} from "../modules";
import {useTranslate} from "../hooks";
import {Title} from "../components";
import {Organization} from '../types';
import {DashboardContextProvider} from "../contexts";

const ORGANIZATIONS: Organization[] = [{
    id: '1',
    icon: 'health',
    name: 'Corporation',
    licenses: {
        tracking: {
            inUse: {
                internal: 840,
                external: 405
            },
            assigned: 1420,
        },
        protection: {
            inUse: {
                internal: 210,
                external: 160
            },
            assigned: 140,
        },
    }
}, {
    id: '2',
    icon: 'album',
    name: 'Peach',
    licenses: {
        tracking: {
            inUse: {
                internal: 1840,
                external: 405
            },
            assigned: 1220,
        },
        protection: {
            inUse: {
                internal: 250,
                external: 120
            },
            assigned: 640,
        },
    }
}, {
    id: '3',
    icon: 'wrench',
    name: 'Pineapple',
    licenses: {
        tracking: {
            inUse: {
                internal: 3840,
                external: 405
            },
            assigned: 15220,
        },
        protection: {
            inUse: {
                internal: 730,
                external: 230
            },
            assigned: 3140,
        },
    }
}, {
    id: '4',
    icon: 'people',
    name: 'Boom',
    licenses: {
        tracking: {
            inUse: {
                internal: 840,
                external: 405
            },
            assigned: 920,
        },
        protection: {
            inUse: {
                internal: 200,
                external: 100
            },
            assigned: 450,
        },
    }
}, {
    id: '5',
    icon: 'health',
    name: 'Some name',
    licenses: {
        tracking: {
            inUse: {
                internal: 440,
                external: 405
            },
            assigned: 920,
        },
        protection: {
            inUse: {
                internal: 140,
                external: 65
            },
            assigned: 140,
        },
    }
}, {
    id: '6',
    icon: 'album',
    name: 'Very Long Organization Name',
    licenses: {
        tracking: {
            inUse: {
                internal: 840,
                external: 405
            },
            assigned: 1220,
        },
        protection: {
            inUse: {
                internal: 226,
                external: 150
            },
            assigned: 140,
        },
    }
}]

const TOTAL_ORGANIZATION = 15

const Home: NextPage = () => {
    const translates = useTranslate()
    return (
        <>
            <Title content={translates.dashboard.title}/>
            <DashboardContextProvider
                defaultTotalOrganizationsCount={TOTAL_ORGANIZATION}
                defaultOrganizations={ORGANIZATIONS}
            >
                <Dashboard/>
            </DashboardContextProvider>
        </>
    );
};

export default Home;

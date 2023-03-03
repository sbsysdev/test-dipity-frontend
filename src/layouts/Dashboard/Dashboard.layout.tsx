/* react */
import { memo } from 'react';
import { Outlet } from 'react-router-dom';
/* hooks */
import { useDashboard } from './useDashboard.hook';

function Dashboard() {
    const {} = useDashboard();

    return <Outlet />;
}

export default memo(Dashboard);

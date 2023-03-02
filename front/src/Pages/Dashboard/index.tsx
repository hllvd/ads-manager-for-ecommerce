
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Chart from '../../Components/shared/Chart';
import Deposits from '../../Components/shared/Deposits';
import { useAppDispatch } from '../../app/hooks';
import Orders from '../../Components/shared/Orders';
// import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { setTitle, setNotificationCounter } from '../../features/ui/ui-slice';

export const DashboardPage = () => {
    const dispatch = useAppDispatch();
    useEffect(() => {
        dispatch(setTitle("Dashboard"))
        dispatch(setNotificationCounter(3))
    }, [dispatch])

    return (
        <Grid container spacing={3}>
            {/* Chart */}
            <Grid item xs={12} md={8} lg={9}>
                <Paper
                    sx={{
                        p: 2,
                        display: 'flex',
                        flexDirection: 'column',
                        height: 240,
                    }}
                >
                    <Chart />
                </Paper>
            </Grid>
            {/* Recent Deposits */}
            <Grid item xs={12} md={4} lg={3}>
                <Paper
                    sx={{
                        p: 2,
                        display: 'flex',
                        flexDirection: 'column',
                        height: 240,
                    }}
                >
                    <Deposits />
                </Paper>
            </Grid>
            {/* Recent Orders */}
            <Grid item xs={12}>
                <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
                    <Orders />
                </Paper>
            </Grid>
        </Grid>
    )
}
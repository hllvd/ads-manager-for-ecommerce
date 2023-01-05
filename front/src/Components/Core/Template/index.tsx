import * as React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { Copyright } from '../Copyright';
import Box from '@mui/material/Box';

import { TopMenu } from '../Menu-top';
import { MenuLeft } from '../Menu-left';
import { MainContent } from '../Main-content';


const drawerWidth: number = 240;

const mdTheme = createTheme();

function DashboardContent(props: { children: JSX.Element }) {
    const [open, setOpen] = React.useState(true);
    const toggleDrawer = () => {
        setOpen(!open);
    };

    return (
        <ThemeProvider theme={mdTheme}>
            <Box sx={{ display: 'flex' }}>
                <CssBaseline />
                <TopMenu open={open} toggledrawer={toggleDrawer} drawerwidth={drawerWidth} />
                <MenuLeft open={open} toggledrawer={toggleDrawer} drawerwidth={drawerWidth} />
                <MainContent>
                    {props.children}
                    <Copyright sx={{ pt: 4 }} />
                </MainContent>
            </Box>
        </ThemeProvider>
    );
}

export default function Navbar(props: { children: JSX.Element }) {
    return <DashboardContent>{props.children}</DashboardContent>;
}
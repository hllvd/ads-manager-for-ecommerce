import * as React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { Copyright } from '../Components/Copyright/Copyright';
import Box from '@mui/material/Box';

import { TopMenu } from '../Components/Menu-top/TopMenu';
import { MenuLeft } from '../Components/Menu-left/MenuLeft';
import { MainContent } from '../Components/Main-content/MainContent';
import { DashboardPage } from './Dashboard';


const drawerWidth: number = 240;



const mdTheme = createTheme();

function DashboardContent() {
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
          <DashboardPage />
          <Copyright sx={{ pt: 4 }} teste="Moaee" />
        </MainContent>
      </Box>
    </ThemeProvider>
  );
}

export default function Navbar() {
  return <DashboardContent />;
}

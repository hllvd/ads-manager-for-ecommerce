import * as React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { Copyright } from '../Components/Core/Copyright';
import Box from '@mui/material/Box';

import { TopMenu } from '../Components/Core/Menu-top';
import { MenuLeft } from '../Components/Core/Menu-left';
import { MainContent } from '../Components/Core/Main-content';
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

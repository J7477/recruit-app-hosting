import React, { useEffect, useState, useContext } from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import IconButton from '@mui/material/IconButton';
import AdminContext from '../../context/AdminContext/AdminContext';
import AdminJobCard from './AdminJobCard';

const drawerWidth = 240;

const AdminJobs = (props) => {

    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <Box>
            <Toolbar />
            <Divider />
            <List>
                <ListItem>
                    <Button color="inherit" component={Link} to={"/admin"}>Employers</Button>
                </ListItem>
                <ListItem>
                    <Button color="inherit" component={Link} to={"/adminjobs"}>Jobs</Button>
                </ListItem>
            </List>
            <Divider />
            <List >
                <ListItem>
                    <Button color="inherit" component={Link} to={"/adminusers"}>Users</Button>
                </ListItem>
                <ListItem>
                    <Button color="inherit" component={Link} to={"/"}>Back to Home Page</Button>
                </ListItem>
            </List>
        </Box>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    const [employer, setEmployer] = useState('')

    const context = useContext(AdminContext)
    const { data, getJobs } = context;

    useEffect(() => {

        getJobs()
        // eslint-disable-next-line
    }, [])


    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar
                position="fixed"
                sx={{
                    width: { sm: `calc(100% - ${drawerWidth}px)` },
                    ml: { sm: `${drawerWidth}px` },
                    backgroundColor: '#247BA0'
                }}
            >
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" noWrap component="div">
                        Jobs
                    </Typography>
                </Toolbar>
            </AppBar>
            <Box
                component="nav"
                sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
                aria-label="mailbox folders"
            >
                {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth, backgroundColor: '#70C1B3' },
                    }}
                >
                    {drawer}
                </Drawer>


                <Drawer
                    variant="permanent"
                    sx={{
                        display: { xs: 'none', sm: 'block' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth, backgroundColor: '#70C1B3' },
                    }}
                    open
                >
                    {drawer}
                </Drawer>
            </Box>
            <Box
                component="main"
                sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
            >
                <Toolbar />

                {data.map((detail) => {
                    return (
                        <AdminJobCard jobs={detail} />
                    )
                })}

            </Box>
        </Box>
    );
}


export default AdminJobs;
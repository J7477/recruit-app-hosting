import React, { useState } from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import emailjs from 'emailjs-com';



const drawerWidth = 240;


const EmpComplaint = (props) => {



    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };


    const [job, setJob] = useState({ title: '', description: '', email: '' })

    const handleSubmit = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_o5oi2sh', 'template_y752zfs', e.target, 'user_ZbpvIUCtAPhmgEdIrK3Ms')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });


        setJob({ title: '', description: '', email: '' })
        alert('Email sent')
    }

    const onChange = (e) => {
        setJob({ ...job, [e.target.name]: e.target.value })
    }


    const drawer = (
        <Box>
            <Toolbar />
            <Divider />
            <List>
                <ListItem button  >
                    <Button color="inherit" component={Link} to={"/empProfile"}>Profile</Button>
                </ListItem>
                <ListItem button  >
                    <Button color="inherit" component={Link} to={"/postVacancy"}>Post Vacancy</Button>
                </ListItem>
            </List>
            <Divider />
            <List >
                <ListItem button  >
                    <Button color="inherit" component={Link} to={"/totalVacancy"}>Total Vacancies</Button>
                </ListItem>
                <ListItem button  >
                    <Button color="inherit" component={Link} to={"/empcomplaint"}>Complaints</Button>
                </ListItem>
                <ListItem button  >
                    <Button color="inherit" component={Link} to={"/"}>Back to Home Page</Button>
                </ListItem>

            </List>
        </Box>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

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
                        Complaints
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
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth, backgroundColor: '#70C1B3' }
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




                {/* Form  */}

                <form noValidate autoComplete="off" onSubmit={handleSubmit}>
                    <TextField
                        // eslint-disable-next-line
                        style={{ marginRight: 30 }, { maxWidth: 200 }}
                        label="Subject"
                        name="title"
                        variant="outlined"
                        value={job.title}
                        required
                        // fullWidth
                        onChange={onChange}
                    />
                    <TextField
                        // eslint-disable-next-line
                        style={{ marginLeft: 30 }, { maxWidth: 200 }}
                        label="Email"
                        name="email"
                        variant="outlined"
                        value={job.email}
                        required
                        // fullWidth
                        onChange={onChange}
                    />
                    <TextField
                        // eslint-disable-next-line
                        style={{ marginTop: 20 }}
                        label="Description"
                        name="description"
                        variant="outlined"
                        value={job.description}
                        multiline
                        rows={4}
                        required
                        fullWidth
                        onChange={onChange}
                    />


                    <Button type='submit' color="primary" style={{ display: 'block' }} >Send Complaint</Button>

                </form>

            </Box>
        </Box>

    );
}


export default EmpComplaint;
import React from 'react'
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { CardActionArea } from '@mui/material';
import { Grid } from '@mui/material';
import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import IconButton from '@mui/material/IconButton';


const drawerWidth = 240;

const UserDashboard = (props) => {

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
          <Button color="inherit" component={Link} to={"/profile"}>Dashboard</Button>
        </ListItem>
        <ListItem>
          <Button color="inherit" component={Link} to={"/fillEducationForm"}>Fill Education Form</Button>
        </ListItem>
        {/* <ListItem>
              <Button color="inherit" component={Link} to={"/removeVacancy"}>View Vacancy</Button>
          </ListItem> */}
      </List>
      <Divider />
      <List >
        <ListItem>
          <Button color="inherit" component={Link} to={"/jobHistory"}>History of Applied Jobs</Button>
        </ListItem>
        {/* <ListItem>
              <Button color="inherit" component={Link} to={"/profile"}>Profile</Button>
          </ListItem> */}
        <ListItem>
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
          backgroundColor: '#B3D9FF'
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
            User Dashboard
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
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth, backgroundColor: '#00264D' },
          }}
        >
          {drawer}
        </Drawer>


        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth, backgroundColor: '#00264D' },
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




        {/* cards  */}
        <Grid container spacing={2} columns={16}>
          <Grid item xs={8}>
            <Grid item>


              <Card sx={{ maxWidth: 345 }}>
                <CardActionArea>

                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      Title
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      text
                    </Typography>
                  </CardContent>
                </CardActionArea>

              </Card>


            </Grid>
          </Grid>

          <Grid item xs={8}>
            <Grid item>
              <Card sx={{ maxWidth: 345 }}>
                <CardActionArea>

                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      Title
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      text
                    </Typography>
                  </CardContent>
                </CardActionArea>

              </Card>
            </Grid>
          </Grid>
        </Grid>

        <Grid container spacing={2} columns={16}>
          <Grid item xs={8}>
            <Grid item>
              <Card sx={{ maxWidth: 345 }}>
                <CardActionArea>

                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      Lizard
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      text
                    </Typography>
                  </CardContent>
                </CardActionArea>

              </Card>
            </Grid>
          </Grid>


          <Grid item xs={8}>
            <Grid item> <Card sx={{ maxWidth: 345 }}>
              <CardActionArea>

                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Lizard
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    text
                  </Typography>
                </CardContent>
              </CardActionArea>

            </Card>


            </Grid>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}

UserDashboard.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default UserDashboard;
import React, { useState, useContext } from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import { makeStyles } from '@material-ui/core';
import MenuIcon from '@mui/icons-material/Menu';
import IconButton from '@mui/material/IconButton';
import IdContext from '../../context/userProfile/IdContext';


const drawerWidth = 240;

const useStyles = makeStyles({
  field: {
    display: 'block',
    backgroundColor: 'blue',
    marginTop: 15,
    marginLeft: 20
  }
})

const EducationForm = (props) => {

  const classes = useStyles();


  const context = useContext(IdContext)
  // eslint-disable-next-line
  const { addDetail } = context;


  const { window } = props;
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };


  const [detail, setDetail] = useState({ ten: "", twelve: "", graduation: "", postgraduation: "" })

  const handleOnClick = (e) => {
    e.preventDefault()
    addDetail(detail.ten, detail.twelve, detail.graduation, detail.postgraduation)
    setDetail({ ten: "", twelve: "", graduation: "", postgraduation: "" })
  }

  const onChange = (e) => {
    setDetail({ ...detail, [e.target.name]: e.target.value })
  }




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
        <ListItem button  >
          <Button color="inherit" component={Link} to={"/complaint"}>Complaints</Button>
        </ListItem>
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
            Fill Education Form
          </Typography>
        </Toolbar>
      </AppBar>



      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
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

        <form noValidate autoComplete="off">
          <TextField
            // eslint-disable-next-line
            style={{ marginTop: 20 }, { marginBottom: 20 }}
            label="10 th marks"
            name="ten"
            variant="outlined"
            onChange={onChange}
            value={detail.ten}
          />
          <TextField
            // eslint-disable-next-line
            style={{ marginTop: 20 }, { marginBottom: 20 }}
            label="12 th marks"
            name="twelve"
            variant="outlined"
            onChange={onChange}
            value={detail.twelve}
          />
          <TextField
            // eslint-disable-next-line
            style={{ marginTop: 20 }, { marginBottom: 20 }}
            label="Graduation"
            name="graduation"
            variant="outlined"
            onChange={onChange}
            value={detail.graduation}
          />
          <TextField
            // eslint-disable-next-line
            style={{ marginTop: 20 }, { marginBottom: 20 }, { marginLeft: 20 }}
            label="Post graduation10"
            name="postgraduation"
            variant="outlined"
            onChange={onChange}
            value={detail.postgraduation}
          />
          {/* eslint-disable-next-line */}
          <Button color="primary" className={classes.field} onClick={handleOnClick}>Submit</Button>
        </form>

      </Box>
    </Box>

  );
}


export default EducationForm;
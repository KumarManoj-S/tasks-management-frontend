import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from 'react-avatar';
import AddIcon from '@material-ui/icons/Add';

const drawerWidth = 120;

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        width: '100%'
    },
    selected: {
        backgroundColor: theme.palette.secondary.light,
    },
    drawer: {
        [theme.breakpoints.up('sm')]: {
            width: drawerWidth,
            flexShrink: 0,
        },
    },
    drawerPaperDekstop: {
        width: drawerWidth,
        background: 'rgba(255, 255, 255, 0)'
    },
    drawerPaperMobile: {
        width: drawerWidth,
        background: 'white'
    }
}));

const colors = ['#5dc5caf5', '#72b2e0f5', '#c6e282f5', '#e2c982f5']
const DrawerList = (props) => {
    const { categories, selectedCategory, handleCategorySelection, handleDrawerToggle, handleAddNewCategory } = props;
    return (
        <div>
            <List>
                {categories.map((text, index) => (
                    <Box key={text} mb={2}>
                        <div onClick={() => {
                            handleCategorySelection({ index, text });
                            handleDrawerToggle();
                        }}>
                            <ListItem selected={index === selectedCategory.index} button key={text}>
                                <Grid container justify="center" >
                                    <Grid container justify="center">
                                        <ListItemIcon>
                                            <Avatar
                                                color={colors[Math.floor(Math.random() * colors.length)]}
                                                size="50"
                                                round={true}
                                                name={text}
                                            />
                                        </ListItemIcon>
                                    </Grid>
                                    <Grid container alignContent="center" alignItems="center" justify="center">
                                        <div>
                                            <ListItemText primary={text} />
                                        </div>
                                    </Grid>
                                </Grid>
                            </ListItem>
                        </div>
                    </Box>
                ))}
                <Box key={"plusButton"} mt={2}>
                    <div onClick={() => {
                        handleAddNewCategory();
                        handleDrawerToggle();
                    }}>
                        <ListItem button key={"plusButton"}>
                            <Grid container justify="center" >
                                <ListItemIcon>
                                    <AddIcon color="primary" style={{ fontSize: 50 }} />
                                </ListItemIcon>
                            </Grid>
                        </ListItem>
                    </div>
                </Box>
            </List>
        </div >
    );
}

const SideNav = (props) => {
    const classes = useStyles();
    const { handleDrawerToggle, mobileOpen, categories, handleCategorySelection, selectedCategory, handleAddNewCategory } = props;
    return (
        <nav className={classes.drawer} aria-label="mailbox folders">
            <Hidden smUp implementation="css">
                <Drawer
                    variant="temporary"
                    anchor={'left'}
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    classes={{
                        paper: classes.drawerPaperMobile,
                    }}
                    ModalProps={{
                        keepMounted: true,
                    }}
                >
                    <DrawerList
                        categories={categories}
                        handleCategorySelection={handleCategorySelection}
                        selectedCategory={selectedCategory}
                        handleDrawerToggle={handleDrawerToggle}
                        handleAddNewCategory={handleAddNewCategory}
                    />
                </Drawer>
            </Hidden>
            <Hidden xsDown implementation="css">
                <Drawer
                    classes={{
                        paper: classes.drawerPaperDekstop,
                    }}
                    variant="permanent"
                    open
                >
                    <DrawerList
                        categories={categories}
                        handleCategorySelection={handleCategorySelection}
                        selectedCategory={selectedCategory}
                        handleDrawerToggle={() => { }}
                        handleAddNewCategory={handleAddNewCategory}
                    />
                </Drawer>
            </Hidden>
        </nav>
    );
};

export default SideNav;
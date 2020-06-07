import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import logo from '../../images/horizontal_logo.png'

const drawerWidth = 120;

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        width: '100%'
    },
    appBar: {
        [theme.breakpoints.up('sm')]: {
            width: `calc(100% - ${drawerWidth}px)`,
            marginLeft: drawerWidth,
        }
    },
    menuButton: {
        marginRight: theme.spacing(2),
        [theme.breakpoints.up('sm')]: {
            display: 'none',
        },
    },
}));

const MenuBar = (props) => {
    const { title, handleDrawerToggle, userName } = props;
    const classes = useStyles();
    return (
        <div className={classes.appBar}>
            <Toolbar>
                <IconButton
                    color="secondary"
                    aria-label="open drawer"
                    edge="start"
                    onClick={handleDrawerToggle}
                    className={classes.menuButton}
                >
                    <MenuIcon />
                </IconButton>
                <Grid
                    container
                    direction="row"
                    justify="space-between"
                    alignItems="center"
                >
                    <Typography color="secondary" variant="h6" noWrap>
                        {title}
                    </Typography>
                    <img width="120" src={logo} />
                    <Typography style={{ color: '#ffffffcf' }} variant="body1" noWrap>
                        Hello, {userName}
                    </Typography>
                </Grid>
            </Toolbar>
        </div>
    );
};

export default MenuBar;
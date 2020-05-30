import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Header from './ui/Header';
import TaskInput from './task_input/TaskInput';
import { TaskListView } from './task_list/TaskListView';

const styles = (theme) => ({
    root: {
        flexGrow: 1,
    },
});

class Home extends Component {
    render() {
        const { classes } = this.props;
        return (
            <div>
                <Header>
                    <Grid container className={classes.root} spacing={2}>
                        <Grid item xs={12}>
                            <Grid container justify="center" spacing={2}>
                                <Grid item xs={10} sm={5} md={5} mt={10}>
                                    <Box mt={8}>
                                        <TaskInput />
                                        <TaskListView />
                                    </Box>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Header>
            </div>
        );
    }
}

export default withStyles(styles)(Home);
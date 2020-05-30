import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Header from './ui/Header';
import TaskInput from './task_input/TaskInput';
import { getCategories } from '../api/categories';
import SideNav from './ui/SideNav';
import MenuBar from './ui/MenuBar';

const styles = (theme) => ({
    root: {
        flexGrow: 1,
        width: '100%'
    }
});

class Home extends Component {
    state = { value: 0, categories: [], mobileOpen: false, selectedCategory: {} }
    handleChange = (event, newValue) => {
        console.log("newValue", newValue)
        this.setState({ value: newValue });
    };
    async componentDidMount() {
        const categories = await getCategories();
        this.setState({ categories, selectedCategory: { index: 0, text: categories[0] } });
    }
    handleDrawerToggle = () => {
        const { mobileOpen } = this.state;
        this.setState({ mobileOpen: !mobileOpen })
    };
    handleCategorySelection = (selectedCategory) => {
        this.setState({ selectedCategory })
    }
    render() {
        const { classes } = this.props;
        const { categories, mobileOpen, selectedCategory } = this.state;
        return (
            <div>
                <Header>
                    <MenuBar handleDrawerToggle={this.handleDrawerToggle} title={selectedCategory.text} />
                    <SideNav
                        handleDrawerToggle={this.handleDrawerToggle}
                        handleCategorySelection={this.handleCategorySelection}
                        mobileOpen={mobileOpen}
                        categories={categories}
                        selectedCategory={selectedCategory}
                    />
                    <Grid container className={classes.root} spacing={2}>
                        <Grid item xs={12}>
                            <Grid container justify="center" spacing={2}>
                                <Grid item xs={10} sm={5} md={5} mt={10}>
                                    <Box mt={8}>
                                        <TaskInput />
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
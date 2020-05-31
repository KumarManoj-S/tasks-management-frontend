import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import { withStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Header from "./ui/Header";
import TaskInput from "./task_input/TaskInput";
import { getCategories } from "../api/categories";
import SideNav from "./ui/SideNav";
import MenuBar from "./ui/MenuBar";
import { TaskListView } from "./task_list/TaskListView";
import NewCategoryInput from "./NewCategoryInput";

const styles = (theme) => ({
  root: {
    flexGrow: 1,
    width: "100%",
  },
});

class Home extends Component {
  state = {
    value: 0,
    categories: [],
    mobileOpen: false,
    selectedCategory: {},
    openCategoryDialog: false,
  };
  handleChange = (event, newValue) => {
    console.log("newValue", newValue);
    this.setState({ value: newValue });
  };
  componentDidMount() {
    getCategories()
      .then(() => ["Personal", "Work", "Tour", "Gym", "New Office"])
      .then((categories) => {
        console.log("categories", categories);
        this.setState({
          categories,
          selectedCategory: {
            index: 0,
            text: categories.length !== 0 ? categories[0] : "Personal",
          },
        });
      })
      .catch((err) =>
        this.setState({
          categories: [],
          selectedCategory: { index: 0, text: "Personal" },
        })
      );
  }
  handleDrawerToggle = () => {
    const { mobileOpen } = this.state;
    this.setState({ mobileOpen: !mobileOpen });
  };
  handleCategorySelection = (selectedCategory) => {
    this.setState({ selectedCategory });
  };
  handleAddNewCategory = () => {
    this.setState({ openCategoryDialog: true });
  };
  handleCloseCategoryDialog = () => {
    this.setState({ openCategoryDialog: false });
  };
  handleCreateCategoryDialog = () => {
    console.log("created");
    this.setState({ openCategoryDialog: false });
  };
  render() {
    const { classes } = this.props;
    const {
      categories,
      mobileOpen,
      selectedCategory,
      openCategoryDialog,
    } = this.state;
    return (
      <div>
        <Header>
          <NewCategoryInput
            open={openCategoryDialog}
            handleClose={this.handleCloseCategoryDialog}
            handleCreate={this.handleCreateCategoryDialog}
          />
          <MenuBar
            handleDrawerToggle={this.handleDrawerToggle}
            title={selectedCategory.text}
          />
          <SideNav
            handleDrawerToggle={this.handleDrawerToggle}
            handleCategorySelection={this.handleCategorySelection}
            mobileOpen={mobileOpen}
            categories={categories}
            selectedCategory={selectedCategory}
            handleAddNewCategory={this.handleAddNewCategory}
          />
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

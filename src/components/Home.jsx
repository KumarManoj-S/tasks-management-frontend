import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import { withStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Header from "./ui/Header";
import TaskInput from "./task_input/TaskInput";
import { getCategories, createCategory } from "../api/categories";
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
    lastCreatedTask: '',
  };
  handleCreateTask = (value) => {
    this.setState({ lastCreatedTask: value });
  }
  handleChange = (event, newValue) => {
    console.log("newValue", newValue);
    this.setState({ value: newValue });
  };
  async componentDidMount() {
    await this.loadCategories();
  }
  loadCategories = async () => {
    await getCategories()
      .then((res) => res.map(o => o.name))
      .then((categories) => {
        this.setState({
          categories,
          selectedCategory: {
            index: 0,
            text: categories[0],
          },
        });
      })
      .catch((err) =>
        alert("Error! please try after some time!")
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
  handleCreateCategoryDialog = async (category) => {
    await createCategory(category)
      .then(async () => await this.loadCategories())
      .catch(() => alert("Error creating a category!"));
    this.setState({ openCategoryDialog: false });
  };
  render() {
    const { classes, userName } = this.props;
    const {
      categories,
      mobileOpen,
      selectedCategory,
      openCategoryDialog,
      lastCreatedTask
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
            userName={userName}
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
                  <Box mt={1}>
                    <TaskInput category={selectedCategory.text} handleCreateTask={this.handleCreateTask}/>
                  </Box>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Header>
        <Grid container justify="center">
          <Grid item xs={10} sm={8} md={8}>
            <Box mt={25}>
              <TaskListView category={selectedCategory.text} lastCreatedTask={lastCreatedTask} />
            </Box>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default withStyles(styles)(Home);

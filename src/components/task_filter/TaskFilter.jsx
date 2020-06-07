import React, { Component } from "react";
import PropTypes from "prop-types";
import FilterListIcon from "@material-ui/icons/FilterList";
import { Checkbox, FormControlLabel, Box, IconButton } from "@material-ui/core";
import DropdownFilter from "./DropdownFilter";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import { blue } from "@material-ui/core/colors";

const BlueCheckbox = withStyles({
  root: {
    color: blue[400],
    "&$checked": {
      color: blue[600],
    },
  },
  checked: {},
})((props) => <Checkbox color="default" {...props} />);

class TaskFilter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isFilterOpen: false,
      selectedFilters: this.initializeSelectedFilters(),
    };
  }

  initializeSelectedFilters = () => {
    const selectedFilters = {};
    this.props.applicableFilters.forEach((filter) => {
      selectedFilters[filter.filterKey] = [];
    });
    return selectedFilters;
  };
  render() {
    return (
      <div>
        <Grid container justify="center">
          <IconButton onClick={this.onFilterClick}>
            <FilterListIcon />
          </IconButton>
        </Grid>
        {this.renderFilterSection()}
      </div>
    );
  }
  onNotCompletedClick = () => {
    this.setState((state) => {
      let selectValues = [];
      if (!state.notCompleted) {
        selectValues.push(false);
      }
      if (state.completed) {
        selectValues.push(true);
      }
      this.handleTaskStatusFilterChange(selectValues);
      return { notCompleted: !state.notCompleted };
    });
  };
  onCompletedClick = () => {
    this.setState((state) => {
      let selectValues = [];
      if (state.notCompleted) {
        selectValues.push(false);
      }
      if (!state.completed) {
        selectValues.push(true);
      }
      this.handleTaskStatusFilterChange(selectValues);
      return { completed: !state.completed };
    });
  };
  renderFilterSection = () => {
    const { applicableFilters, classes } = this.props;
    const { notCompleted, completed, isFilterOpen } = this.state;
    let filterDisplayStyle = {};
    if (!isFilterOpen) {
      filterDisplayStyle = {
        display: "none",
      };
    }
    return (
      <div>
        <Grid
          container
          spacing={4}
          justify="center"
          alignItems="center"
          style={filterDisplayStyle}
        >
          <Grid item>
            <FormControlLabel
              classes={{ label: classes.label }}
              control={
                <BlueCheckbox
                  checked={notCompleted}
                  onChange={this.onNotCompletedClick}
                  name="checkedA"
                />
              }
              label="To do"
            />
          </Grid>
          <Grid item>
            <FormControlLabel
              classes={{ label: classes.label }}
              control={
                <BlueCheckbox
                  checked={completed}
                  onChange={this.onCompletedClick}
                  name="checkedA"
                />
              }
              label="Done"
            />
          </Grid>
          {applicableFilters.map((filter) => (
            <Grid item xs={6} sm={3}>
              <Box mt={-2} mr={2}>
                {this.renderFilterAsDropdown(filter)}
              </Box>
            </Grid>
          ))}
        </Grid>
      </div>
    );
  };
  handleTaskStatusFilterChange = (selectedValues) => {
    const selectedFilters = {
      ...this.state.selectedFilters,
      status: selectedValues,
    };
    this.setState({
      selectedFilters,
    });
    this.props.onFiltersChange(selectedFilters);
  };
  handleFilterChange = (filterKey, selectedValues) => {
    const selectedFilters = {
      ...this.state.selectedFilters,
      [filterKey]: selectedValues,
    };
    this.setState({
      selectedFilters,
    });
    this.props.onFiltersChange(selectedFilters);
  };
  renderFilterAsDropdown = (filter) => {
    return (
      <DropdownFilter
        key={filter.filterKey}
        filter={filter}
        onChange={this.handleFilterChange}
      />
    );
  };
  onFilterClick = () => {
    this.setState((state) => ({
      isFilterOpen: !state.isFilterOpen,
    }));
  };
  onFilterClose = () => {
    this.setState({
      isFilterOpen: false,
    });
  };
}

TaskFilter.propTypes = {
  applicableFilters: PropTypes.arrayOf(
    PropTypes.shape({
      filterKey: PropTypes.string,
      filterName: PropTypes.string,
      values: PropTypes.arrayOf(PropTypes.string),
    })
  ),
  onFiltersChange: PropTypes.func,
};

const useStyles = (theme) => ({
  filter: {
    display: "flex",
  },
  label: {
    color: "#393939c4",
    fontSize: 15,
  },
});

export default withStyles(useStyles)(TaskFilter);

import React, { Component } from "react";
import PropTypes from "prop-types";
import FilterListIcon from "@material-ui/icons/FilterList";
import {
  Checkbox,
  FormControlLabel,
  Box,
  IconButton
} from "@material-ui/core";
import DropdownFilter from "./DropdownFilter";
import { withStyles } from "@material-ui/core/styles";
import Grid from '@material-ui/core/Grid';

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
    const { isFilterOpen } = this.state;
    const { classes } = this.props;
    console.log("isFilterOpen", isFilterOpen)
    return (
      <div>
        <Grid container justify="center">
          <IconButton onClick={this.onFilterClick}>
            <FilterListIcon />
          </IconButton>
        </Grid>
        {isFilterOpen && this.renderFilterSection()}
      </div>
    );
  }
  renderFilterSection = () => {
    const { applicableFilters } = this.props;
    return (
      <div>
        <Grid container spacing={1} justify="center" alignItems="center">
          <Grid item >
            <FormControlLabel
              control={<Checkbox checked={false} onChange={() => { }} name="checkedA" />}
              label="Yet to be completed"
            />
          </Grid>
          <Grid item >
            <FormControlLabel
              control={<Checkbox checked={false} onChange={() => { }} name="checkedA" />}
              label="Completed"
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
});

export default withStyles(useStyles)(TaskFilter);

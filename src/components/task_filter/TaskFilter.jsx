import React, { Component } from "react";
import PropTypes from "prop-types";
import FilterListIcon from "@material-ui/icons/FilterList";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  Typography,
} from "@material-ui/core";
import DropdownFilter from "./DropdownFilter";
import { withStyles } from "@material-ui/core/styles";

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
    return (
      <div className={classes.filter}>
        <FilterListIcon onClick={this.onFilterClick} />
        <Dialog open={isFilterOpen} onClose={this.onFilterClose}>
          <DialogTitle id="simple-dialog-title">Select Filters</DialogTitle>
          <DialogContent>{this.renderFilterSection()}</DialogContent>
        </Dialog>
      </div>
    );
  }
  renderFilterSection = () => {
    const { applicableFilters } = this.props;
    return (
      <div className="filter-selection">
        {applicableFilters.map((filter) => this.renderFilterAsDropdown(filter))}
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
    justifyContent: "center",
  },
});

export default withStyles(useStyles)(TaskFilter);

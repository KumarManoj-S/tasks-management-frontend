import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import {
  Select,
  InputLabel,
  Chip,
  MenuItem,
  FormControl,
} from "@material-ui/core";

export default function DropdownFilter({ filter, onChange }) {
  const useStyles = makeStyles((theme) => ({
    formControl: {
      margin: theme.spacing(1),
      minWidth: "100%",
    },
  }));
  const classes = useStyles();
  const [selectedValues, setSelected] = useState([]);
  const handleFilterChange = (filterKey, values) => {
    setSelected(values);
    onChange(filterKey, values);
  };
  return (
    <div key={filter.filterName}>
      <FormControl className={classes.formControl}>
        <InputLabel id="demo-mutiple-chip-label">
          {filter.filterName}
        </InputLabel>
        <Select
          multiple
          id={filter.filterName}
          renderValue={(selected) => (
            <div className={""}>
              {selected.map((value) => (
                <Chip key={value} label={value} />
              ))}
            </div>
          )}
          onChange={(e) => {
            handleFilterChange(filter.filterKey, e.target.value);
          }}
          value={selectedValues}
        >
          {filter.values.map((filterValue) => (
            <MenuItem key={filterValue} value={filterValue}>
              {filterValue}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}

DropdownFilter.propTypes = {
  filter: PropTypes.shape({
    filterKey: PropTypes.oneOf([PropTypes.string, PropTypes.number]),
    filterName: PropTypes.string,
    values: PropTypes.array,
  }),
};

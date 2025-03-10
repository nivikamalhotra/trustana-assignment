import React from "react";
import { TextField, Button, MenuItem, Select, FormControl, InputLabel } from "@mui/material";

const Filters = () => {
  return (
    <div className="filter-bar">
      <FormControl>
        <InputLabel>Product Category</InputLabel>
        <Select value="" displayEmpty>
          <MenuItem value="">Select</MenuItem>
        </Select>
      </FormControl>

      <FormControl>
        <InputLabel>Google Category</InputLabel>
        <Select value="" displayEmpty>
          <MenuItem value="">Select</MenuItem>
        </Select>
      </FormControl>

      <FormControl>
        <InputLabel>Status</InputLabel>
        <Select value="" displayEmpty>
          <MenuItem value="">Select</MenuItem>
        </Select>
      </FormControl>

      <Button variant="contained" color="primary">Apply Filters</Button>
      <Button variant="outlined">Reset Filters</Button>
    </div>
  );
};

export default Filters;